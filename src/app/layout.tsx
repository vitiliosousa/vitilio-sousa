import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const outfit = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitilio Sousa",
  description: "Um portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
