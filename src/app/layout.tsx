import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  description: "Convert images between PNG, JPEG, WEBP, and BMP formats instantly in your browser. Fast, private, and free. No upload required!", // Primary description
  keywords: [
    "image converter",
    "png to jpeg",
    "jpeg to png",
    "webp converter",
    "bmp converter",
    "online image converter",
    "free image converter",
    "browser image converter",
    "file management",
    "merge PDF",
    "split PDF",
    "compress files",
    "convert files",
    "secure files",
    "PDF tools",
    "resizing"
  ],
  openGraph: {
    title: "Image Converter & File Management | PixelForge", // Consolidated title
    description: "All-in-one file and image management: convert, compress, merge, split, and secure your files. Fast, free, and user-friendly!", // Consolidated description
    url: "https://yourdomain.com/", // Replace with your actual domain
    siteName: "PixelForge",
    images: [
      {
        url: "https://yourdomain.com/app-icon.svg", // Replace with your actual domain and a suitable OG image
        width: 800,
        height: 600,
        alt: "PixelForge Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Converter & File Management | PixelForge",
    description: "All-in-one file and image management: convert, compress, merge, split, and secure your files. Fast, free, and user-friendly!",
    images: ["https://yourdomain.com/app-icon.svg"], // Replace with your actual domain and a suitable Twitter image
  },
  alternates: {
    canonical: "https://yourdomain.com/", // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense script - client ID should be managed via environment variables or a config file ideally */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3851492837698079`}
          crossOrigin="anonymous"
        ></script>
        {/* Removed direct meta description and keywords from here, they are handled by the metadata object */}
        {/* <link rel="canonical" href="https://yourdomain.com/" /> -> Handled by metadata.alternates.canonical */}
        {/* <meta property="og:title" content="File and Image Management Tools" /> -> Handled by metadata.openGraph */}
        {/* <meta property="og:description" content="Convert, compress, and manage your files and images with ease." /> -> Handled by metadata.openGraph */}
        <link rel="icon" href="/app-icon.svg" type="image/svg+xml" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5RD0N00K9Z"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5RD0N00K9Z');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-between">
          {/* Navigation Bar */}
          <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
            <div className="flex flex-row items-center justify-around mb-2 w-full">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/app-icon.svg"
                  alt="App Logo"
                  width={32}
                  height={32}
                  priority
                  className="rounded"
                />
                <span className="text-xl font-bold tracking-tight">
                  PixelForge
                </span>
              </div>
              <ul className="flex gap-8">
                <li>
                  <Link
                    href="/"
                    className="hover:underline flex items-center gap-2"
                  >
                    <Image
                      src="/home.svg"
                      alt="Home"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/convert-documents"
                    className="hover:underline flex items-center gap-2"
                  >
                    <Image
                      src="/document.svg"
                      alt="Convert Documents"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    Convert Documents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compress-files"
                    className="hover:underline flex items-center gap-2"
                  >
                    <Image
                      src="/compress.svg"
                      alt="Compress Files"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    Compress Files
                  </Link>
                </li>
                <li>
                  <Link href="/file-management" className="hover:underline flex items-center gap-2">
                    <Image src="/manage.svg" alt="File Management" width={20} height={20} loading="lazy" />
                    File Management
                  </Link>
                </li>
                
              </ul>
            </div>
          </nav>

          {/* Accessibility skip link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only bg-blue-700 text-white px-4 py-2 rounded absolute top-2 left-2 z-50"
          >
            Skip to main content
          </a>

          {/* Main Content */}
          <main
            id="main-content"
            tabIndex={-1}
            className="flex-grow container mx-auto px-4 py-8 outline-none"
          >
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <p className="text-sm">
                &copy; 2025{" "}
                <span className="font-semibold">PixelForge</span>. All rights
                reserved.
              </p>
              <ul className="flex gap-4 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:underline"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
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
