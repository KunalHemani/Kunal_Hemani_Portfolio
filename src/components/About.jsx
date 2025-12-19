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
            in full stack software development.
          </p>

          <p className="text-slate-400 leading-relaxed mb-6">
            My technical expertise includes{" "}
            <span className="text-white">
              Flutter, Firebase, React.js, Node.js, Java, MySQL, MongoDB
            </span>{" "}
            and RESTful API development. I enjoy designing clean user interfaces and
            building scalable backend systems that solve real-world problems.
          </p>

          <p className="text-slate-400 leading-relaxed">
            I have developed multiple academic and real-world projects including
            community platforms, travel booking applications, and inventory
            management systems. I am actively seeking{" "}
            <span className="text-cyan-400 font-semibold">
              entry-level or internship opportunities
            </span>{" "}
            where I can contribute as a software developer and continue to grow
            professionally.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
