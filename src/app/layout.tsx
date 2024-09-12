import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PsychoCoders",
  description:
    "Master Data Structures and Algorithms with PsychoCoders. Solve challenges across various difficulty levels, get real-time feedback, and track your progress to become a skilled coder.",
  keywords: [
    "DSA",
    "Data Structures and Algorithms",
    "Technical interview questions",
    "Problem solving",
    "Coding challenges",
    "Code execution",
    "Algorithm practice",
    "Competitive programming",
    "Coding skills",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
