"use client";

import React, { useState, useEffect } from "react";
import { CANDIDATE_INFO } from "@/data/portfolio";
import {
  Code2,
  FileDown,
  Layers,
  Briefcase,
  Wrench,
  Mail,
  Zap,
  Menu,
  X,
  Workflow,
  Sparkles,
  GraduationCap,
} from "lucide-react";

interface NavbarProps {
  recruiterMode: boolean;
  setRecruiterMode: (val: boolean) => void;
}

export default function Navbar({ recruiterMode, setRecruiterMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for nav highlight
  useEffect(() => {
    const sections = ["flagship", "all-projects", "experience", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Flagship Work", href: "#flagship", icon: Briefcase, id: "flagship" },
    { label: "All Projects", href: "#all-projects", icon: Layers, id: "all-projects" },
    { label: "Experience", href: "#experience", icon: GraduationCap, id: "experience" },
    { label: "Skills", href: "#skills", icon: Wrench, id: "skills" },
    { label: "Contact", href: "#contact", icon: Mail, id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Subodh Kumar – Home"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-600/30 transition-all shadow-sm">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="font-mono font-bold text-base sm:text-lg tracking-tight text-white">
              {CANDIDATE_INFO.name}
              <span className="text-emerald-400">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                    isActive
                      ? "text-white bg-white/[0.08] font-semibold"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-indigo-400" : "text-gray-500"}`} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Recruiter Mode Toggle */}
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              aria-pressed={recruiterMode}
              aria-label="Toggle Recruiter Mode"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2 transition-all border ${
                recruiterMode
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/10"
                  : "bg-[#0F1626] text-gray-300 border-white/[0.08] hover:border-emerald-500/30 hover:text-emerald-400"
              }`}
            >
              <Zap
                className={`w-3.5 h-3.5 transition-colors ${
                  recruiterMode ? "fill-emerald-400 text-emerald-400" : "text-gray-500"
                }`}
              />
              <span>{recruiterMode ? "Recruiter View ON" : "Recruiter Mode"}</span>
            </button>

            {/* Resume CTA */}
            <a
              href={CANDIDATE_INFO.resumePath}
              download="Subodh_Kumar_Resume.pdf"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-100"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              aria-label="Recruiter Mode"
              className={`p-2 rounded-lg border ${
                recruiterMode
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50"
                  : "bg-[#0F1626] text-gray-400 border-white/[0.08]"
              }`}
            >
              <Zap className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0F1626] border border-white/[0.08] text-gray-300 hover:text-white"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/[0.08]">
            <nav className="bg-[#0A0F1E]/95 backdrop-blur-xl rounded-xl p-3 space-y-1 shadow-2xl border border-white/[0.08]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <link.icon className="w-4 h-4 text-indigo-400" />
                  <span>{link.label}</span>
                </a>
              ))}
              <div className="pt-2 border-t border-white/[0.08] mt-2">
                <a
                  href={CANDIDATE_INFO.resumePath}
                  download="Subodh_Kumar_Resume.pdf"
                  className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
