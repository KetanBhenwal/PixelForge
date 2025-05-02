

"use client";
import Image from "next/image";
import ImageConverter from "@/components/ImageConverter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Converter (PNG, JPEG, WEBP, BMP)</h1>
      <p className="mb-8 text-center max-w-xl text-gray-700 dark:text-gray-300">
        Convert your images between popular formats directly in your browser. Fast, private, and free. No upload required!
      </p>
      <ImageConverter />
      <footer className="mt-12 text-xs text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Image Converter. Built with Next.js.
      </footer>
    </div>
  );
}
