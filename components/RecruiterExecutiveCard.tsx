"use client";

import React, { useState } from "react";
import { CANDIDATE_INFO } from "@/data/portfolio";
import {
  Zap,
  FileDown,
  Mail,
  Phone,
  Copy,
  Check,
  MapPin,
  Clock,
  Layers,
  ArrowRight,
  ShieldCheck,
  X,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

interface RecruiterExecutiveCardProps {
  onClose: () => void;
}

export default function RecruiterExecutiveCard({ onClose }: RecruiterExecutiveCardProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copy = (text: string, type: "email" | "phone") => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4"
      role="complementary"
      aria-label="Recruiter Fast Scan"
    >
      <div className="rounded-2xl bg-[#0C1524] border border-emerald-500/35 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/8 rounded-full blur-[80px] pointer-events-none"
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider border border-emerald-500/25">
              <Zap className="w-3.5 h-3.5 fill-emerald-400" />
              Recruiter Fast Scan · 30 Seconds
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {CANDIDATE_INFO.name}
              <span className="text-gray-400 font-normal text-base ml-2">— Full Stack Engineer</span>
            </h2>
            <p className="text-xs text-gray-400 font-mono">
              Notice:{" "}
              <span className="text-emerald-400 font-semibold">{CANDIDATE_INFO.noticePeriod}</span>
              {" · "}
              Target: <span className="text-sky-300">Full-Stack & Backend (5+ LPA)</span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={CANDIDATE_INFO.resumePath}
              download="Subodh_Kumar_Resume.pdf"
              className="px-3.5 py-2 rounded-lg text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-gray-950 flex items-center gap-1.5 shadow-md transition-all"
            >
              <FileDown className="w-4 h-4" />
              Resume PDF
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors"
              aria-label="Close recruiter view"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-5 border-b border-white/[0.08]">
          <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06]">
            <div className="text-[11px] text-gray-500 font-mono uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Experience & Mobility
            </div>
            <div className="text-lg font-bold text-white">{CANDIDATE_INFO.experienceYears}</div>
            <div className="text-sm text-gray-300 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              {CANDIDATE_INFO.location}
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 font-mono">Open to Remote / Hybrid</div>
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06]">
            <div className="text-[11px] text-gray-500 font-mono uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Core Production Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CANDIDATE_INFO.coreStackList.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-white/[0.06] text-gray-200 font-mono text-[11px] border border-white/[0.05]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06]">
            <div className="text-[11px] text-gray-500 font-mono uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              Education
            </div>
            <div className="text-sm font-bold text-white">B.Tech — Computer Science</div>
            <div className="text-xs text-gray-300 mt-0.5">JSS Academy of Technical Education</div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">Noida · 2021–2025</div>
          </div>
        </div>

        {/* Top 4 Systems */}
        <div className="py-5 border-b border-white/[0.08]">
          <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Top 4 Production Systems Engineered
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CANDIDATE_INFO.topHighlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 bg-black/20 p-3 rounded-lg border border-white/[0.04] text-xs text-gray-200"
              >
                <span className="text-emerald-400 font-bold font-mono shrink-0">0{i + 1}.</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Footer */}
        <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => copy(CANDIDATE_INFO.email, "email")}
              className="px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/[0.08] text-xs font-mono text-gray-200 flex items-center gap-2 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              {CANDIDATE_INFO.email}
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-gray-500" />
              )}
            </button>

            <button
              onClick={() => copy(CANDIDATE_INFO.phone, "phone")}
              className="px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/[0.08] text-xs font-mono text-gray-200 flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              {CANDIDATE_INFO.phone}
              {copiedPhone ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-gray-500" />
              )}
            </button>
          </div>

          <a
            href="#flagship"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            Explore Architecture Case Studies
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
