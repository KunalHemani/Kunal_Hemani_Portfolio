import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-[#030712]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-10 md:p-16 border border-white/5"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            I am <span className="text-white font-semibold">Kunal Hemani</span>, an{" "}
            <span className="text-white font-semibold">
              MCA final-year student
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold">
              Developer Trainee at Maxxis Rubber India Pvt. Ltd.
            </span>
            , with a strong foundation in computer applications and hands-on
            experience in full-stack software development.
          </p>

          <p className="text-slate-400 leading-relaxed mb-6">
            My technical expertise includes{" "}
            <span className="text-white font-semibold">
              Java, Flutter, Dart, React.js, Node.js, Firebase, MySQL,
              MongoDB, Python, .NET, and REST APIs
            </span>
            , with a focus on building scalable, user-centric, and efficient
            software solutions.
          </p>

          <p className="text-slate-400 leading-relaxed mb-6">
            Through industry, academic, and freelance projects, I have gained
            practical experience in{" "}
            <span className="text-white font-semibold">
              full-stack application development, mobile app development,
              database design, REST API integration, analytics, and payment
              gateway integration using Stripe
            </span>
            . My work includes developing{" "}
            <span className="text-white font-semibold">
              Manufacturing Quality Analytics and Reporting System
            </span>
            , AI-powered healthcare applications, travel and workspace
            management platforms, and secure payment-enabled applications.
          </p>

          <p className="text-slate-400 leading-relaxed">
            I am passionate about continuous learning and applying modern
            technologies to build reliable, scalable, and user-focused software
            that solves real-world problems while continuously enhancing my
            technical and professional skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;