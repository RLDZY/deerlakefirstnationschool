import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deer Lake First Nation School",
  description: "Welcome to Deer Lake First Nation School, dedicated to providing a nurturing and inclusive learning environment that honors Indigenous culture and traditions. Our mission is to empower students with the knowledge, skills, and values needed for success in their academic and personal lives. Explore our programs, resources, and community initiatives designed to support the growth of every student. Learn more about our commitment to educational excellence and cultural enrichment at Deer Lake First Nation School.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body
      className={inter.className}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
