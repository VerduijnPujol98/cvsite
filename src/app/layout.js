import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Asuka Verduijn | Software Engineering Portfolio",
  description:
    "The portfolio of Asuka Verduijn, a software engineering trainee and web developer in Aarhus, Denmark.",
  keywords: [
    "Asuka Verduijn",
    "software engineering trainee",
    "web developer",
    "developer portfolio",
    "Aarhus",
    "Denmark",
  ],
  authors: [{ name: "Asuka Verduijn" }],
  creator: "Asuka Verduijn",
  openGraph: {
    title: "Asuka Verduijn | Software Engineering Portfolio",
    description:
      "Explore the work and experience of Asuka Verduijn, a software engineering trainee and web developer.",
    type: "website",
    siteName: "Asuka Verduijn",
    locale: "en_DK",
    images: [
      {
        url: "/image.jpg",
        alt: "Asuka Verduijn's developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asuka Verduijn | Software Engineering Portfolio",
    description:
      "Explore the work and experience of Asuka Verduijn, a software engineering trainee and web developer.",
    images: ["/image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
