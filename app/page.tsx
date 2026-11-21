"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterExecutiveCard from "@/components/RecruiterExecutiveCard";
import FlagshipProjects from "@/components/FlagshipProjects";
import AllProjectsGrid from "@/components/AllProjectsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsMatrix from "@/components/SkillsMatrix";
import ContactFooter from "@/components/ContactFooter";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [recruiterMode, setRecruiterMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#070B14] text-gray-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Sticky Glassmorphic Navbar with Recruiter Mode switch */}
      <Navbar recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />

      <main className="flex-1">
        {/* Recruiter Executive Fast-Scan Card */}
        <AnimatePresence>
          {recruiterMode && (
            <RecruiterExecutiveCard onClose={() => setRecruiterMode(false)} />
          )}
        </AnimatePresence>

        {/* Hero */}
        <Hero />

        {/* Flagship Case Studies + Architecture Modals */}
        <FlagshipProjects />

        {/* Full Portfolio Grid with Category Filter */}
        <AllProjectsGrid />

        {/* Career Timeline + Education */}
        <ExperienceTimeline />

        {/* Skills Matrix */}
        <SkillsMatrix />
      </main>

      {/* Contact + Footer */}
      <ContactFooter />
    </div>
  );
}
