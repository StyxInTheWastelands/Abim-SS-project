import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Youtube } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-[#d4a855]" />,
      title: "Call Us",
      details: "+256 7XX XXX XXX",
      subText: "Mon-Fri 8:00am - 5:00pm"
    },
    {
      icon: <Mail className="text-[#d4a855]" />,
      title: "Email Us",
      details: "info@abimss.sch.ug",
      subText: "Online support 24/7"
    },
    {
      icon: <MapPin className="text-[#d4a855]" />,
      title: "Visit Us",
      details: "Abim Town Council",
      subText: "Abim District, Northern Uganda"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#1e3a8a] py-20 text-white relative">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Get in <span className="text-[#d4a855]">Touch</span></h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Have questions about admissions, academics, or school events? We are here to help.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Contact Information</h2>
              <p className="text-slate-500 mb-8">
                Reach out via any of these channels or visit our administrative block during working hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a]">{item.title}</h4>
                    <p className="text-[#1e3a8a] font-medium">{item.details}</p>
                    <p className="text-slate-400 text-xs mt-1">{item.subText}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-bold text-[#1e3a8a] mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center hover:bg-[#d4a855] transition-colors"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center hover:bg-[#d4a855] transition-colors"><Twitter size={20} /></a>
                <a href="https://www.youtube.com/watch?v=754cOw4ziLg" target="_blank" className="w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center hover:bg-[#d4a855] transition-colors"><Youtube size={20} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-50">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1e3a8a] ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4a855] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1e3a8a] ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4a855] transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-[#1e3a8a] ml-1">Subject</label>
                  <input type="text" placeholder="Inquiry about S1 Admissions" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4a855] transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-[#1e3a8a] ml-1">Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4a855] transition-all resize-none"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full md:w-auto bg-[#1e3a8a] text-white px-12 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#d4a855] transition-all shadow-lg shadow-blue-900/20">
                    Send Message <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Using a placeholder for Abim District area */}
      <section className="h-[400px] bg-slate-200 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.43543261623!2d33.6496468!3d2.7161049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1770e70404481069%3A0xc3f58e174092994a!2sAbim!5e0!3m2!1sen!2sug!4v1700000000000" 
          className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}