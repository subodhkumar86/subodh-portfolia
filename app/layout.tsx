import type { Metadata } from "next";
import "./globals.css";
import { CANDIDATE_INFO } from "@/data/portfolio";

const SITE_URL = "https://subodh-portfolia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${CANDIDATE_INFO.name} | Full Stack & Backend Engineer Portfolio`,
  description: `${CANDIDATE_INFO.subHeadline} ${CANDIDATE_INFO.bio}`,
  keywords: [
    "Subodh Kumar",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Backend Engineer",
    "Node.js Developer",
    "Express.js Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "PHP Laravel Developer",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Multi-Tenant SaaS",
    "Enterprise HRMS",
    "RBAC",
    "Docker",
    "Delhi NCR Developer",
    "Greater Noida Engineer",
    "Backend Developer India",
  ],
  authors: [{ name: CANDIDATE_INFO.name, url: CANDIDATE_INFO.github }],
  creator: CANDIDATE_INFO.name,
  publisher: CANDIDATE_INFO.name,
  category: "technology",
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: `${CANDIDATE_INFO.name} — Full Stack & Backend Engineer`,
    description: CANDIDATE_INFO.subHeadline,
    url: SITE_URL,
    siteName: `${CANDIDATE_INFO.name} Portfolio`,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CANDIDATE_INFO.name} — Full Stack & Backend Engineer`,
    description: CANDIDATE_INFO.subHeadline,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: CANDIDATE_INFO.name,
  jobTitle: "Full Stack & Backend Engineer",
  description: CANDIDATE_INFO.subHeadline,
  url: SITE_URL,
  email: CANDIDATE_INFO.email,
  sameAs: [CANDIDATE_INFO.github, CANDIDATE_INFO.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida",
    addressRegion: "Delhi NCR",
    addressCountry: "IN",
  },
  knowsAbout: CANDIDATE_INFO.coreStackList,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#070B14] text-gray-100 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
