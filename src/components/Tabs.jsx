import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    {
      title: "Programming Skills",
      items: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    },
    {
      title: "Database & Tools",
      items: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ]
    }
  ];

  const certificates = [
    { name: "AWS Academy Machine Learning Foundations", issuer: "Amazon Web Services" },
    { name: "AWS Academy Generative AI Foundation", issuer: "Amazon Web Services" },
    { name: "Business Analytics Using Advanced Excel", issuer: "Quantum Learnings x MET" },
    { name: "Fundamentals of Laravel Framework", issuer: "VNSGU" },
    { name: "Distributed Version Control Using Git", issuer: "VNSGU" },
    { name: "Cyber Security Fundamentals", issuer: "VNSGU" }
  ];

  return (
    <section className="py-24 px-4 bg-[#030712]">
      <div className="max-w-7xl mx-auto">

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="glass p-1.5 rounded-full flex gap-2">
            {["skills", "certificates"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3 rounded-full font-bold capitalize transition ${
                  activeTab === tab
                    ? "bg-cyan-500 text-slate-900 shadow-lg"
                    : "text-slate-400 hover:text-white"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-10 justify-center"
          >

            {/* Skills */}
            {activeTab === "skills" &&
              skills.map(section => (
                <div
                  key={section.title}
                  className="glass p-8 rounded-[2.5rem] border border-white/5"
                >
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    {section.title}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {section.items.map(skill => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-7 h-7 object-contain"

                        />
                        <span className="text-base text-slate-100 font-semibold">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

            {/* Certificates */}
            {activeTab === "certificates" &&
              certificates.map(cert => (
                <div
                  key={cert.name}
                  className="glass p-8 rounded-[2.5rem] border border-white/5"
                >
                  <Award className="text-cyan-400 mb-4" size={28} />
                  <h3 className="text-lg font-bold text-white">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              ))}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tabs;
