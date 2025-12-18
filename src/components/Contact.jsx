export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl font-bold gradient-text mb-6">Contact</h2>

        <div className="space-y-3 text-lg">
          <p>
            📧 <a href="mailto:kunalnhemani@gmail.com" className="hover:text-primary">
              kunalnhemani@gmail.com
            </a>
          </p>
          <p>
            📞 <a href="tel:9428745235" className="hover:text-primary">
              9428745235
            </a>
          </p>
          <p>📍 Surat, Gujarat</p>
        </div>
      </div>
    </section>
  );
}
