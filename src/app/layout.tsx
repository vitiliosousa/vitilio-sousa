import type { Metadata } from "next";
import { Raleway, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Effects from "@/components/Effects";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vitilio Sousa Portfolio",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vitilio Sousa - Developer Full Stack",
    description: "Portfólio e projetos de Vitilio Sousa.",
    creator: "@VitilioM",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
        className={`${raleway.variable} ${mono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <div className="ambient" aria-hidden />
        <div className="grain" aria-hidden />
        <Effects />
        {children}
      </body>
    </html>
  );
}
