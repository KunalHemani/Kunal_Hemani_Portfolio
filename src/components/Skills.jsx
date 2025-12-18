const skills = [
  "Java", "Flutter", "Dart", "React",
  "MongoDB", "Firebase", "SQL", "Oracle APEX"
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold gradient-text mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <span
              key={skill}
              className="px-4 py-2 glass-card rounded-xl hover-lift"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
