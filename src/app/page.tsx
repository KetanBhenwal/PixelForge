"use client";
// import Image from "next/image";
import ImageConverter from "../components/ImageConverter";
import AdSense from "../components/AdSense";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Converter (PNG, JPEG, WEBP, BMP)</h1>
      <p className="mb-8 text-center max-w-xl text-gray-700 dark:text-gray-300">
        Convert your images between popular formats directly in your browser. Fast, private, and free. No upload required!
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/convert-documents" className="text-blue-600 hover:underline">
          Convert Documents
        </Link>
        <Link href="/compress-files" className="text-blue-600 hover:underline">
          Compress Files
        </Link>
        <Link href="/file-management" className="text-blue-600 hover:underline">
          File Management Tools
        </Link>
        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="text-blue-600 hover:underline">
          Terms of Service
        </Link>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact Us
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Upload and Transform Your Images</h2>
      <ImageConverter />
      {/* Place your real AdSense client and slot values below */}
      <div className="my-8 w-full flex justify-center">
        <AdSense client="ca-pub-xxxxxxxxxxxxxxxx" slot="1234567890" />
      </div>
    </div>
  );
}
