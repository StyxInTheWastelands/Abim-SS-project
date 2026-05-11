import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Languages, Landmark, Laptop, Tractor } from "lucide-react";

export default function Academics() {
  const departments = [
    {
      title: "Sciences",
      icon: <FlaskConical className="w-8 h-8 text-blue-500" />,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Physical Education"],
      description: "Equipped with laboratories to provide hands-on scientific learning."
    },
    {
      title: "Humanities",
      icon: <Landmark className="w-8 h-8 text-orange-500" />,
      subjects: ["History", "Geography", "Religious Education", "Political Education"],
      description: "Fostering an understanding of society, heritage, and civic responsibility."
    },
    {
      title: "Vocational & Tech",
      icon: <Tractor className="w-8 h-8 text-green-500" />,
      subjects: ["Agriculture", "Entrepreneurship", "Computer Studies", "Fine Art"],
      description: "Practical skills for self-reliance and modern economic participation."
    },
    {
      title: "Languages",
      icon: <Languages className="w-8 h-8 text-purple-500" />,
      subjects: ["English Language", "Literature in English", "Local Language Study"],
      description: "Building strong communication skills and literary appreciation."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#1e3a8a] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Academic <span className="text-[#d4a855]">Programs</span></h1>
          <p className="text-blue-100 max-w-xl mx-auto px-4">
            A comprehensive curriculum designed to meet national standards and empower students for higher education.
          </p>
        </div>
      </section>

      {/* Level Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="border-l-4 border-[#d4a855] bg-slate-50 p-8 rounded-r-3xl">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4 underline decoration-[#d4a855] decoration-2 underline-offset-8">O-Level (S1 - S4)</h2>
            <p className="text-slate-600">
              Our Lower Secondary curriculum follows the revised national syllabus, focusing on competency-based learning to ensure every student gains practical knowledge and critical thinking skills.
            </p>
          </div>
          <div className="border-l-4 border-[#1e3a8a] bg-slate-50 p-8 rounded-r-3xl">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4 underline decoration-[#1e3a8a] decoration-2 underline-offset-8">A-Level (S5 - S6)</h2>
            <p className="text-slate-600">
              Upper Secondary students specialize in Science or Arts combinations, preparing them specifically for University entry and professional career paths.
            </p>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e3a8a]">Subject Departments</h2>
          <p className="text-slate-500 mt-2">Explore the diverse range of subjects offered at Abim SS</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 shadow-sm p-8 rounded-[2rem] hover:shadow-xl transition-all"
            >
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {dept.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{dept.title}</h3>
              <p className="text-xs text-slate-400 mb-6 italic">{dept.description}</p>
              <ul className="space-y-2">
                {dept.subjects.map((sub, j) => (
                  <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#d4a855] rounded-full"></span>
                    {sub}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action: Admissions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#1e3a8a] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-[#d4a855]">Ready to Start Your Journey?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Admissions for the new academic year are currently open for both S1 and S5 entrants.
              </p>
              <button className="bg-white text-[#1e3a8a] px-10 py-4 rounded-xl font-bold hover:bg-[#d4a855] hover:text-white transition-all">
                Download Admission Form
              </button>
            </div>
            <BookOpen className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 rotate-12" />
          </div>
        </div>
      </section>
    </div>
  );
}