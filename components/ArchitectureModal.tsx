"use client";

import React, { useEffect, useCallback } from "react";
import { FlagshipProject } from "@/data/portfolio";
import {
  X,
  ExternalLink,
  Github,
  Workflow,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ArchitectureModalProps {
  project: FlagshipProject | null;
  onClose: () => void;
}

export default function ArchitectureModal({ project, onClose }: ArchitectureModalProps) {
  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="arch-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[88vh] bg-[#0C1524] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-[#060A13] border-b border-white/[0.08] flex items-start justify-between gap-4 shrink-0">
              <div className="space-y-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-500">{project.category}</span>
                </div>
                <h2
                  id="arch-modal-title"
                  className="text-lg sm:text-2xl font-bold text-white truncate"
                >
                  {project.title} — Architecture & Flow
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{project.subtitle}</p>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-400 hover:text-white transition-colors shrink-0"
                aria-label="Close architecture modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-7 text-sm flex-1">
              {/* Overview */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2 mb-2">
                  <Workflow className="w-4 h-4" />
                  Architectural Overview
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm bg-black/40 p-4 rounded-xl border border-white/[0.06]">
                  {project.architectureOverview}
                </p>
              </div>

              {/* Flow Diagram */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4" />
                  End-to-End Pipeline Flow
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {project.architectureNodes.map((node, idx) => (
                    <div
                      key={idx}
                      className="relative flex flex-col p-4 rounded-xl bg-black/50 border border-white/[0.08] hover:border-emerald-500/35 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-300 font-mono text-xs flex items-center justify-center font-bold border border-emerald-500/20">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {idx < project.architectureNodes.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-gray-600 hidden lg:block" />
                        )}
                      </div>
                      <div className="font-semibold text-white text-xs group-hover:text-emerald-300 transition-colors mb-1 leading-snug">
                        {node.title}
                      </div>
                      <div className="text-[11px] text-gray-400 leading-relaxed flex-1">
                        {node.role}
                      </div>
                      <div className="pt-3 mt-3 border-t border-white/[0.06]">
                        <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono text-[10px] border border-indigo-500/15">
                          {node.tech}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Modules */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4" />
                  Core Subsystems & Resiliency
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.keyModules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5"
                    >
                      <div className="font-semibold text-white text-xs font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        {mod.title}
                      </div>
                      <div className="text-[11px] text-gray-400 leading-relaxed">{mod.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div className="pt-3 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-2.5">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-black/60 text-gray-200 text-xs font-mono border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#060A13] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-gray-950 flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Live App
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.14] text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Repository
                  </a>
                )}
              </div>

              <button
                onClick={handleClose}
                className="text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors"
              >
                Close (Esc)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
