import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-[#030712]">
      <div className="max-w-6xl mx-auto glass rounded-[2.5rem] p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white text-left">Let's <span className="text-cyan-400">Connect</span></h2>
            <p className="text-slate-400 mb-10 text-left">Currently seeking opportunities in Surat or remote roles. Feel free to reach out!</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Email</p>
                  <a href="mailto:kunalnhemani@gmail.com" className="hover:text-cyan-400 transition-colors">kunalnhemani@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-cyan-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Phone</p>
                  <a href="tel:+919428745235" className="hover:text-cyan-400 transition-colors">+91 94287 45235</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Location</p>
                  <p>Surat, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full glass bg-transparent p-4 rounded-xl outline-none focus:border-cyan-500/50 transition-all text-white" />
            <input type="email" placeholder="Your Email" className="w-full glass bg-transparent p-4 rounded-xl outline-none focus:border-cyan-500/50 transition-all text-white" />
            <textarea placeholder="Message" rows="5" className="w-full glass bg-transparent p-4 rounded-xl outline-none focus:border-cyan-500/50 transition-all text-white"></textarea>
            <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;