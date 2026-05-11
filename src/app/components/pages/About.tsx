import { motion } from "framer-motion";
import { BookOpen, Users, TreeDeciduous, Heart, ShieldCheck, Milestone, Trophy } from "lucide-react";
export default function About() {
  const highlights = [
    {
      icon: <Milestone className="w-6 h-6" />,
      title: "Our History",
      text: "A long-standing pillar of education in Abim District, providing quality government-aided learning for decades."
    },
    {
      icon: <TreeDeciduous className="w-6 h-6" />,
      title: "Environmental Stewardship",
      text: "Home to the Green Revamping Club, partnered with Roofings Group and Miss Tourism Karamoja to plant fruit trees."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Vibrant Culture",
      text: "From the energetic Scripture Union creative dances to national-level sports, our student life is second to none."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-[#1e3a8a] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            About <span className="text-[#d4a855]">Abim SS</span>
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto italic">
            "Strive for Excellence, Succeed in Life"
          </p>
        </div>
      </section>

      {/* Mission & Vision Row */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-12 rounded-[2rem] border border-slate-100">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4 flex items-center gap-3">
              <ShieldCheck className="text-[#d4a855]" /> Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To provide holistic, quality education that equips students with academic excellence, 
              moral integrity, and practical skills, preparing them to be responsible leaders 
              and citizens of Uganda.
            </p>
          </div>
          <div className="bg-[#1e3a8a] p-12 rounded-[2rem] text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <BookOpen className="text-[#d4a855]" /> Our Vision
            </h2>
            <p className="text-blue-100 leading-relaxed">
              To be a leading center of educational excellence in Northern Uganda, recognized 
              for nurturing talent, fostering innovation, and building sustainable communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Story & Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://nilepost.co.ug/nm-intranet-login/wp-content/uploads/2024/02/AbimSS.jpg" 
                alt="School Main Block" 
                className="rounded-[3rem] shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-[#1e3a8a]">A Community of Growth</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Located in the heart of Abim Town Council, our school is more than just classrooms. 
                It is a hub for community transformation. Through our <b>Green Revamping Club</b>, 
                we aren't just teaching biology—we are actively fighting climate change and 
                improving food security by planting fruit trees across our campus.
              </p>
              <div className="grid gap-6">
                {highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-[#d4a855] shrink-0 mt-1">{h.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#1e3a8a]">{h.title}</h4>
                      <p className="text-slate-500 text-sm">{h.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Life / Extra-Curricular */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">Life at Abim SS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Student Leadership Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/1.png" 
                  alt="Students" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#1e3a8a] text-xl">Student Leadership</h3>
                <p className="text-slate-500 text-sm mt-2">Nurturing discipline and responsibility through our student council.</p>
              </div>
            </div>

            {/* Creative Card (Scripture Union) */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/72225229_2512219439045025_8442051557964382208_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ZtgryJmj-uQQ7kNvwHQRW29&_nc_oc=AdpsMN0CsVn1PeNXZdkmVz3GgUXdsIxHj48mFR8JSUdd9moyBDJ6ktOUdmmoH450YcE&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=mxwegXMUpQbcNQrRolLVyQ&_nc_ss=7b289&oh=00_Af4CeveTk4H5bVrEm2awW0gmo8magkZRlr8UGHy6ijtU8w&oe=6A200CFE" 
                  alt="Scripture Union" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#1e3a8a] text-xl">Scripture Union</h3>
                <p className="text-slate-500 text-sm mt-2">Famous for our creative dance handovers and spiritual growth sessions.</p>
              </div>
            </div>

            {/* Sports Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://i0.wp.com/kawowo.com/wp-content/uploads/2025/05/Buddo-players-and-official-pray.jpg?fit=2248%2C1500&ssl=1" 
                  alt="Sports Excellence" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#1e3a8a] text-xl">Sports Excellence</h3>
                <p className="text-slate-500 text-sm mt-2">Competing fiercely in regional football, netball, and athletics.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}