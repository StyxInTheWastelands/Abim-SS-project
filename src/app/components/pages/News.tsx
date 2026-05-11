import { motion } from "framer-motion";
import { TreeDeciduous, Trophy, Music, ExternalLink, Calendar, Heart, Bus, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      title: "Keep A Girl Child In School Outreach",
      date: "May 2026",
      category: "Empowerment",
      icon: <Heart className="text-red-500" />,
      image: "https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/72327587_2512219585711677_906658490854932480_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xH7diitmQkAQ7kNvwGewoOm&_nc_oc=Adpjd2kTtJrz9gNzN8QzRu2OTOueM2uBWNLh4J6_Lyhg3jIQ3b1kjkZoGCYtaCNXcqU&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=-1s3CXEJNTtklkF5EdEzDw&_nc_ss=7b289&oh=00_Af4dStSgsVQiI9QDp1zY2jjvakNwzvVx8BcIj0ovMWdlEQ&oe=6A202D36",
      description: "Over 250 students took an oath to honor #BooksBeforeBabies and #LetGirlsBeGirls. Facilitated by UNFPA Uganda and the Embassy of Sweden, this outreach empowers our girls through self-belief."
    },
    {
      title: "School Team Departs for Ball Games 2026",
      date: "April 2026",
      category: "Sports",
      icon: <Bus className="text-blue-500" />,
      image: "https://pbs.twimg.com/media/GLIqYa3XYAEyi-Q.jpg",
      description: "Wishing the best of luck to our school team as they depart for Moroto to represent Abim S.S in the post-primary ball games! Go Ethur!"
    },
    {
      title: "Green Revamping Club: Sustainable Farming",
      date: "March 2026",
      category: "Environment",
      icon: <TreeDeciduous className="text-green-500" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqlIwmNCPe6pSsdgjv8ta61ks1elP25HpOg&s",
      description: "Our partnership with Roofings Group continues to flourish. Students are now actively harvesting fruit from trees planted last season."
    },
    {
      title: "Scripture Union Creative Dance Handover",
      date: "February 2026",
      category: "Culture",
      icon: <Music className="text-purple-500" />,
      image: "https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/72225229_2512219439045025_8442051557964382208_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ZtgryJmj-uQQ7kNvwHQRW29&_nc_oc=AdpsMN0CsVn1PeNXZdkmVz3GgUXdsIxHj48mFR8JSUdd9moyBDJ6ktOUdmmoH450YcE&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=mxwegXMUpQbcNQrRolLVyQ&_nc_ss=7b289&oh=00_Af4CeveTk4H5bVrEm2awW0gmo8magkZRlr8UGHy6ijtU8w&oe=6A200CFE",
      description: "A celebration of faith and talent. The outgoing committee handed over leadership in a vibrant display of creative dance and worship.",
      link: "https://www.youtube.com/watch?v=754cOw4ziLg"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#1e3a8a] py-20 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <h1 className="text-4xl md:text-6xl font-black relative z-10">Campus <span className="text-[#d4a855]">Buzz</span></h1>
        <p className="text-blue-100 mt-4 relative z-10">Stay updated with the latest stories and events at Abim SS</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {newsItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row h-full"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="md:w-3/5 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <Calendar size={12} /> {item.date}
                  </span>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 leading-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-50">
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#d4a855] font-bold text-sm hover:underline"
                    >
                      Watch Coverage <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-[#1e3a8a] font-bold text-sm flex items-center gap-2">
                      Official Press Release <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar/Bottom Notice for Placeholders */}
        <div className="mt-16 bg-[#1e3a8a] rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Users className="text-[#d4a855]" size={32} />
             </div>
             <div>
                <h4 className="text-xl font-bold">Upcoming PTA Meeting</h4>
                <p className="text-blue-200 text-sm">Join us next month for the annual parents & teachers gathering.</p>
             </div>
          </div>
          <button className="bg-[#d4a855] hover:bg-white hover:text-[#1e3a8a] px-8 py-3 rounded-xl font-bold transition-all shrink-0">
            View Calendar
          </button>
        </div>
      </div>
    </div>
  );
}
