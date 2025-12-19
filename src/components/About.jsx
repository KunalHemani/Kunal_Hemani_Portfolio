import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-8 md:p-12 rounded-[2.5rem] max-w-5xl mx-4 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6 italic text-cyan-400">01. About Me</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            I am an <span className="text-grey font-semibold">MCA graduate</span> with a strong foundation in software engineering. My approach combines technical rigor with a keen eye for design aesthetics.
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">MCA</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Degree</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Full-Stack</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Focus</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/src/assets/images/profile.jpg" 
              className="relative rounded-2xl w-64 h-64 object-cover border border-white/10"
              alt="Profile" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default About;