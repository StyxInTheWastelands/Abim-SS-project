import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white text-[#1e3a8a] sticky top-0 z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section - Rebranded to avoid the "ASS" acronym */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform duration-300">
              {/* Using a Shield icon instead of text for the primary brand mark */}
              <ShieldCheck className="text-white" size={28} />
            </div>
            <div>
              <h1 className="font-extrabold text-[#1e3a8a] text-lg leading-tight uppercase tracking-tight">
                Abim <span className="text-[#d4a855]">Secondary</span>
              </h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hidden sm:block">
                Virtue & Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-bold text-sm text-slate-600 hover:text-[#1e3a8a] relative group transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a855] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link 
              to="/portal"
              className="flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#d4a855] transition-all shadow-md shadow-blue-900/10 active:scale-95"
            >
              <GraduationCap size={18} />
              Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1e3a8a] hover:bg-slate-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-[#1e3a8a] rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="px-4 pt-2">
              <Link 
                to="/portal"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#1e3a8a] text-white py-4 rounded-2xl font-bold hover:bg-[#d4a855] transition-all"
              >
                <GraduationCap size={20} />
                Access School Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}