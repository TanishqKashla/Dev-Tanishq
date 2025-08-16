import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Tanishq",
  description: "Full Stack Dev | UIUX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center `}
      >
        <ClientLayout>
          {children}
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  );
}
