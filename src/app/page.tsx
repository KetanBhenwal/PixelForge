"use client";
// import Image from "next/image";
import ImageConverter from "../components/ImageConverter";
import AdSense from "../components/AdSense";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Converter (PNG, JPEG, WEBP, BMP)</h1>
      <p className="mb-8 text-center max-w-xl text-gray-700 dark:text-gray-300">
        Convert your images between popular formats directly in your browser. Fast, private, and free. No upload required!
      </p>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Upload and Transform Your Images</h2>
      <ImageConverter />
      {/* Place your real AdSense client and slot values below */}
      <div className="my-8 w-full flex justify-center">
        <AdSense client="ca-pub-xxxxxxxxxxxxxxxx" slot="1234567890" />
      </div>
    </div>
  );
}
