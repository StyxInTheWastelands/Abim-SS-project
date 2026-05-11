import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#1e3a8a] font-bold text-lg">ASS</span>
              </div>
              <h3 className="font-extrabold text-xl tracking-tight">Abim SS</h3>
            </div>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Empowering students through quality education and strong moral values. 
              A leading government-aided institution in the heart of Abim District.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#d4a855] rounded-lg flex items-center justify-center transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#d4a855] rounded-lg flex items-center justify-center transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#d4a855] rounded-lg flex items-center justify-center transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-blue-100/70 hover:text-[#d4a855] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#d4a855] rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-blue-100/70">
                <MapPin className="w-5 h-5 text-[#d4a855] shrink-0" />
                <span>Abim Town Council,<br />Abim District, Northern Uganda</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/70">
                <Phone className="w-5 h-5 text-[#d4a855] shrink-0" />
                <span>+256 700 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/70">
                <Mail className="w-5 h-5 text-[#d4a855] shrink-0" />
                <span>info@abimss.edu.ug</span>
              </li>
            </ul>
          </div>

          {/* Operation Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Office Hours</h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-blue-100/60">Mon - Fri:</span>
                <span className="font-medium">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-100/60">Saturday:</span>
                <span className="font-medium">9:00 - 13:00</span>
              </div>
              <p className="mt-4 text-[10px] text-blue-100/40 italic">
                * Closed on Public Holidays
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/50">
          <p>© {new Date().getFullYear()} Abim Secondary School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}