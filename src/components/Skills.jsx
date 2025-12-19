const Skills = () => {
  const categories = [
    { name: "Frontend", tools: ["React", "Tailwind", "Framer Motion"] },
    { name: "Backend", tools: ["Node.js", "Express", "MongoDB", "Java"] }
  ];

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 text-cyan-400 uppercase tracking-tighter">{cat.name}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.tools.map(tool => (
                <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;