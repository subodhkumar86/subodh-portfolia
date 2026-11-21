"use client";

import React, { useState } from "react";
import { FLAGSHIP_PROJECTS, FlagshipProject } from "@/data/portfolio";
import {
  ExternalLink,
  Github,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import ArchitectureModal from "./ArchitectureModal";

export default function FlagshipProjects() {
  const [selectedProject, setSelectedProject] = useState<FlagshipProject | null>(null);

  return (
    <section id="flagship" className="py-20 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              Production Scale · Deep Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Flagship Engineering Case Studies
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Government platforms, payment-webhook automation, kernel-level multi-tenancy, and IoT telematics pipelines — click any card for a full architecture walkthrough.
            </p>
          </div>
          <div className="text-xs font-mono text-gray-500 flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Architecture Modals Available
          </div>
        </div>

        {/* 2×2 Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {FLAGSHIP_PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl bg-[#0C1524] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col shadow-xl overflow-hidden group"
            >
              {/* Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-600">0{idx + 1}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-mono mt-0.5">{project.subtitle}</p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 pt-1 border-t border-white/[0.06]">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div>
                  <div className="text-[10px] font-mono text-gray-600 uppercase tracking-wider mb-2">Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-black/40 border border-white/[0.06] text-gray-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-7 py-4 bg-black/30 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/35 text-indigo-300 border border-indigo-500/25 flex items-center gap-1.5 transition-all group/btn"
                  aria-label={`View architecture for ${project.title}`}
                >
                  <Workflow className="w-3.5 h-3.5 text-indigo-400 group-hover/btn:rotate-90 transition-transform duration-300" />
                  View Architecture & Flow
                  <ArrowRight className="w-3 h-3" />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-400 hover:text-white transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Live Site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Architecture Modal */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
