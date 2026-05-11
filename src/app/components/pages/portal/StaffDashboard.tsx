import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  ClipboardCheck, 
  PenTool, 
  Calendar, 
  LogOut, 
  Search,
  Check,
  X,
  Plus,
  BookOpen,
  ChevronRight
} from "lucide-react";

export default function StaffDashboard() {
  const [activeTab, setActiveTab] = useState("dash");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Lesson Planner State
  const [lessonNotes, setLessonNotes] = useState([
    { id: 1, topic: "Algebra Recap", class: "S.4 Blue", note: "Focus on quadratic factorization." }
  ]);
  const [newNote, setNewNote] = useState({ topic: "", class: "S.4 Blue", note: "" });

  // Student Data (with Attendance and Mark states)
  const [students, setStudents] = useState([
    { id: "001", name: "Abong Mary", class: "S.4 Blue", contact: "+256 770...", status: "Active", attendance: null, mark: "" },
    { id: "002", name: "Auma Scovia", class: "S.4 Blue", contact: "+256 782...", status: "Active", attendance: "present", mark: "" },
    { id: "003", name: "Okello John Bosco", class: "S.4 Blue", contact: "+256 701...", status: "Active", attendance: "present", mark: "" },
    { id: "004", name: "Ochen David", class: "S.4 Blue", contact: "+256 755...", status: "Suspended", attendance: "absent", mark: "" },
  ]);

  // Navigation Items for both Side and Bottom bars
  const navItems = [
    { id: 'dash', name: 'Schedule', icon: <Calendar size={20} /> },
    { id: 'attendance', name: 'Attendance', icon: <ClipboardCheck size={20} /> },
    { id: 'marks', name: 'Marks', fullName: 'Mark Entry', icon: <PenTool size={20} /> },
    { id: 'planner', name: 'Planner', fullName: 'Lesson Planner', icon: <BookOpen size={20} /> },
    { id: 'staff', name: 'Students', icon: <Users size={20} /> },
  ];

  // Filtering Logic
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.includes(searchTerm)
  );

  const weeklySchedule = [
    { time: "08:00 AM", Mon: "Math (S.4)", Tue: "Math (S.4)", Wed: "-", Thu: "Math (S.4)", Fri: "Math (S.4)" },
    { time: "10:30 AM", Mon: "-", Tue: "Physics (S.5)", Wed: "Math (S.4)", Thu: "Physics (S.5)", Fri: "-" },
    { time: "02:00 PM", Mon: "Additional Math", Tue: "-", Wed: "Additional Math", Thu: "-", Fri: "Staff Meeting" },
  ];

  const handleAttendance = (id: string, status: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, attendance: status } : s));
  };

  const handleMarkChange = (id: string, value: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, mark: value } : s));
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.topic || !newNote.note) return;
    setLessonNotes([{ ...newNote, id: Date.now() }, ...lessonNotes]);
    setNewNote({ topic: "", class: "S.4 Blue", note: "" });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dash":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Weekly Teaching Schedule</h2>
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[10px] uppercase tracking-widest font-bold">
                      <th className="px-6 py-5">Time Block</th>
                      <th className="px-6 py-5 border-l border-white/20 text-blue-400">Monday</th>
                      <th className="px-6 py-5">Tuesday</th>
                      <th className="px-6 py-5">Wednesday</th>
                      <th className="px-6 py-5">Thursday</th>
                      <th className="px-6 py-5">Friday</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {weeklySchedule.map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors">
                        <td className="px-6 py-6 font-black text-slate-400">{row.time}</td>
                        <td className="px-6 py-6 border-l border-slate-100 text-slate-700 font-bold bg-slate-50/30">{row.Mon}</td>
                        <td className="px-6 py-6 text-slate-600">{row.Tue}</td>
                        <td className="px-6 py-6 text-slate-600">{row.Wed}</td>
                        <td className="px-6 py-6 text-slate-600">{row.Thu}</td>
                        <td className="px-6 py-6 text-slate-600">{row.Fri}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 md:hidden italic font-bold text-center">Swipe table horizontally to see full week →</p>
          </motion.div>
        );

      case "attendance":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h2 className="text-xl font-bold text-slate-800">Attendance: S.4 Blue</h2>
              <p className="text-xs font-bold text-slate-400 hidden sm:block">{filteredStudents.length} Students</p>
            </div>
            <div className="grid gap-3">
              {filteredStudents.map((student) => (
                <div key={student.id} className="bg-white p-4 md:p-5 rounded-3xl flex items-center justify-between shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center font-bold text-slate-400 uppercase text-sm">{student.name[0]}</div>
                    <div>
                      <p className="font-bold text-slate-700 text-sm md:text-base leading-tight">{student.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">ID: {student.id}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleAttendance(student.id, 'present')}
                      className={`p-2.5 rounded-xl transition-all border ${student.attendance === 'present' ? 'bg-green-600 text-white border-green-600 shadow-lg' : 'bg-white text-slate-300 border-slate-100 hover:border-green-300'}`}
                    >
                      <Check size={18} strokeWidth={3}/>
                    </button>
                    <button 
                      onClick={() => handleAttendance(student.id, 'absent')}
                      className={`p-2.5 rounded-xl transition-all border ${student.attendance === 'absent' ? 'bg-red-600 text-white border-red-600 shadow-lg' : 'bg-white text-slate-300 border-slate-100 hover:border-red-300'}`}
                    >
                      <X size={18} strokeWidth={3}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "marks":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-slate-800">Exam Mark Entry</h2>
                <div className="flex gap-3 text-[10px] md:text-xs font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                  <span>S.4 Blue</span> • <span>Mathematics</span>
                </div>
              </div>
              <div className="space-y-4">
                {filteredStudents.map(s => (
                  <div key={s.id} className="flex flex-col xs:flex-row items-start xs:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all gap-3">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-700 text-sm">{s.name}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">{s.id}</span>
                    </div>
                    <div className="flex items-center gap-3 w-full xs:w-auto">
                      <input 
                        type="number" 
                        placeholder="Score" 
                        value={s.mark}
                        onChange={(e) => handleMarkChange(s.id, e.target.value)}
                        className="flex-1 xs:w-24 px-4 py-2 rounded-xl border-none bg-white text-sm shadow-inner focus:ring-2 focus:ring-blue-100 outline-none" 
                      />
                      <span className="text-xs text-slate-400 font-bold whitespace-nowrap">/ 100</span>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-4 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
                  Submit All Marks
                </button>
              </div>
            </div>
          </motion.div>
        );

      case "planner":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-100 h-fit">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><PenTool className="text-blue-600" size={20}/> New Plan</h2>
              <form onSubmit={handleAddNote} className="space-y-4">
                <input type="text" placeholder="Topic Title" className="w-full p-4 bg-slate-50 rounded-2xl border-none text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-blue-100" value={newNote.topic} onChange={(e) => setNewNote({...newNote, topic: e.target.value})} />
                <textarea placeholder="Instructional notes..." className="w-full p-4 bg-slate-50 rounded-2xl border-none text-sm h-32 outline-none focus:ring-2 focus:ring-blue-100" value={newNote.note} onChange={(e) => setNewNote({...newNote, note: e.target.value})} />
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all active:scale-95">
                  <Plus size={18}/> Save Note
                </button>
              </form>
            </div>
            <div className="space-y-4">
              {lessonNotes.map((note) => (
                <div key={note.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-2">{note.topic}</h4>
                  <p className="text-sm text-slate-500">{note.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "staff":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Student Directory</h2>
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold">
                    <tr>
                      <th className="px-6 py-4">Full Name</th>
                      <th className="px-6 py-4">Contact</th>
                      <th className="px-6 py-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {filteredStudents.map((s) => (
                      <tr key={s.id} className="border-b border-slate-50">
                        <td className="px-6 py-4 font-bold text-slate-700">{s.name}</td>
                        <td className="px-6 py-4 text-slate-400 font-mono text-xs">{s.contact}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${s.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{s.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        );

      default: return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Sidebar - Desktop Only */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col p-6 shrink-0 border-r border-white/5">
        <div className="mb-10 px-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-black">A</div>
          <h2 className="text-lg font-bold italic">Staff<span className="text-blue-400">Portal</span></h2>
        </div>
        
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveTab(item.id)} 
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-white/5'}`}
            >
              {item.icon} {item.fullName || item.name}
            </button>
          ))}
        </nav>
        
        <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 mt-auto border-t border-white/10 pt-6">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Bottom Nav - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-2 flex justify-between items-center z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => setActiveTab(item.id)} 
            className={`flex flex-col items-center gap-1 p-2 transition-all ${activeTab === item.id ? 'text-blue-600' : 'text-slate-400'}`}
          >
            <div className={`p-1.5 rounded-lg ${activeTab === item.id ? 'bg-blue-50' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-tighter">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-10 pb-24 md:pb-10">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 md:mb-10">
          <div className="w-full sm:w-auto flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <Search size={18} className="text-slate-400"/>
            <input 
              type="text" 
              placeholder="Filter students..." 
              className="bg-transparent border-none text-sm focus:ring-0 w-full sm:w-48 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-4 self-end sm:self-auto">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-800 uppercase tracking-tighter">Mr. Okot Samuel</p>
              <p className="text-[10px] text-blue-500 font-bold uppercase">Senior Staff</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-2xl flex items-center justify-center font-bold text-white border border-slate-700 shadow-lg">S</div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}