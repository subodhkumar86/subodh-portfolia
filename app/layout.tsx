import type { Metadata } from "next";
import "./globals.css";
import { CANDIDATE_INFO } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${CANDIDATE_INFO.name} | Full Stack Engineer Portfolio`,
  description: `${CANDIDATE_INFO.subHeadline} ${CANDIDATE_INFO.bio}`,
  keywords: [
    "Subodh Kumar",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Node.js Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "PHP Laravel Developer",
    "PostgreSQL",
    "Docker",
    "Delhi NCR Developer",
    "Greater Noida Engineer",
    "Backend Developer India",
  ],
  authors: [{ name: CANDIDATE_INFO.name, url: CANDIDATE_INFO.github }],
  openGraph: {
    title: `${CANDIDATE_INFO.name} — Full Stack Engineer`,
    description: CANDIDATE_INFO.subHeadline,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CANDIDATE_INFO.name} — Full Stack Engineer`,
    description: CANDIDATE_INFO.subHeadline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="min-h-screen bg-[#070B14] text-gray-100 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
