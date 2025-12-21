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
            <span className="text-white font-semibold">MCA final-year student</span>{" "}
            with a strong foundation in computer applications and hands-on experience
            in full-stack software development. My skill set includes{" "}
            <span className="text-white font-semibold">
              Java, Flutter, Dart, Firebase, React.js, Node.js, MySQL, MongoDB, Python
            </span>
            , with a focus on building clean, scalable, and user-centric solutions.
          </p>

          <p className="text-slate-400 leading-relaxed mb-6">
            I have worked on multiple academic, real-world, and freelance projects,
            including <span className="text-white font-semibold">People’s Care</span>,{" "}
            <span className="text-white font-semibold">MySpace</span>, and{" "}
            <span className="text-white font-semibold">Stripe Payment API integration</span>,
            along with community platforms and other application-based systems. These
            projects have provided hands-on experience in end-to-end development,
            requirement analysis, and building practical solutions aligned with
            real-world use cases.
          </p>

          <p className="text-slate-400 leading-relaxed mb-6">
            My achievements include scoring <span className="text-white font-semibold">97.31%</span> in the Maharashtra MCA Common Entrance Exam
            and holding leadership roles such as <span className="text-white font-semibold">Editorial Committee Member of MET MCA Edge Magazine (2025)</span>,{" "}
            <span className="text-white font-semibold">Coordinator of MET UTSAV</span>, and{" "}
            <span className="text-white font-semibold">HOD of Inferno’24, SDJIC</span>.
          </p>

          <p className="text-slate-400 leading-relaxed">
            I am actively seeking{" "}
            <span className="text-cyan-400 font-semibold">entry-level or internship opportunities</span>{" "}
            where I can contribute as a software developer and continue to grow
            professionally.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
