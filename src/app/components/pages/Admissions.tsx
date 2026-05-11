import { motion } from "framer-motion";
import { FileText, CheckCircle, Clock, Info, UserPlus, ClipboardList } from "lucide-react";

export default function Admissions() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "1. Obtain Form",
      desc: "Pick up an application form at the school bursar's office or download it from our portal."
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "2. Required Documents",
      desc: "Submit your PLE/UCE Result Slip, a recommendation letter, and birth certificate copies."
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "3. Interview/Placement",
      desc: "Attend our scheduled interview day for assessment and house placement."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "4. Admission Letter",
      desc: "Successful candidates will receive an official admission letter and requirements list."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#1e3a8a] py-20 text-white relative">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Join Our <span className="text-[#d4a855]">Community</span></h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Everything you need to know about joining Abim Secondary School for the upcoming academic year.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Image & Requirements */}
          <div className="space-y-8">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://pbs.twimg.com/media/CVYepxLWIAADnPN.png" 
                alt="Students in classroom" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 flex items-center gap-2">
                <Info className="text-[#d4a855]" /> Entry Requirements
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4a855] rounded-full"></span>
                  Valid PLE Result Slip (for S1 entrants)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4a855] rounded-full"></span>
                  Valid UCE Result Slip (for S5 entrants)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4a855] rounded-full"></span>
                  2 Passport size photographs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4a855] rounded-full"></span>
                  Recommendation from the previous school
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: The Process */}
          <div>
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">How to Apply</h2>
            <p className="text-slate-500 mb-10">Follow these simple steps to secure your place.</p>
            
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-50 text-[#1e3a8a] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">{step.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-[#d4a855]/10 p-6 rounded-2xl border border-[#d4a855]/20 flex items-center gap-4">
              <Clock className="text-[#d4a855] shrink-0" />
              <p className="text-sm text-[#1e3a8a] font-medium">
                <strong>Current Window:</strong> S1 Admissions are now open for the First Term 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}