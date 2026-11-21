"use client";

import React, { useState } from "react";
import { CANDIDATE_INFO } from "@/data/portfolio";
import {
  FileDown,
  ArrowRight,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Mail,
  Phone,
  Copy,
  Check,
  MessageSquare,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
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

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  });

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern min-h-[90vh] flex items-center">
      {/* Ambient lighting blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[300px] h-[250px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Left: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Status Badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {CANDIDATE_INFO.statusBadge}
              </span>
            </motion.div>

            {/* Name + Gradient Role */}
            <motion.div {...fadeUp(0.08)} className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                {CANDIDATE_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 leading-snug">
                {CANDIDATE_INFO.subHeadline}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.14)}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              {CANDIDATE_INFO.bio}
            </motion.p>

            {/* Meta tags: Location & Experience */}
            <motion.div {...fadeUp(0.18)} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1626] border border-white/[0.08] text-xs font-mono text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {CANDIDATE_INFO.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1626] border border-white/[0.08] text-xs font-mono text-gray-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {CANDIDATE_INFO.experienceYears}
              </span>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div {...fadeUp(0.22)} className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#flagship"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 shadow-xl shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-100"
              >
                Explore Flagship Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={CANDIDATE_INFO.resumePath}
                download="Subodh_Kumar_Resume.pdf"
                className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-[#0F1626] hover:bg-[#162138] text-gray-200 border border-white/[0.12] hover:border-white/[0.25] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-100"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                Download Resume
              </a>

              <a
                href={CANDIDATE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl text-sm font-semibold bg-[#0F1626] hover:bg-[#162138] text-gray-300 hover:text-white border border-white/[0.08] hover:border-white/[0.2] flex items-center gap-2 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href={CANDIDATE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl text-sm font-semibold bg-[#0F1626] hover:bg-[#162138] text-sky-400 hover:text-sky-300 border border-white/[0.08] hover:border-sky-500/30 flex items-center gap-2 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>

            {/* Quick Contact Bar */}
            <motion.div
              {...fadeUp(0.28)}
              className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-white/[0.06]"
            >
              <button
                onClick={() => copyToClipboard(CANDIDATE_INFO.email, "email")}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black/40 hover:bg-black/60 border border-white/[0.08] hover:border-emerald-500/30 text-xs font-mono text-gray-300 hover:text-white transition-all"
                title="Copy email"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">{CANDIDATE_INFO.email}</span>
                <span className="sm:hidden">Email</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-500" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(CANDIDATE_INFO.phone, "phone")}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black/40 hover:bg-black/60 border border-white/[0.08] hover:border-indigo-500/30 text-xs font-mono text-gray-300 hover:text-white transition-all"
                title="Copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>{CANDIDATE_INFO.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-500" />
                )}
              </button>

              <a
                href={`https://wa.me/918650162716?text=Hi%20Subodh%2C%20I%20saw%20your%20portfolio!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-400 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#0A0F1E] border border-white/[0.1] shadow-2xl overflow-hidden">
              {/* Terminal title bar */}
              <div className="px-4 py-3 bg-[#060A13] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/90" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
                  <span className="w-3 h-3 rounded-full bg-green-500/90" />
                </div>
                <div className="text-[11px] font-mono text-gray-500 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>subodh@prod-cluster — zsh</span>
                </div>
                <div className="w-14" />
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-xs space-y-4">
                <div>
                  <span className="text-emerald-500">➜</span>{" "}
                  <span className="text-cyan-400">~</span>{" "}
                  <span className="text-gray-200">cat engineer.json</span>
                </div>

                <div className="rounded-lg bg-black/60 border border-white/[0.06] p-4 text-[11px] leading-relaxed">
                  <div><span className="text-pink-400">"name"</span><span className="text-gray-400">:</span> <span className="text-emerald-300">"Subodh Kumar"</span><span className="text-gray-500">,</span></div>
                  <div><span className="text-pink-400">"role"</span><span className="text-gray-400">:</span> <span className="text-emerald-300">"Full Stack Engineer"</span><span className="text-gray-500">,</span></div>
                  <div><span className="text-pink-400">"experience"</span><span className="text-gray-400">:</span> <span className="text-sky-300">"2.5+ years production"</span><span className="text-gray-500">,</span></div>
                  <div><span className="text-pink-400">"core_stack"</span><span className="text-gray-400">:</span> <span className="text-gray-400">[</span></div>
                  <div className="pl-4 text-yellow-300">"Node.js"<span className="text-gray-500">,</span> "React.js"<span className="text-gray-500">,</span> "Next.js"<span className="text-gray-500">,</span></div>
                  <div className="pl-4 text-yellow-300">"PHP/Laravel"<span className="text-gray-500">,</span> "PostgreSQL"<span className="text-gray-500">,</span> "Docker"</div>
                  <div><span className="text-gray-400">]</span><span className="text-gray-500">,</span></div>
                  <div><span className="text-pink-400">"notice_period"</span><span className="text-gray-400">:</span> <span className="text-emerald-300">"Immediate to 15 Days"</span><span className="text-gray-500">,</span></div>
                  <div><span className="text-pink-400">"location"</span><span className="text-gray-400">:</span> <span className="text-emerald-300">"Delhi NCR, India"</span></div>
                </div>

                <div className="pt-2 border-t border-white/[0.06] space-y-2 text-[11px]">
                  {[
                    { label: "GMDA TDR Portal", tag: "Gov Production", color: "text-emerald-400" },
                    { label: "Fleetovo SaaS", tag: "Live SaaS", color: "text-sky-400" },
                    { label: "BusinessOS ERP", tag: "PostgreSQL RLS", color: "text-indigo-400" },
                    { label: "DronaAIm Fleet", tag: "Telematics API", color: "text-amber-400" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-gray-400">{item.label}</span>
                      <span className={`${item.color} font-semibold`}>[{item.tag}]</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                  <span className="text-emerald-500">➜</span>
                  <span className="animate-pulse">█</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
