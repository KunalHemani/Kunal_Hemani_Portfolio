import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section className="section-padding pt-40">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="gradient-text">Kunal Hemani</span>
          </h1>

          <p className="mt-6 text-muted-foreground text-lg">
            Detail-oriented Full Stack Developer skilled in Java, Flutter,
            React, and Firebase, with hands-on experience delivering real-world
            projects and solutions.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover-lift"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/KunalHemani"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-border hover-lift"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.img
          src={profile}
          alt="Profile"
          className="w-72 mx-auto rounded-3xl shadow-card glow-effect"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>
    </section>
  );
}
