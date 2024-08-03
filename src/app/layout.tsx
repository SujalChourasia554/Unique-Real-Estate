import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unique Real Estate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preload" href="/assets/font/61b81e7bde89ba40-s.p.ttf" as="font" type="font/ttf" crossOrigin="anonymous" data-next-font="size-adjust" />
      <link rel="preload" href="/assets/font/d36a2a2bb416f59e-s.p.ttf" as="font" type="font/ttf" crossOrigin="anonymous" data-next-font="size-adjust" />
      <link rel="preload" href="/assets/font/c04551857776278f-s.p.ttf" as="font" type="font/ttf" crossOrigin="anonymous" data-next-font="size-adjust" />
      <link rel="preload" href="/assets/font/916d3686010a8de2-s.p.ttf" as="font" type="font/ttf" crossOrigin="anonymous" data-next-font="size-adjust" />
      <link rel="preload" href="/assets/font/d869208648ca5469-s.p.ttf" as="font" type="font/ttf" crossOrigin="anonymous" data-next-font="size-adjust" />
      <link rel="preload" href="/assets/font/9a881e2ac07d406b-s.p.ttf" as="font" type="font/ttf" crossOrigin="anonymous" data-next-font="size-adjust" />
      <link rel="preload" href="/assets/font/376dd8dc38524313-s.p.ttf" as="font" type="font/ttf" crossOrigin="anonymous" data-next-font="size-adjust" />
      <link rel="preload" href="/assets/font/bd427f25ac24d036-s.p.ttf" as="font" type="font/ttf" crossOrigin="anonymous" data-next-font="size-adjust" />

      {/* <link rel="stylesheet" href="https://quarter-nextjs.vercel.app/_next/static/css/f8f18f0a8b6f024a.css" data-n-g=""></link> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </head>
    
      <body className={inter.className}>{children}</body>
    </html>
  );}
