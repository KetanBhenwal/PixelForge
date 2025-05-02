import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google AdSense ad slot example (replace data-ad-client and data-ad-slot with your own) */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
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
