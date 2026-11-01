import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dreamland = localFont({
  src: "./fonts/dreamland.woff2",
  display: "swap",
  variable: "--font-dreamland",
});

const cooper = localFont({
  src: "./fonts/CooperBlackStd.otf",
  display: "swap",
  variable: "--font-cooper",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shiny Moon Glass",
  description: "Handcrafted stained glass by Shiny Moon Glass.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dreamland.variable} ${cooper.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
