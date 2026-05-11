import { motion } from "framer-motion";
import { UserCircle, GraduationCap, Wallet, BookOpen, Lock } from "lucide-react";
// 1. ADD THIS IMPORT
import { Link } from "react-router-dom";

export default function Portal() {
  const loginTypes = [
    {
      title: "Student Portal",
      desc: "Check exam results, download report cards, and access past papers.",
      icon: <GraduationCap size={40} />,
      color: "bg-blue-600",
      // 2. UPDATE THESE PATHS
      link: "/portal/student" 
    },
    {
      title: "Staff Portal",
      desc: "Manage classroom attendance, submit grades, and view schedules.",
      icon: <UserCircle size={40} />,
      color: "bg-slate-800",
      link: "/portal/staff"
    },
    {
      title: "Parent/Fees Portal",
      desc: "View fee balance, download bank slips, and track student progress.",
      icon: <Wallet size={40} />,
      color: "bg-[#d4a855]",
      link: "/portal/parent"
    },
    {
      title: "Digital Library",
      desc: "Access the revised O-Level curriculum resources and textbooks.",
      icon: <BookOpen size={40} />,
      color: "bg-green-700",
      link: "/portal/library"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <section className="bg-[#1e3a8a] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Lock className="mx-auto mb-6 text-[#d4a855]" size={48} />
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">School Management <span className="text-[#d4a855]">System</span></h1>
          <p className="text-blue-200">Secure access to Abim SS digital services for students, staff, and parents.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-12 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loginTypes.map((type, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 text-center flex flex-col items-center"
            >
              <div className={`${type.color} text-white p-4 rounded-2xl mb-6 shadow-lg`}>
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{type.title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {type.desc}
              </p>
              
              {/* 3. CHANGE <button> TO <Link> */}
              <Link 
                to={type.link}
                className="mt-auto w-full py-3 bg-slate-50 text-[#1e3a8a] font-bold rounded-xl hover:bg-[#1e3a8a] hover:text-white transition-all border border-slate-100 flex items-center justify-center"
              >
                Access Now
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-400">
          <p className="text-sm">Forgotten your password? Please contact the School IT Department or the Bursar's Office.</p>
        </div>
      </section>
    </div>
  );
}