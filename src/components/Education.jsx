import { motion } from 'framer-motion';

const Education = () => {
  const edu = [
    { school: "Your University", degree: "B.Tech Computer Science", year: "2020 - 2024" },
    { school: "High School", degree: "Science & Math", year: "2018 - 2020" }
  ];

  return (
    <section id="education" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
      <div className="max-w-3xl mx-auto border-l-2 border-cyan-500/30 ml-4 md:ml-auto">
        {edu.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-10 ml-6 relative"
          >
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[33px] top-1 border-4 border-slate-900"></div>
            <p className="text-cyan-400 font-mono text-sm">{item.year}</p>
            <h3 className="text-xl font-bold">{item.school}</h3>
            <p className="text-gray-400">{item.degree}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Education;