"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useMutation,
  gql,
} from "@apollo/client";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import Loader from "./Loader";

const VALIDATE_TOKEN = gql`
  mutation ValidateToken($token: String!) {
    validateToken(token: $token) {
      success
      message
      user {
        id
        name
        email
      }
    }
  }
`;

// Create the Apollo Client instance outside the component
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_URI, // Ensure this environment variable is set
  cache: new InMemoryCache(),
});

function SplashWrapperContent({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const { updateUser, clearUser } = useUser();
  const [validateToken] = useMutation(VALIDATE_TOKEN);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const onFinish = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        clearUser();
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await validateToken({ variables: { token } });

        if (data?.validateToken?.success) {
          updateUser(data.validateToken.user);
        } else {
          console.warn("Token validation failed. Logging out...");
          clearUser();
          localStorage.removeItem("token");
          router.push("/login");
        }
      } catch (err) {
        console.error("Error validating token:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeUser();
  }, [router, validateToken, updateUser, clearUser]);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={onFinish} />
      ) : (
        <div>
          {isLoading ? (
            <div className="w-full h-screen bg-background fixed top-0 backdrop-blur-4xl left-0 right-0 z-50 backdrop-filter drop-shadow-2xl py-[10px] px-[20px] flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>{children}</>
          )}
        </div>
      )}
    </>
  );
}

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <SplashWrapperContent>{children}</SplashWrapperContent>
    </ApolloProvider>
  );
}