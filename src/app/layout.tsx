import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Effects from "@/components/Effects";
import Cursor from "@/components/Cursor";

const montserrat = localFont({
  src: [
    { path: "../assets/fonts/montserrat-400.woff2", weight: "400" },
    { path: "../assets/fonts/montserrat-500.woff2", weight: "500" },
    { path: "../assets/fonts/montserrat-600.woff2", weight: "600" },
    { path: "../assets/fonts/montserrat-700.woff2", weight: "700" },
    { path: "../assets/fonts/montserrat-800.woff2", weight: "800" },
    { path: "../assets/fonts/montserrat-900.woff2", weight: "900" },
  ],
  variable: "--font-sans",
});

const mono = localFont({
  src: "../assets/fonts/jetbrains-mono.woff2",
  weight: "400 700",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Vitilio Sousa",
    template: "%s | Vitilio Sousa",
  },
  description: "Portfólio de Vitilio Sousa - Desenvolvedor Full Stack.",
  keywords: [
    "Vitilio Sousa",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Software Engineer",
    "Portfolio"
  ],
  authors: [{ name: "Vitilio Sousa", url: "https://vitilio-sousa.vercel.app" }],
  creator: "Vitilio Sousa",
  publisher: "Vitilio Sousa",
  metadataBase: new URL("https://vitilio-sousa.vercel.app"),

  openGraph: {
    title: "Vitilio Sousa - Developer Full Stack",
    description: "Conheça o portfólio e projetos de Vitilio Sousa, desenvolvedor Full Stack.",
    url: "https://vitilio-sousa.vercel.app",
    siteName: "Vitilio Sousa",
    locale: "pt_PT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vitilio Sousa - Developer Full Stack",
    description: "Portfólio e projetos de Vitilio Sousa.",
    creator: "@VitilioM",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${montserrat.variable} ${mono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <div className="ambient" aria-hidden />
        <div className="grain" aria-hidden />
        <Effects />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
