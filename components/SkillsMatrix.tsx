"use client";

import React from "react";
import { SKILL_GROUPS } from "@/data/portfolio";
import { Code2, Layout, Server, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";

function SkillIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "Code2":   return <Code2   className="w-5 h-5 text-indigo-400" />;
    case "Layout":  return <Layout  className="w-5 h-5 text-cyan-400"   />;
    case "Server":  return <Server  className="w-5 h-5 text-emerald-400" />;
    case "Database":return <Database className="w-5 h-5 text-amber-400"  />;
    default:        return <Cpu     className="w-5 h-5 text-indigo-400"  />;
  }
}

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 relative bg-grid-pattern border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Engineering Matrix
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            Battle-tested proficiencies spanning distributed backend design, multi-tenant relational databases, cloud DevOps, and modern reactive frontends.
          </p>
        </div>

        {/* 4-column matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="rounded-2xl bg-[#0C1524] border border-white/[0.08] p-5 sm:p-6 hover:border-white/[0.18] transition-all duration-300 shadow-xl flex flex-col group"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.08] group-hover:scale-105 transition-transform">
                  <SkillIcon icon={group.icon} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{group.title}</h3>
                  <span className="text-[11px] font-mono text-gray-500">
                    {group.skills.length} skills
                  </span>
                </div>
              </div>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2 flex-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-black/40 text-gray-300 border border-white/[0.06] hover:border-indigo-500/40 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-600">
                <span>Production Ready</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
