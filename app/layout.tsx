import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shivani Mishra | IGDTUW Portfolio",
  description:
    "Personal academic portfolio of Shivani Mishra — 2nd Year Mechanical & Automation Engineering student at IGDTUW, Delhi. Showcasing academics, skills, projects, and achievements.",
  keywords: [
    "Shivani Mishra",
    "IGDTUW",
    "Mechanical Engineering",
    "Automation Engineering",
    "Portfolio",
    "Delhi",
    "Gen AI Intern",
    "Industrial Ideathon 2025",
  ],
  authors: [{ name: "Shivani Mishra" }],
  openGraph: {
    title: "Shivani Mishra | IGDTUW Portfolio",
    description:
      "Portfolio of Shivani Mishra — Mechanical & Automation Engineering student at IGDTUW, Delhi.",
    type: "website",
    locale: "en_US",
    url: "https://shivanimishra726.github.io/Portfolio",
    siteName: "Shivani Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivani Mishra | IGDTUW Portfolio",
    description:
      "Portfolio of Shivani Mishra — Mechanical & Automation Engineering student at IGDTUW.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7B2D8B" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
