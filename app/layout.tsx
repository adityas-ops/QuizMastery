import "./globals.css";
import SplashWrapper from "@/components/SplashWrapper";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from "../context/UserContext";

export const metadata = {
  title: "QuizMastery | Master Your Knowledge with Engaging Quizzes",
  description: "QuizMastery is the ultimate platform for quiz enthusiasts. Challenge yourself with diverse quizzes, track your progress, and climb the leaderboard!",
  keywords: "quiz, quizzes, knowledge, education, QuizMastery, fun quizzes, online quizzes, learning platform, challenge, leaderboard",
  authors: [{ name: "QuizMastery Team", url: "https://brain-up-ten.vercel.app/" }],
  openGraph: {
    title: "QuizMastery | Master Your Knowledge with Engaging Quizzes",
    description: "QuizMastery is the ultimate platform for quiz enthusiasts. Challenge yourself with diverse quizzes, track your progress, and climb the leaderboard!",
    url: "https://quizmastery.com",
    siteName: "QuizMastery",
    images: [
      {
        url: "https://brainup.com/assets/logo/brainup.png",
        width: 1200,
        height: 630,
        alt: "QuizMastery Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuizMastery | Master Your Knowledge with Engaging Quizzes",
    description: "QuizMastery is the ultimate platform for quiz enthusiasts. Challenge yourself with diverse quizzes, track your progress, and climb the leaderboard!",
    images: ["https://brainup.com/assets/logo/brainup.png"],
  },
  icons: [
    {
      rel: "icon",
      url: "assets/logo/brainup.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
        <html lang="en">
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preload"
              href="/assets/landing-page/hero.json"
              as="fetch"
              type="application/json"
              crossOrigin="anonymous"
            />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Carme&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
              rel="stylesheet"
            />
          </head>
          <body className="">
            <SplashWrapper>
              <div className="w-screen h-screen overflow-hidden">
                <div className="w-full h-full overflow-y-scroll">{children}</div>
              </div>
            </SplashWrapper>
          </body>
        </html>
      </GoogleOAuthProvider>
    </UserProvider>
  );
}
