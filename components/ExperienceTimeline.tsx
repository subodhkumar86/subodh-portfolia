"use client";

import React from "react";
import { EXPERIENCE_ITEMS, EDUCATION_DATA } from "@/data/portfolio";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Sparkles,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            2.5+ years shipping backend microservices, state regulatory platforms, SaaS payment pipelines, and telematics systems across four companies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12 space-y-8 before:absolute before:left-3.5 sm:before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-indigo-500/80 before:via-emerald-500/50 before:to-transparent">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <motion.div
              key={`${item.company}-${idx}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Node indicator */}
              <div
                aria-hidden="true"
                className="absolute -left-[34px] sm:-left-[46px] top-6 w-7 h-7 rounded-full bg-[#070B14] border-2 border-indigo-500 flex items-center justify-center group-hover:border-emerald-400 group-hover:scale-110 transition-all shadow-lg shadow-indigo-500/20"
              >
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              </div>

              <div className="rounded-2xl bg-[#0C1524] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 p-6 sm:p-7 shadow-xl">
                {/* Title row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                      {item.company}
                    </div>
                    {item.location && (
                      <div className="text-xs text-gray-500 font-mono flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-md border border-white/[0.06] text-xs font-mono text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {item.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-mono">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-4">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-black/40 text-gray-300 text-xs font-mono border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education node */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <div
              aria-hidden="true"
              className="absolute -left-[34px] sm:-left-[46px] top-6 w-7 h-7 rounded-full bg-[#070B14] border-2 border-emerald-400 flex items-center justify-center group-hover:scale-110 transition-all shadow-lg shadow-emerald-400/20"
            >
              <GraduationCap className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="rounded-2xl bg-[#0C1524] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 p-6 sm:p-7 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{EDUCATION_DATA.degree}</h3>
                  <div className="text-sm font-semibold text-sky-400 mt-0.5">{EDUCATION_DATA.institution}</div>
                  <div className="text-xs text-gray-500 font-mono flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {EDUCATION_DATA.location}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-md border border-white/[0.06] text-xs font-mono text-gray-300 self-start shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {EDUCATION_DATA.period}
                </span>
              </div>

              <ul className="space-y-2">
                {EDUCATION_DATA.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="text-emerald-400 font-bold mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
