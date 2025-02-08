import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanishq Kashla Portfolio",
  description: "Frontend Dev | UIUX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center `}
      >
        <Navbar />
        <div className="px-5 mt-24 md:px-0 md:w-[1060px]">
          <div className="hidden md:block">

            <ProfileCard />
          </div>
          <div className="md:ml-[380px]">

            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
