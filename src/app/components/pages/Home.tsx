import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, TreeDeciduous, Trophy } from "lucide-react";

export default function Home() {
  const values = [
    { 
      icon: <GraduationCap className="w-8 h-8" />, 
      title: "Academic Excellence", 
      desc: "Setting high standards for O-Level and A-Level achievement." 
    },
    { 
      icon: <TreeDeciduous className="w-8 h-8" />, 
      title: "Sustainability", 
      desc: "Proud home of the Green Revamping Club, fostering environmental care." 
    },
    { 
      icon: <Trophy className="w-8 h-8" />, 
      title: "Competitive Spirit", 
      desc: "Excellence on the field, from local leagues to national fixtures." 
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      
      {/* --- HERO SECTION (Consolidated) --- */}
      <section className="relative min-h-[85vh] flex items-center bg-[#1e3a8a] overflow-hidden">
        {/* Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-[#d4a855] text-[#1e3a8a] px-4 py-1.5 rounded-full text-xs font-bold mb-8 shadow-lg">
                Est. Government-Aided Institution
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
                Shaping <span className="text-[#d4a855]">Futures</span> <br />
                in Abim District
              </h1>
              <p className="text-lg md:text-xl mb-10 text-blue-100/90 max-w-lg font-medium leading-relaxed">
                Education is the Key to Success. Join a community dedicated to academic excellence and moral integrity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admissions" className="bg-[#d4a855] hover:bg-[#b98e3d] text-[#1e3a8a] px-10 py-4 rounded-xl font-bold transition-all shadow-xl">
                  Enroll Today
                </Link>
                <Link to="/academics" className="bg-transparent hover:bg-white/10 border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold transition-all">
                  View Curriculum
                </Link>
              </div>
            </motion.div>

            {/* Right Image (Campus Photo) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] border-2 border-white/20 p-2 backdrop-blur-sm bg-white/5">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl bg-slate-800">
                  <img
                    src="/images/AbimSS.jpg" 
                    alt="Abim SS Campus" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl text-[#1e3a8a] min-w-[160px]"
              >
                <p className="font-black text-4xl">98%</p>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-tighter">Pass Rate</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GREEN CLUB SECTION (Using 1.png for quality) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row-reverse">
            <div className="lg:w-1/2 h-[450px]">
              <img 
                src="/images/1.png" 
                alt="Abim SS Students"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-green-600 font-bold mb-6">
                <span className="w-10 h-[2px] bg-green-600"></span>
                <span className="uppercase tracking-widest text-xs">Sustainability</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                Greening our Future <br />with Roofings Group
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                The Abim SS Green Revamping Club is transforming 
                our campus. Through the support of Roofings Group, we've integrated fruit tree 
                seedlings to teach students the value of sustainability and environmental care.
              </p>
              <Link to="/news" className="bg-[#1e3a8a] text-white w-fit px-8 py-3 rounded-full font-bold hover:bg-[#d4a855] transition-all flex items-center gap-2">
                Read Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Why Choose Abim SS?</h2>
            <div className="w-16 h-1 bg-[#d4a855] mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-3xl hover:bg-[#1e3a8a] transition-all duration-500 shadow-sm">
                <div className="w-16 h-16 bg-white text-[#1e3a8a] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-white mb-4">{v.title}</h3>
                <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}