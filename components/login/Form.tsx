/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import Image from "next/image";
import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";

// Define the GraphQL mutation
const UserLogin = gql`
  mutation LoginEmail($email: String!, $password: String!) {
    loginEmail(email: $email, password: $password) {
      email
      message
      name
      success
      token
    }
  }
`;

const UserLoginGoogle = gql`
  mutation Mutation($email: String!) {
    loginGoogle(email: $email) {
      token
      success
      email
      name
      message
    }
  }
`;

function Form() {
  const [email, setEmail] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginWithGoogle, setLoginWithGoogle] = useState(false);

  const router = useRouter();

  // Use the useMutation hook
  const [loginEmail, { data, loading, error }] = useMutation(UserLogin);
  const [
    loginGoogle,
    { data: googleData, loading: googleLoading, error: googleError },
  ] = useMutation(UserLoginGoogle);

  // Submit handler for email/password login
  const handleSubmit = async () => {
    try {
      const response = await loginEmail({
        variables: { email, password },
      });
      if (response?.data?.loginEmail?.success) {
        console.log("Login successful:", response.data.loginEmail);
        localStorage.setItem("token", response.data.loginEmail.token);
        router.back(); // Redirect to the previous page
      } else {
        console.error("Login failed:", response.data.loginEmail.message);
        alert(response.data.loginEmail.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  // Google OAuth login
  const googleLog = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;
      try {
        const userInfo = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        ).then((res) => res.json());

        if (userInfo?.email) {
          setGmail(userInfo.email);
          setLoginWithGoogle(true); // Trigger the Google login mutation
        } else {
          console.error("Failed to fetch user info from Google.");
          alert("Failed to fetch user info from Google.");
        }
      } catch (error) {
        console.error("Error fetching Google user info:", error);
        alert("An error occurred while logging in with Google.");
      }
    },
    onError: (error) => {
      console.error("Google login failed:", error);
      alert("Google login failed. Please try again.");
    },
  });

  // Handle Google login mutation
  const handleSubmitGoogle = async () => {
    try {
      const response = await loginGoogle({
        variables: { email: gmail },
      });
      if (response?.data?.loginGoogle?.success) {
        console.log("Login successful:", response.data.loginGoogle);
        localStorage.setItem("token", response.data.loginGoogle.token);
        router.back();
      } else {
        console.error("Login failed:", response.data.loginGoogle.message);
        alert(response.data.loginGoogle.message);
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      alert("An error occurred during Google login.");
    }
  };

  // Trigger Google login mutation when email is set
  useEffect(() => {
    if (loginWithGoogle && gmail) {
      handleSubmitGoogle();
    }
  }, [loginWithGoogle, gmail]);

  return (
    <div className="flex px-0 sm:px-[40px] flex-col space-y-5">
      {/* Email Input */}
      <InputComponent
        value={email}
        setValue={setEmail}
        label="Email Address"
        // type="email"
      />

      {/* Password Input */}
      <InputComponent
        value={password}
        setValue={setPassword}
        label="Password"
        isPassword
      />

      {/* Loading and Error Messages */}
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-red-500 font-bold">Error: {error.message}</p>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full h-[45px] rounded-lg bg-activeColor text-white font-bold hover:brightness-75 font-carme"
      >
        Login
      </button>

      {/* Divider */}
      <div className="w-full h-[20px] flex items-center justify-center space-x-2">
        <div className="w-full h-[1px] bg-gray-400" />
        <p className="text-gray-300 text-[14px] whitespace-nowrap font-carme">
          Or Login With
        </p>
        <div className="w-full h-[1px] bg-gray-400" />
      </div>

      {/* Google Login Button */}
      <button
        onClick={() => googleLog()}
        className="w-full h-[45px] rounded-lg bg-white flex items-center justify-center text-black font-bold hover:brightness-75 font-carme"
      >
        <Image
          src="/assets/login/google.svg"
          width={24}
          height={24}
          alt="google"
        />
        <p className="ml-2">Google</p>
      </button>

      {/* Signup Link */}
      <p className="text-white flex items-center justify-center text-center font-semibold">
        Don{"'"}t have an account?{" "}
        <Link
          href="/signup"
          className="ml-2 text-activeColor text-[18px] underline underline-offset-8 font-bold cursor-pointer"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Form;
