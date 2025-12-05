
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { DATA_EN, DATA_CN, UI_LABELS } from './constants';
import { InfiniteSeaWindow } from './components/InfiniteSeaWindow';
import { Mail, MapPin, Phone, GraduationCap, Download, ExternalLink, Calendar, Briefcase, Code, Award, Camera, Gamepad, Zap, Bird, ChevronRight, ChevronLeft } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'cn'>('en');
  const [photoIndex, setPhotoIndex] = useState(0);

  const DATA = lang === 'en' ? DATA_EN : DATA_CN;
  const LABELS = UI_LABELS[lang];

  // Logic to cycle photos
  const handlePhotoClick = () => {
    setPhotoIndex((prev) => (prev + 1) % DATA.profile.gallery.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-geek-100 selection:text-geek-900">
      <Header lang={lang} setLang={setLang} labels={LABELS} />

      {/* Hero Section */}
      <section id="about" className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Background Animation Layer */}
        <div className="absolute inset-0 z-0">
          <InfiniteSeaWindow />
          {/* Gradient Overlays for Text Readability */}
          {/* Left-heavy gradient to solid white for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent/20 md:to-transparent"></div>
          {/* Bottom fade for seamless transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 md:pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            
            {/* Left Column: Text */}
            <div className="max-w-2xl space-y-8 flex-1 order-2 md:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-white/50 backdrop-blur border border-geek-200 text-geek-700 font-mono text-xs shadow-sm">
                {LABELS.hero.open}
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-none">
                {LABELS.hero.hi} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-geek-600 to-geek-400">
                  {DATA.profile.name}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-slate-600 font-light flex items-center gap-3">
                <span className="w-8 h-px bg-slate-400"></span>
                {DATA.profile.title}
              </h2>
              
              <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-medium max-w-lg">
                {DATA.profile.about}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-geek-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  <Mail size={18} />
                  <span>{LABELS.hero.contact}</span>
                </a>
                <button className="flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur border border-slate-200 text-slate-700 rounded-lg hover:border-geek-500 hover:text-geek-600 transition-all">
                  <Download size={18} />
                  <span>{LABELS.hero.download}</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-500 pt-8 font-mono border-t border-slate-200/50 w-max">
                 <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-geek-500"/>
                    {DATA.profile.contact.location}
                 </div>
                 <div className="flex items-center gap-2">
                    <Phone size={14} className="text-geek-500"/>
                    {DATA.profile.contact.phone}
                 </div>
              </div>
            </div>

            {/* Right Column: Interactive Image Gallery */}
            <div className="relative order-1 md:order-2 flex-shrink-0">
              <div 
                className="w-64 h-72 md:w-80 md:h-[28rem] relative group cursor-pointer perspective-1000"
                onClick={handlePhotoClick}
              >
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-geek-200 to-transparent rounded-[2rem] opacity-30 group-hover:opacity-50 transition-opacity duration-500 rotate-6 group-hover:rotate-12"></div>
                <div className="absolute -inset-4 bg-gradient-to-bl from-geek-100 to-transparent rounded-[2rem] opacity-30 group-hover:opacity-50 transition-opacity duration-500 -rotate-3 group-hover:-rotate-6"></div>
                
                {/* Main Frame */}
                <div className="absolute inset-0 bg-slate-200 rounded-2xl shadow-[12px_12px_0px_0px_rgba(15,23,42,0.1)] group-hover:shadow-[16px_16px_0px_0px_rgba(14,165,233,0.2)] transition-all duration-300 border-2 border-white overflow-hidden select-none">
                  
                  {/* Images - mapped for fade transition */}
                  {DATA.profile.gallery.map((src, index) => (
                    <img 
                      key={index}
                      src={src} 
                      alt={`${DATA.profile.name} - Photo ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out ${index === photoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      onError={(e) => {
                         // Fallback logic
                         if (index === 0) {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.style.backgroundColor = '#e2e8f0'; 
                            e.currentTarget.parentElement!.innerHTML += '<div class="flex items-center justify-center h-full text-slate-400 font-mono text-xs text-center p-4">Add images in constants.ts<br/>and public folder</div>';
                         }
                      }}
                    />
                  ))}

                  {/* Tech Overlay lines */}
                  <div className="absolute inset-0 border-[6px] border-white/0 group-hover:border-white/20 transition-all rounded-2xl pointer-events-none z-20"></div>

                  {/* Click Hint Overlay (Subtle) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                     <div className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-white/80 text-xs font-mono uppercase tracking-widest scale-90 group-hover:scale-100 transition-transform">
                       Click to Browse
                     </div>
                  </div>

                  {/* Pagination Dots */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                     {DATA.profile.gallery.map((_, idx) => (
                       <div 
                         key={idx} 
                         className={`h-1.5 rounded-full transition-all duration-300 shadow-sm backdrop-blur-sm ${idx === photoIndex ? 'w-6 bg-geek-500' : 'w-1.5 bg-white/60'}`}
                       />
                     ))}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce-slow">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-xs font-bold text-slate-700">Open to Work</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" title={LABELS.experience.title} subtitle={LABELS.experience.subtitle}>
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-4 bottom-4 w-px bg-slate-200 md:block hidden"></div>

          {DATA.experience.map((job, index) => (
            <div key={job.id} className="relative pl-0 md:pl-20 group">
              {/* Timeline Dot */}
              <div className="absolute left-8 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-geek-500 -translate-x-1.5 md:block hidden group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 group-hover:text-geek-600 transition-colors">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-geek-600 bg-geek-50 px-3 py-1 rounded-full border border-geek-100">
                  {job.period}
                </span>
              </div>
              
              <div className="text-slate-500 font-medium mb-4 flex items-center gap-2 text-sm">
                <Briefcase size={14} />
                {job.company}
              </div>

              <ul className="space-y-3">
                {job.description.map((point, i) => (
                  <li key={i} className="text-slate-600 leading-relaxed flex items-start gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education & Research Grid */}
      <div className="bg-white py-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-geek-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        <Section id="research" title={LABELS.education.title} subtitle={LABELS.education.subtitle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            
            {/* Education Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                 <GraduationCap className="text-geek-600" size={24} />
                 <h3 className="text-lg font-bold uppercase tracking-wider text-slate-400">{LABELS.education.eduTitle}</h3>
              </div>
              
              {DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 hover:border-geek-200 transition-all hover:shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-900 text-lg">{edu.school}</h4>
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded border border-slate-100">{edu.period}</span>
                  </div>
                  <div className="text-geek-600 font-medium mb-4">{edu.degree}</div>
                  <div className="text-sm text-slate-600 mb-4 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    GPA: {edu.gpa}
                  </div>
                  
                  <div className="space-y-4">
                    {edu.details.map((detail, i) => (
                      <p key={i} className="text-sm text-slate-600 italic border-l-2 border-geek-200 pl-4 py-1">
                        {detail}
                      </p>
                    ))}
                    <div className="pt-2">
                       <p className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-1">
                        <Award size={12}/> {LABELS.education.honors}
                       </p>
                       <ul className="space-y-2">
                        {edu.honors.map((honor, h) => (
                          <li key={h} className="text-sm text-slate-700 flex items-start gap-2">
                             <span className="text-geek-400 mt-1">✦</span>
                            {honor}
                          </li>
                        ))}
                       </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Research Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                 <Code className="text-geek-600" size={24} />
                 <h3 className="text-lg font-bold uppercase tracking-wider text-slate-400">{LABELS.education.pubTitle}</h3>
              </div>

              {DATA.research.map((res) => (
                <a 
                  key={res.id} 
                  href={res.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="text-geek-500" size={20} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white tracking-wide ${res.type === 'ACM' ? 'bg-blue-500' : 'bg-indigo-500'}`}>
                      {res.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-xl text-slate-800 group-hover:text-geek-600 transition-colors mb-3 leading-snug">
                    {res.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-slate-400 font-mono mt-6">
                    <Calendar size={14} />
                    <span>{LABELS.education.published}: {res.year}</span>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </Section>
      </div>

      {/* Skills Section */}
      <Section id="skills" title={LABELS.skills.title} subtitle={LABELS.skills.subtitle}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DATA.skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-6 text-slate-800 border-b border-slate-100 pb-4 flex items-center justify-between">
                {skillGroup.category}
                <span className="text-xs font-mono text-slate-300 bg-slate-50 px-2 py-1 rounded">{skillGroup.items.length} {LABELS.skills.count}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-geek-400 hover:text-geek-700 hover:bg-geek-50 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Info Grid: Languages & Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Languages */}
           <div className="p-8 bg-gradient-to-br from-geek-50 to-white rounded-3xl border border-geek-100">
              <span className="font-bold text-geek-900 block mb-6 flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-geek-500 rounded-full animate-pulse"></span>
                {LABELS.skills.languages}
              </span>
              <div className="grid gap-3">
                 {DATA.profile.languages.map((lang, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-white/60 rounded-lg border border-geek-100/50">
                     <span className="text-slate-700 font-medium">{lang.split('(')[0]}</span>
                     <span className="text-xs font-mono text-geek-600 bg-geek-100 px-2 py-1 rounded">
                       {lang.includes('(') ? lang.split('(')[1].replace(')', '') : 'Fluent'}
                     </span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Hobbies */}
           <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block mb-6 flex items-center gap-2 text-lg">
                 <Zap className="text-yellow-500" size={20} />
                 {LABELS.skills.hobbies}
              </span>
              <div className="flex flex-wrap gap-3">
                 {DATA.profile.hobbies.map((hobby, i) => (
                   <div key={i} className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-600 hover:bg-white hover:shadow hover:border-geek-200 transition-all cursor-default">
                     {hobby.includes('Photo') || hobby.includes('摄影') ? <Camera size={16} className="text-geek-500" /> : null}
                     {hobby.includes('Bird') || hobby.includes('观鸟') ? <Bird size={16} className="text-green-500" /> : null}
                     {hobby.includes('Game') || hobby.includes('游戏') ? <Gamepad size={16} className="text-purple-500" /> : null}
                     {hobby.includes('Digital') || hobby.includes('数码') ? <Code size={16} className="text-blue-500" /> : null}
                     <span className="font-medium">{hobby}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </Section>

      {/* NEW Contact Section */}
      <Section id="contact" title={LABELS.contact.title} subtitle={LABELS.contact.subtitle}>
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-geek-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="space-y-6 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {LABELS.contact.heading}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                {LABELS.contact.text}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                <a 
                  href={`mailto:${DATA.profile.contact.email}`} 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-geek-500 text-white rounded-xl font-bold hover:bg-geek-400 transition-all shadow-lg hover:shadow-geek-500/25 transform hover:-translate-y-1"
                >
                  <Mail size={20} />
                  {LABELS.contact.email}
                </a>
                <button 
                  onClick={() => window.open(`tel:${DATA.profile.contact.phone}`)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
                >
                  <Phone size={20} />
                  {LABELS.contact.call}
                </button>
              </div>
            </div>

            {/* Contact Card Visual */}
            <div className="w-full md:w-auto min-w-[320px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
               <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 bg-geek-500 rounded-full flex items-center justify-center text-white font-bold text-xl relative overflow-hidden">
                    {/* Tiny avatar in contact card if needed, else initials */}
                    {DATA.profile.avatar ? <img src={DATA.profile.avatar} className="w-full h-full object-cover" /> : "ZW"}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">{DATA.profile.name}</div>
                    <div className="text-geek-400 text-sm">{DATA.profile.title.split('&')[0]}</div>
                  </div>
               </div>
               <div className="space-y-4">
                 <a href={`mailto:${DATA.profile.contact.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-geek-500 transition-colors">
                      <Mail size={16} />
                    </div>
                    <span className="text-sm">{DATA.profile.contact.email}</span>
                 </a>
                 <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                      <Phone size={16} />
                    </div>
                    <span className="text-sm">{DATA.profile.contact.phone}</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                      <MapPin size={16} />
                    </div>
                    <span className="text-sm">{DATA.profile.contact.location}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Simplified Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-mono">
           <div>© {new Date().getFullYear()} {LABELS.footer.copyright}</div>
           <div className="flex gap-8">
              <a href="#" className="hover:text-geek-600 transition-colors">Github</a>
              <a href="#" className="hover:text-geek-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-geek-600 transition-colors">Twitter</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;