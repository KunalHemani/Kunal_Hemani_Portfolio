import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, Database, Globe, Cpu } from 'lucide-react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const content = {
    skills: [
      { name: "Frontend", icon: <Globe size={20}/>, items: ["React.js", "Next.js", "Tailwind CSS", "Redux"] },
      { name: "Backend", icon: <Database size={20}/>, items: ["Node.js", "Express", "Java", "Python"] },
      { name: "Database & Tools", icon: <Cpu size={20}/>, items: ["MongoDB", "MySQL", "Git", "Docker"] }
    ],
    certificates: [
      { name: "Full Stack Development", issuer: "Meta", year: "2024" },
      { name: "Java Programming Masterclass", issuer: "Udemy", year: "2023" },
      { name: "AWS Cloud Foundations", issuer: "Amazon", year: "2023" }
    ]
  };

  return (
    <section id="tabs-section" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="glass p-1.5 rounded-full flex gap-2">
            {['skills', 'certificates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3 rounded-full capitalize transition-all duration-500 font-bold tracking-wide ${
                  activeTab === tab 
                  ? 'bg-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.5)]' 
                  : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {activeTab === 'skills' ? (
              content.skills.map((cat) => (
                <div key={cat.name} className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-cyan-500/30 transition-colors group">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <h3 className="text-xl font-bold mb-6 text-white">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span key={item} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              content.certificates.map((cert) => (
                <div key={cert.name} className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between group">
                  <div>
                    <Award className="text-cyan-400 mb-4 group-hover:rotate-12 transition-transform" size={28} />
                    <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-sm text-slate-500">{cert.issuer} • {cert.year}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Verified Credential</span>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tabs;