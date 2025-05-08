import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Image Converter | PNG to JPEG, WEBP, BMP | Free Online Tool",
  description: "Convert images between PNG, JPEG, WEBP, and BMP formats instantly in your browser. Fast, private, and free. No upload required!",
  keywords: [
    "image converter",
    "png to jpeg",
    "jpeg to png",
    "webp converter",
    "bmp converter",
    "online image converter",
    "free image converter",
    "browser image converter"
  ],
  openGraph: {
    title: "Image Converter | PNG to JPEG, WEBP, BMP | Free Online Tool",
    description: "Convert images between PNG, JPEG, WEBP, and BMP formats instantly in your browser. Fast, private, and free. No upload required!",
    url: "https://yourdomain.com/",
    siteName: "Image Converter",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Converter | PNG to JPEG, WEBP, BMP | Free Online Tool",
    description: "Convert images between PNG, JPEG, WEBP, and BMP formats instantly in your browser. Fast, private, and free. No upload required!"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3851492837698079"
          crossOrigin="anonymous"
        ></script>
        <meta name="description" content="All-in-one file management tool: merge, split, compress, convert, and secure your files with ease. Fast, free, and user-friendly!" />
        <meta name="keywords" content="file management, merge PDF, split PDF, compress files, convert files, secure files, online tools" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <meta name="description" content="A feature-rich file and image management application with tools for conversion, compression, and more." />
        <meta name="keywords" content="file management, image conversion, PDF tools, compression, resizing" />
        <meta property="og:title" content="File and Image Management Tools" />
        <meta property="og:description" content="Convert, compress, and manage your files and images with ease." />
        <link rel="icon" href="app-icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-between">
          {/* Navigation Bar */}
          <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
            <div className="flex flex-row items-center justify-around mb-2 w-full">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/app-icon.svg" alt="App Logo" width={32} height={32} priority className="rounded" />
                <span className="text-xl font-bold tracking-tight">PixelForge</span>
              </div>
              <ul className="flex gap-8">
              <li>
                <Link href="/" className="hover:underline flex items-center gap-2">
                  <Image src="/home.svg" alt="Home" width={20} height={20} />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/convert-documents" className="hover:underline flex items-center gap-2">
                  <Image src="/document.svg" alt="Convert Documents" width={20} height={20} />
                  Convert Documents
                </Link>
              </li>
              <li>
                <Link href="/compress-files" className="hover:underline flex items-center gap-2">
                  <Image src="/compress.svg" alt="Compress Files" width={20} height={20} />
                  Compress Files
                </Link>
              </li>
              <li>
                <Link href="/file-management" className="hover:underline flex items-center gap-2">
                  <Image src="/manage.svg" alt="File Management" width={20} height={20} />
                  File Management
                </Link>
              </li>
            </ul>
            </div>
          </nav>

        {/* Accessibility skip link */}
        <a href="#main-content" className="sr-only focus:not-sr-only bg-blue-700 text-white px-4 py-2 rounded absolute top-2 left-2 z-50">Skip to main content</a>

          {/* Main Content */}
          <main id="main-content" tabIndex={-1} className="flex-grow container mx-auto px-4 py-8 outline-none">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <p className="text-sm">&copy; 2025 <span className="font-semibold">PixelForge</span>. All rights reserved.</p>
              <ul className="flex gap-4 text-sm">
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </footer>
        </div>

        {/* Dark/Light mode script */}
        <script>
          {`
            if (
              localStorage.theme === 'dark' ||
              (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </script>
      </body>
    </html>
  );
}
