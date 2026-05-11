import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Search, 
  Download, 
  FileText, 
  Video, 
  FileCode, 
  Filter,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DigitalLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const resources = [
    { id: 1, title: "Pure Mathematics - Calculus", category: "Mathematics", type: "PDF", size: "4.2 MB", date: "2026", color: "bg-blue-500" },
    { id: 2, title: "Modern Physics for S.4", category: "Science", type: "Video", size: "128 MB", date: "2025", color: "bg-purple-500" },
    { id: 3, title: "African History: Pre-Colonial", category: "Humanities", type: "PDF", size: "2.1 MB", date: "2026", color: "bg-orange-500" },
    { id: 4, title: "English Literature - Macbeth", category: "Languages", type: "EPUB", size: "1.5 MB", date: "2024", color: "bg-pink-500" },
    { id: 5, title: "Organic Chemistry Revision", category: "Science", type: "Past Paper", size: "800 KB", date: "2026", color: "bg-green-500" },
    { id: 6, title: "Additional Math 2025 Exam", category: "Mathematics", type: "Past Paper", size: "1.2 MB", date: "2025", color: "bg-blue-600" },
  ];

  const categories = ["All", "Mathematics", "Science", "Humanities", "Languages"];

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || res.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white pt-16 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/portal/student" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold">
            <ArrowLeft size={16}/> Back to Portal
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="text-4xl font-black italic mb-2">Digital<span className="text-blue-400 text-not-italic">Library</span></h1>
              <p className="text-slate-400 font-medium">Access over 500+ academic resources anytime, anywhere.</p>
            </div>
            <div className="w-full md:w-96 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20}/>
              <input 
                type="text" 
                placeholder="Search for books, papers, or topics..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 -mt-16">
        {/* Category Filter */}
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all shadow-sm ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredResources.map((res) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={res.id}
                className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${res.color} text-white shadow-lg`}>
                    {res.type === 'Video' ? <Video size={24}/> : <FileText size={24}/>}
                  </div>
                  <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                    {res.date}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-1">{res.category}</p>
                  <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {res.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{res.type}</span>
                    <span className="text-xs font-black text-slate-700">{res.size}</span>
                  </div>
                  <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors">
                    Download <Download size={14}/>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-slate-300"/>
            </div>
            <h3 className="text-xl font-bold text-slate-800">No resources found</h3>
            <p className="text-slate-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}