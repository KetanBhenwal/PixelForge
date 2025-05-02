
# Image Converter (PNG, JPEG, WEBP, BMP)

This is a Next.js single page application for converting images between PNG, JPEG, WEBP, and BMP formats. The app runs entirely in your browser—no uploads required. It is optimized for SEO and supports Google Ads integration.

## Features
- Convert images between PNG, JPEG, WEBP, and BMP formats
- Fast, private, and free (no server upload)
- SEO optimized for better ranking
- Google Ads support (replace ad client/slot in layout)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Google Ads
To enable Google Ads, update the `data-ad-client` and `data-ad-slot` in `src/app/layout.tsx` with your own AdSense values.

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
