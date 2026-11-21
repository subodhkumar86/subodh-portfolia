"use client";

import React, { useState } from "react";
import { CANDIDATE_INFO } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUp,
  Code2,
  MessageSquare,
} from "lucide-react";

export default function ContactFooter() {
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
    <footer id="contact" className="pt-20 pb-10 border-t border-white/[0.08] bg-[#040710]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Banner */}
        <div className="rounded-2xl bg-[#0C1524] border border-white/[0.08] p-7 sm:p-10 shadow-2xl relative overflow-hidden mb-14">
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-16 w-96 h-96 bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for High-Impact Opportunities
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Build Resilient Systems Together
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Ready to contribute to teams solving distributed microservices challenges, enterprise multi-tenancy, or high-velocity full-stack product development. Available immediately.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CANDIDATE_INFO.email}`}
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-100"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
                <a
                  href={`https://wa.me/918650162716?text=Hi%20Subodh%2C%20I%20saw%20your%20portfolio!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/35 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-100"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={CANDIDATE_INFO.resumePath}
                  download="Subodh_Kumar_Resume.pdf"
                  className="px-5 py-3 rounded-xl bg-black/40 hover:bg-black/60 text-gray-200 border border-white/[0.1] font-semibold text-sm flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-100"
                >
                  <FileDown className="w-4 h-4 text-emerald-400" />
                  Resume PDF
                </a>
              </div>
            </div>

            {/* Right quick-contact cards */}
            <div className="lg:col-span-5 space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.08]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-indigo-500/10 shrink-0">
                    <Mail className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-gray-600 uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${CANDIDATE_INFO.email}`}
                      className="text-gray-200 hover:text-white font-semibold truncate block"
                    >
                      {CANDIDATE_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copy(CANDIDATE_INFO.email, "email")}
                  className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wider">Phone & WhatsApp</div>
                    <a href={`tel:${CANDIDATE_INFO.phone}`} className="text-gray-200 hover:text-white font-semibold">
                      {CANDIDATE_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copy(CANDIDATE_INFO.phone, "phone")}
                  className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.08]">
                <div className="p-2 rounded-lg bg-sky-500/10 shrink-0">
                  <MapPin className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider">Location</div>
                  <div className="text-gray-200 font-semibold">{CANDIDATE_INFO.location} · Open to Remote</div>
                </div>
              </div>

              {/* Social links */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={CANDIDATE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/40 border border-white/[0.08] hover:border-white/[0.2] flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={CANDIDATE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/40 border border-white/[0.08] hover:border-sky-500/30 flex items-center justify-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-mono">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>
              Built by{" "}
              <span className="text-gray-300 font-semibold">{CANDIDATE_INFO.name}</span>
              {" "}· Next.js 14 App Router + Tailwind CSS
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>All verified production links · 2026</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors"
              aria-label="Scroll to top"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
