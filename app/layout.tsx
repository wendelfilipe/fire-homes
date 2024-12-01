import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-sky-950 text-white p-5 h-24 flex items-center justify-between">
          <Link href="/">Fire Homes</Link>
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Signup</Link>
            </li>  
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
