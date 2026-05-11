import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  LogOut, 
  Bell,
  Download,
  CheckCircle2,
  X,
  User,
  GraduationCap,
  MessageSquare,
  Send,
  Star,
  FileDown
} from "lucide-react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const boardPosts = [
    { user: "Mr. Okot (Math)", message: "Well done to S.4 Blue for the 100% attendance this week! Keep it up.", type: "teacher" },
    { user: "Okello John", message: "Anyone found a blue geometry set in Lab 2?", type: "student" },
    { user: "Admin", message: "Reminder: The school van leaves at exactly 4:30 PM for town trips.", type: "admin" }
  ];

  const assignments = [
    { subject: "Mathematics", task: "Quadratic Equations", deadline: "In 2 days", status: "Pending" },
    { subject: "Physics", task: "Light Refraction Lab Report", deadline: "Tomorrow", status: "Urgent" },
    { subject: "English", task: "Literature Essay: 'The Pearl'", deadline: "Completed", status: "Done" },
  ];

  const subjects = [
    { name: "Mathematics", teacher: "Mr. Okot", room: "Block A", progress: 85 },
    { name: "Biology", teacher: "Ms. Akello", room: "Lab 2", progress: 70 },
    { name: "Physics", teacher: "Mr. Ochen", room: "Lab 1", progress: 65 },
    { name: "English Lit", teacher: "Mrs. Anyango", room: "Room 4", progress: 90 },
    { name: "History", teacher: "Mr. Bukenya", room: "Block C", progress: 45 },
    { name: "Chemistry", teacher: "Dr. Lokeris", room: "Lab 3", progress: 78 },
  ];

  const resultsData = [
    { term: "Term 1 2026", average: "78%", status: "Released", id: "T1-26" },
    { term: "Term 3 2025", average: "82%", status: "Released", id: "T3-25" },
    { term: "Term 2 2025", average: "75%", status: "Released", id: "T2-25" },
  ];

  const navItems = [
    { id: 'dashboard', name: 'Dash', fullName: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'subjects', name: 'Subjects', fullName: 'My Subjects', icon: <BookOpen size={20} /> },
    { id: 'results', name: 'Results', fullName: 'Results', icon: <FileText size={20} /> },
    { id: 'profile', name: 'Profile', fullName: 'My Profile', icon: <User size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl space-y-8">
            <div className="bg-white rounded-[3rem] p-6 md:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-10">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#d4a855] rounded-[2.5rem] flex items-center justify-center text-[#1e3a8a] text-6xl font-black shadow-inner">
                  O
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                  <h2 className="text-2xl md:text-3xl font-black text-[#1e3a8a]">Okello John Bosco</h2>
                  <span className="px-4 py-1 bg-blue-100 text-[#1e3a8a] text-xs font-bold rounded-full w-fit mx-auto md:mx-0">S.4 BLUE</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400 uppercase font-bold text-[10px]">Student ID</p>
                    <p className="font-semibold text-[#1e3a8a]">ASS/2026/042</p>
                  </div>
                  <div>
                    <p className="text-slate-400 uppercase font-bold text-[10px]">House</p>
                    <p className="font-semibold text-[#1e3a8a]">Ethur House</p>
                  </div>
                  <div>
                    <p className="text-slate-400 uppercase font-bold text-[10px]">Date of Birth</p>
                    <p className="font-semibold text-[#1e3a8a]">12th June 2008</p>
                  </div>
                  <div>
                    <p className="text-slate-400 uppercase font-bold text-[10px]">Parent/Guardian</p>
                    <p className="font-semibold text-[#1e3a8a]">Mr. Opio David</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#1e3a8a] mb-6 flex items-center gap-2"><Star className="text-[#d4a855]" size={20}/> Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-[#d4a855]/20 rounded-lg flex items-center justify-center text-[#d4a855]">🏆</div>
                    <p className="text-sm font-bold text-[#1e3a8a]">Best Math Student - Term 1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#1e3a8a] mb-6 flex items-center gap-2"><MessageSquare className="text-blue-500" size={20}/> Student Board</h3>
                <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {boardPosts.map((post, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-2xl border-l-4 border-[#1e3a8a]">
                      <p className="text-[10px] font-bold uppercase text-[#d4a855]">{post.user}</p>
                      <p className="text-xs text-slate-600 mt-1">{post.message}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <input type="text" placeholder="Post a message..." className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-[#d4a855]" />
                  <button className="p-2 bg-[#1e3a8a] text-white rounded-xl hover:bg-[#d4a855] transition-all"><Send size={16}/></button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case "subjects":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-xl font-bold text-[#1e3a8a]">Registered Subjects ({subjects.length})</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((sub, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-[#1e3a8a]">{sub.name}</h4>
                      <p className="text-xs text-slate-500">{sub.teacher} • {sub.room}</p>
                    </div>
                    <BookOpen className="text-[#d4a855]" size={18} />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-slate-400">Syllabus Progress</span>
                    <span className="text-[10px] font-bold text-[#1e3a8a]">{sub.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#1e3a8a] h-full" style={{ width: `${sub.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "results":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <h2 className="text-xl font-bold text-[#1e3a8a]">Academic Performance History</h2>
              <p className="text-sm text-slate-500">Official termly reports are published here upon release.</p>
              <div className="grid gap-4">
                {resultsData.map((res) => (
                  <div key={res.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center justify-between group hover:border-blue-500 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <FileDown size={20}/>
                      </div>
                      <div>
                        <p className="font-bold text-[#1e3a8a]">{res.term}</p>
                        <p className="text-xs text-slate-400 font-medium">Average Score: {res.average}</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase tracking-wider">{res.status}</span>
                  </div>
                ))}
              </div>
          </motion.div>
        );
      default:
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Attendance</p>
                  <h3 className="text-2xl font-black text-[#1e3a8a]">94%</h3>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Library Books</p>
                  <h3 className="text-2xl font-black text-[#1e3a8a]">2</h3>
                </div>
                <div className="bg-[#d4a855] p-6 rounded-3xl shadow-sm hidden md:block">
                  <p className="text-[#1e3a8a]/60 text-[10px] font-bold uppercase tracking-wider">House Points</p>
                  <h3 className="text-2xl font-black text-[#1e3a8a]">150</h3>
                </div>
              </div>
              <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-50 bg-white flex justify-between items-center">
                  <h3 className="font-bold text-[#1e3a8a]">Upcoming Assignments</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold">
                      <tr>
                        <th className="px-6 py-4">Subject</th>
                        <th className="px-6 py-4">Task</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {assignments.map((task, i) => (
                        <tr key={i} className="border-b border-slate-50">
                          <td className="px-6 py-4 font-bold text-[#1e3a8a]">{task.subject}</td>
                          <td className="px-6 py-4 text-slate-600">{task.task}</td>
                          <td className="px-6 py-4"><span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold">{task.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-[#1e3a8a] p-8 rounded-[2.5rem] text-white shadow-xl">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-[#d4a855]"><FileText size={24} /> Notices</h3>
                <p className="text-sm text-blue-200 mb-4 font-medium">Mock exams scheduled for next week. Clear your dues.</p>
                <button onClick={() => setActiveTab('results')} className="w-full py-3 bg-white/10 rounded-xl text-sm font-bold hover:bg-white/20 transition-all">View Results</button>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Sidebar - Desktop Only */}
      <aside className="w-64 bg-[#1e3a8a] text-white hidden md:flex flex-col p-6 shrink-0 border-r border-white/5">
        <div className="mb-10 px-2 flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
          <div className="w-8 h-8 bg-[#d4a855] rounded-lg flex items-center justify-center"><GraduationCap className="text-[#1e3a8a]" size={20}/></div>
          <h2 className="text-lg font-bold">Student<span className="text-[#d4a855]">Hub</span></h2>
        </div>
        
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-[#d4a855] text-[#1e3a8a] font-bold' : 'hover:bg-white/10 text-blue-100'}`}>
              {item.icon} {item.fullName}
            </button>
          ))}
        </nav>
        <button className="flex items-center gap-3 px-4 py-3 text-red-300 hover:text-red-100 mt-auto border-t border-white/10 pt-6">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-[100]">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex flex-col items-center gap-1 ${activeTab === item.id ? 'text-[#1e3a8a]' : 'text-slate-400'}`}>
            <div className={`p-2 rounded-xl ${activeTab === item.id ? 'bg-blue-50' : ''}`}>{item.icon}</div>
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 pb-24 md:pb-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 md:mb-10">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#1e3a8a]">Welcome, Okello</h1>
            <p className="text-slate-400 text-xs font-medium">S.4 Blue • Student Portal</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => { setShowNotifications(!showNotifications); setHasUnread(false); }}
              className="relative p-2.5 bg-white rounded-full shadow-sm border border-slate-100"
            >
              <Bell size={18} className="text-slate-600" />
              {hasUnread && <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>}
            </button>
            <button onClick={() => setActiveTab('profile')} className={`w-10 h-10 rounded-full bg-[#d4a855] flex items-center justify-center font-bold text-[#1e3a8a] border-2 ${activeTab === 'profile' ? 'border-[#1e3a8a]' : 'border-transparent'}`}>
              <User size={20}/>
            </button>
          </div>
        </header>

        <AnimatePresence>
          {showNotifications && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-20 right-4 md:right-10 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 z-50 p-4">
              <div className="flex justify-between mb-4"><span className="font-bold text-[#1e3a8a] text-sm">Updates</span><X size={16} className="cursor-pointer" onClick={() => setShowNotifications(false)}/></div>
              <p className="text-[11px] text-slate-500">General Assembly tomorrow at 8:00 AM.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {renderContent()}
      </main>
    </div>
  );
}