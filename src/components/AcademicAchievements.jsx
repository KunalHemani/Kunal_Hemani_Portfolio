import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Trophy,
  Users,
  GraduationCap,
  PenTool,
} from "lucide-react";

const achievements = [
  {
    icon: BookOpen,
    title: "Research Publications",
    description:
      "Published research papers in IRJMETS Journal, ICETCSM Conference, and ICTACT Journals (2026).",
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "Achieved 2nd Rank in MCA Semester III.",
  },
  {
    icon: GraduationCap,
    title: "MCA CET",
    description:
      "Scored 97.31 percentile in the Maharashtra MCA Common Entrance Test.",
  },
  {
    icon: PenTool,
    title: "Editorial Committee",
    description:
      "Editorial Committee Member of MET MCA Edge Magazine (2025).",
  },
  {
    icon: Users,
    title: "Event Coordinator",
    description: "Coordinator of MET UTSAV 2025.",
  },
  {
    icon: Award,
    title: "Leadership",
    description: "Head of Department (HOD) of Inferno'24, SDJIC.",
  },
];

const AcademicAchievements = () => {
  return (
    <section id="academic-achievements" className="py-24 px-4 bg-[#030712]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-14">
            Academic{" "}
            <span className="text-cyan-400">Achievements</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="glass border border-white/5 hover:border-cyan-500/30 rounded-3xl p-6 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5">
                    <Icon className="text-cyan-400" size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicAchievements;