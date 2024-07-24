import type { Metadata } from "next";
import { Inter,Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS-Karo",
  description: "Transforming Businesses with Cutting-Edge Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}><Navbar/>{children}</body>
    </html>
  );
}
