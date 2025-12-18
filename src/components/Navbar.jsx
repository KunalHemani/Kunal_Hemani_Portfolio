export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="container-custom flex justify-between items-center py-4">
        <h1 className="text-xl font-bold gradient-text">
          Kunal Hemani
        </h1>

        <div className="space-x-6 hidden md:block">
          {["about", "skills", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-primary transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
