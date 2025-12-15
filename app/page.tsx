"use client"


import { useState, useRef } from "react";
import LandPage from "./Components/landPage";
import Header from "./Components/Header";
import UserForm from "./Components/UserForm";
import Footer from "./Components/footer";
import ProgressDashboard from "./Components/ProgressDashboard";
import HowItWorks from "./Components/HowItWorks";

const Index = () => {
  const [userData, setUserData] = useState<{
    childName: string;
    age: number;
    interests: string[];
  } | null>(null);

  const signUpRef = useRef<HTMLDivElement>(null);

  const scrollToSignUp = () => {
    signUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSignUpSuccess = (data: { childName: string; age: number; interests: string[] }) => {
    setUserData(data);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <LandPage />

      <HowItWorks />

      <div ref={signUpRef}>
        {!userData ? (
          <UserForm onSuccess={handleSignUpSuccess} />
        ) : (
          <ProgressDashboard childName={userData.childName} />
        )}
      </div>

      <Footer />
    </main>
  );
};

export default Index