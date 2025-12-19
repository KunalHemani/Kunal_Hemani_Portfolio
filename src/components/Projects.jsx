import { motion } from "framer-motion";

/* ------------------ PROJECT DATA (ATS OPTIMIZED) ------------------ */
const projects = [
  {
    title: "People’s Care - Med AI",
    description:
      "An AI based application designed to assist in medical image analysis, enabling efficient processing and interpretation of medical images to support healthcare decision-making.",
    tech: ["Python", "Streamlit", "REST APIs"]
  },
  {
    title: "GoBuddy",
    description:
      "A travel booking and assistance application allowing users to explore destinations, book tickets, and manage travel plans efficiently.",
    tech: ["Flutter", "Firebase", "Cloud Firestore"]
  },
  {
    title: "MySpace",
    description:
      "A desk-on-rent and freelance module platform that connects workspace providers and freelancers, allowing users to book desks and manage freelance opportunities.",
    tech: ["Flutter", "Firebase", "Cloud Firestore"]
  },
  {
    title: "Student Admission Enquiry App",
    description:
      "A streamlined application for managing student admission enquiries with efficient data organization and admin-friendly workflows.",
    tech: ["Freelance", "Java", "MySQL"]
  }
];

/* ------------------ ANIMATION ------------------ */
const cardAnim = {
  hidden: { opacity: 0, y: 16 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 }
  })
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-[#030712]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-14 text-center">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={cardAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ scale: 1.025 }}
              className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
