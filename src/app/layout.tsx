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
        <meta name="description" content="Convert images, documents, and compress files online. Fast, free, and easy to use!" />
        <meta name="keywords" content="image converter, document converter, file compression, online tools" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex justify-center gap-8">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/convert-documents" className="hover:underline">Convert Documents</Link></li>
            <li><Link href="/compress-files" className="hover:underline">Compress Files</Link></li>
          </ul>
        </nav>

        {/* Google AdSense ad slot example (replace data-ad-client and data-ad-slot with your own) */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-3851492837698079"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        {children}
      </body>
    </html>
  );
}
