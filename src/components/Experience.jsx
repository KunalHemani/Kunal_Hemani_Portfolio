import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Developer Trainee",
    company: "Maxxis Rubber India Pvt. Ltd.",
    duration: "Feb 2026 - Present",
    location: "Ahmedabad, Gujarat",
    description:
      "Working on internal software applications and production IT systems to improve operational efficiency. Developing the Manufacturing Quality Analytics and Reporting System with features like defect tracking, quality classification, trend analysis, dashboards, and report generation.",
    tech: ["Java", "SQL", ".NET", "Reporting Tools"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-[#030712]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-14 text-center">
            Experience <span className="text-cyan-400">.</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Briefcase className="text-cyan-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="text-cyan-400 font-semibold">
                      {exp.company}
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                      {exp.duration} | {exp.location}
                    </p>
                  </div>

                </div>

                <p className="text-slate-400 leading-relaxed mt-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;