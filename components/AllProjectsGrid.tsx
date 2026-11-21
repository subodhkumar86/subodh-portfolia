"use client";

import React, { useState, useMemo } from "react";
import { ALL_PROJECTS, ProjectCategory } from "@/data/portfolio";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TabValue = "All" | ProjectCategory;

interface FilterTab {
  label: string;
  value: TabValue;
  count: number;
}

export default function AllProjectsGrid() {
  const [activeTab, setActiveTab] = useState<TabValue>("All");

  const tabs: FilterTab[] = useMemo(
    () => [
      { label: "All", value: "All", count: ALL_PROJECTS.length },
      {
        label: "Enterprise & Gov",
        value: "Enterprise & Gov",
        count: ALL_PROJECTS.filter((p) => p.category === "Enterprise & Gov").length,
      },
      {
        label: "SaaS & AI",
        value: "SaaS & AI",
        count: ALL_PROJECTS.filter((p) => p.category === "SaaS & AI").length,
      },
      {
        label: "Microservices & DevOps",
        value: "Microservices & DevOps",
        count: ALL_PROJECTS.filter((p) => p.category === "Microservices & DevOps").length,
      },
      {
        label: "E-Commerce & EdTech",
        value: "E-Commerce & EdTech",
        count: ALL_PROJECTS.filter((p) => p.category === "E-Commerce & EdTech").length,
      },
    ],
    []
  );

  const filtered = useMemo(
    () =>
      activeTab === "All"
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((p) => p.category === activeTab),
    [activeTab]
  );

  return (
    <section id="all-projects" className="py-20 relative bg-dot-pattern border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              Full Portfolio · {ALL_PROJECTS.length} Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              All Engineering Projects
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
              State portals, SaaS backends, Saga microservices, CI/CD orchestrators, and AI-powered platforms.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            className="flex flex-wrap gap-1.5 bg-[#0C1524] p-1.5 rounded-xl border border-white/[0.08] self-start"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                role="tab"
                aria-selected={activeTab === tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeTab === tab.value
                    ? "bg-indigo-600 text-white font-semibold shadow-md"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.05]"
                }`}
              >
                {tab.label}{" "}
                <span className={activeTab === tab.value ? "opacity-80" : "opacity-50"}>
                  ({tab.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="rounded-2xl bg-[#0C1524] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col p-5 sm:p-6 shadow-lg group"
              >
                {/* Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                    {project.badge}
                  </span>
                  {project.isFlagship && (
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Extra ecosystem links */}
                {project.extraLinks && project.extraLinks.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.extraLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/40 border border-white/[0.08] text-[11px] font-mono text-indigo-300 hover:text-white hover:border-indigo-400/40 transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Stack + Links footer */}
                <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-black/40 text-gray-400 text-[11px] font-mono border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors"
                          aria-label={`${project.title} source code`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          Source
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                          aria-label={`${project.title} live site`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Site
                        </a>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-gray-700">verified</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
