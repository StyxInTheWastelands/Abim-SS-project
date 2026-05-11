import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Wallet, 
  TrendingUp, 
  MessageCircle, 
  Calendar, 
  CreditCard, 
  Download,
  AlertCircle,
  CheckCircle2,
  User,
  Heart,
  ExternalLink,
  MapPin,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState("finances");

  const feeHistory = [
    { date: "12 Jan 2026", description: "Term 1 Tuition", amount: "1,200,000 UGX", status: "Paid" },
    { date: "15 Jan 2026", description: "Library & Lab Fees", amount: "150,000 UGX", status: "Paid" },
    { date: "02 Feb 2026", description: "School Uniform", amount: "80,000 UGX", status: "Pending" },
  ];

  const behaviorNotes = [
    { date: "Yesterday", teacher: "Mr. Okot", note: "John showed great leadership in the Math club today.", type: "positive" },
    { date: "Last Week", teacher: "Ms. Akello", note: "A bit distracted in Biology, but completed his lab work.", type: "neutral" },
  ];

  const upcomingEvents = [
    { date: "25 May", title: "Visitation Day", time: "09:00 AM", location: "Main Campus", desc: "Parents are invited to check on students' progress and bring basic requirements." },
    { date: "10 June", title: "Inter-House Sports", time: "10:00 AM", location: "Sports Ground", desc: "A day of athletics and competitions between houses." },
    { date: "18 June", title: "Mid-Term Break", time: "12:00 PM", location: "School Gate", desc: "Students depart for a 5-day break. School van available for town drops." },
  ];

  const navItems = [
    { id: 'finances', name: 'Fees', fullName: 'Fee & Payments', icon: <Wallet size={20} /> },
    { id: 'progress', name: 'Grades', fullName: 'My Child\'s Grades', icon: <TrendingUp size={20} /> },
    { id: 'conduct', name: 'Conduct', fullName: 'Conduct & Feed', icon: <MessageCircle size={20} /> },
    { id: 'calendar', name: 'Events', fullName: 'School Events', icon: <Calendar size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "finances":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#1e3a8a] text-white p-6 md:p-8 rounded-[2.5rem] shadow-xl">
                <p className="text-blue-200 text-[10px] font-bold uppercase mb-1">Total Balance</p>
                <h3 className="text-2xl font-black italic">80,000 UGX</h3>
                <button className="mt-6 w-full py-3 bg-[#d4a855] text-[#1e3a8a] rounded-xl font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <CreditCard size={18}/> Pay Online
                </button>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Total Paid</p>
                <h3 className="text-2xl font-black text-[#1e3a8a]">1,350,000 UGX</h3>
                <div className="mt-4 flex items-center gap-2 text-green-500 font-bold text-[10px]">
                  <CheckCircle2 size={14}/> 94% Cleared
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hidden lg:block">
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Next Installment</p>
                <h3 className="text-2xl font-black text-slate-700">15th May</h3>
                <p className="text-xs text-slate-400 mt-1">Term 2 Advance</p>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h4 className="font-bold text-[#1e3a8a]">Transaction History</h4>
                <button className="text-[#d4a855] text-xs font-bold flex items-center gap-1 hover:underline">
                  <Download size={14}/> Statement
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
                    <tr>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4">Description</th>
                      <th className="px-8 py-4">Amount</th>
                      <th className="px-8 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {feeHistory.map((item, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50">
                        <td className="px-8 py-5 text-slate-500">{item.date}</td>
                        <td className="px-8 py-5 font-bold text-[#1e3a8a]">{item.description}</td>
                        <td className="px-8 py-5 font-mono font-bold">{item.amount}</td>
                        <td className="px-8 py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        );

      case "conduct":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl space-y-6">
            <h2 className="text-xl font-bold text-[#1e3a8a]">Teacher Feed</h2>
            <div className="space-y-4">
              {behaviorNotes.map((note, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden pl-8">
                  <div className={`absolute left-0 top-0 bottom-0 w-2 ${note.type === 'positive' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-[10px] font-black text-[#d4a855] uppercase">{note.teacher}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{note.date}</p>
                    </div>
                    {note.type === 'positive' && <Heart className="text-red-400 fill-red-400" size={16}/>}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium italic">"{note.note}"</p>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "progress":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="bg-white p-6 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-8">Academic Performance</h2>
              <div className="space-y-8">
                {[
                  { sub: "Mathematics", grade: "D1", color: "bg-green-500", width: "90%" },
                  { sub: "Physics", grade: "D2", color: "bg-green-400", width: "85%" },
                  { sub: "English", grade: "C3", color: "bg-blue-400", width: "70%" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-bold mb-3 text-[#1e3a8a]">
                      <span>{s.sub}</span>
                      <span className="bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">{s.grade}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: s.width }} 
                        className={`h-full ${s.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case "calendar":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">Upcoming Events</h2>
              <button className="flex items-center gap-2 text-xs font-bold text-[#d4a855] hover:underline">
                View School News <ExternalLink size={14}/>
              </button>
            </div>
            
            <div className="space-y-6 pb-10">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                  <div className="flex sm:flex-col items-center gap-4 sm:gap-0">
                    <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center shadow-sm group-hover:border-[#d4a855] transition-colors shrink-0">
                      <span className="text-[10px] font-black text-slate-400 uppercase leading-none">{event.date.split(' ')[1]}</span>
                      <span className="text-xl font-black text-[#1e3a8a]">{event.date.split(' ')[0]}</span>
                    </div>
                    {i !== upcomingEvents.length - 1 && <div className="hidden sm:block w-0.5 h-full bg-slate-100 my-2"></div>}
                  </div>
                  <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex-1">
                    <h3 className="font-bold text-[#1e3a8a] text-lg mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-[10px] text-slate-400 mb-4 font-bold uppercase tracking-tight">
                      <span className="flex items-center gap-1"><Clock size={14} className="text-[#d4a855]"/> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} className="text-[#d4a855]"/> {event.location}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      default: return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Sidebar - Desktop Only */}
      <aside className="w-64 bg-white border-r border-slate-100 hidden md:flex flex-col p-6 shrink-0">
        <div className="mb-10 px-2">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="text-red-500 fill-red-500" size={20}/>
            <h2 className="text-lg font-bold text-[#1e3a8a]">Parent<span className="text-[#d4a855]">Care</span></h2>
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Abim Secondary School</p>
        </div>
        
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-[#1e3a8a] text-white font-bold shadow-lg' : 'text-slate-400 hover:bg-slate-50'}`}
            >
              {item.icon} {item.fullName || item.name}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 bg-orange-50 rounded-2xl border border-orange-100">
          <div className="flex gap-2 text-orange-700 mb-2">
            <AlertCircle size={16}/>
            <span className="text-[10px] font-bold uppercase">Important</span>
          </div>
          <p className="text-[11px] text-orange-800 leading-tight font-medium">Visitation day is scheduled for 25th May 2026.</p>
        </div>
      </aside>

      {/* Bottom Nav - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        {navItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => setActiveTab(item.id)} 
            className={`flex flex-col items-center gap-1 ${activeTab === item.id ? 'text-[#1e3a8a]' : 'text-slate-400'}`}
          >
            <div className={`p-2 rounded-xl ${activeTab === item.id ? 'bg-blue-50' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-tighter">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 pb-24 md:pb-10">
        <header className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-4 mb-10">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#1e3a8a]">Parent Portal</h1>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1 font-medium">
              <span>Student:</span>
              <span className="bg-[#1e3a8a]/10 text-[#1e3a8a] px-2 py-0.5 rounded text-[10px] font-bold uppercase">Okello John Bosco (S.4)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 self-end xs:self-auto">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-[#1e3a8a]">Mr. Opio David</p>
              <p className="text-[10px] text-[#d4a855] font-bold uppercase tracking-widest">Guardian</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm text-[#1e3a8a]">
              <User size={20} />
            </div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}