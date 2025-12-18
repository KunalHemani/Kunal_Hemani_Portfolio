const projects = [
  "People's Care",
  "GoBuddy",
  "MySpace",
  "Aarohi Coaching Classes Admission App"
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold gradient-text mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project} className="glass-card p-6 rounded-2xl hover-lift">
              <h3 className="text-xl font-semibold">{project}</h3>
              <p className="text-muted-foreground mt-2">
                Freelance project focused on real-world problem solving.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
