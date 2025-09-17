import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const outfit = Poppins({
  weight: "400",
  subsets: ["latin"],
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
    creator: "@VitilioM", // se tiveres Twitter coloca aqui
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/og-image.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${outfit.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
