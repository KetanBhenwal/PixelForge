import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <meta property="og:image" content="/file.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-between">
          {/* Navigation Bar */}
          <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
            <ul className="flex justify-center gap-8">
              <li>
                <Link href="/" className="hover:underline flex items-center gap-2">
                  <img src="/home.svg" alt="Home" className="w-5 h-5" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/convert-documents" className="hover:underline flex items-center gap-2">
                  <img src="/document.svg" alt="Convert Documents" className="w-5 h-5" />
                  Convert Documents
                </Link>
              </li>
              <li>
                <Link href="/compress-files" className="hover:underline flex items-center gap-2">
                  <img src="/compress.svg" alt="Compress Files" className="w-5 h-5" />
                  Compress Files
                </Link>
              </li>
              <li>
                <Link href="/file-management" className="hover:underline flex items-center gap-2">
                  <img src="/manage.svg" alt="File Management" className="w-5 h-5" />
                  File Management
                </Link>
              </li>
            </ul>
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
              <p className="text-sm">&copy; 2025 Image Converter. All rights reserved.</p>
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
