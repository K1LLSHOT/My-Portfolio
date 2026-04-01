import React from 'react';
import { Briefcase, Code2, Users, Megaphone, ShieldCheck } from 'lucide-react';

const App = () => (
  <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-rose-200">
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      
      {/* Header Profile Section */}
      <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-20 border-b border-stone-200 pb-12">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-stone-900 shadow-xl flex-shrink-0">
          <img src="/pfp.jpg" alt="The Acid" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">The Acid</h1>
          <h2 className="text-xl md:text-2xl text-stone-600 font-medium mb-6">Marketer, Project Manager & Community Manager</h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
            I specialize in building and nurturing communities, managing projects with precision, and driving growth through strategic marketing. With experience across multiple Web3 and crypto projects, I bring expertise in community engagement, project coordination, and brand development.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-24">
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3"><Users className="text-rose-600"/> About</h3>
        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed text-lg">
          <p className="mb-4">
            I'm a dedicated marketer, project manager, and community builder with a passion for creating thriving digital communities and managing complex projects. My expertise spans across multiple Web3 and crypto projects, where I've successfully balanced strategic marketing, project coordination, and community engagement.
          </p>
          <p className="font-bold text-stone-900 mb-2">My core strengths lie in:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Community Building:</strong> Creating engaging spaces where members feel valued and connected, from launch through growth phases.</li>
            <li><strong>Project Management:</strong> Coordinating teams, timelines, and deliverables to ensure projects launch and scale successfully.</li>
            <li><strong>Strategic Marketing:</strong> Developing and executing marketing strategies that resonate with target audiences and drive growth.</li>
            <li><strong>Community Moderation:</strong> Maintaining healthy, productive communities through thoughtful moderation and conflict resolution.</li>
          </ul>
          <p>
            I believe that successful projects are built on strong communities and clear communication. Whether I'm managing project timelines, moderating discussions, or crafting marketing campaigns, my goal is to create value and foster meaningful connections.
          </p>
        </div>
      </section>

      {/* Key Expertise Grid */}
      <section className="mb-24">
        <h3 className="text-3xl font-bold mb-8 flex items-center gap-3"><Code2 className="text-rose-600"/> Key Expertise</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Community Development", desc: "Community engagement, member retention, growth strategies" },
            { title: "Project Coordination", desc: "Timeline management, team coordination, deliverables" },
            { title: "Marketing Strategy", desc: "Go-to-market strategy, campaign execution, brand development" },
            { title: "Moderation & Governance", desc: "Community standards, conflict resolution, policy development" }
          ].map((skill, i) => (
            <div key={i} className="p-6 bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-stone-900 mb-2">{skill.title}</h4>
              <p className="text-stone-500">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-24">
        <h3 className="text-3xl font-bold mb-8 flex items-center gap-3"><Briefcase className="text-rose-600"/> Experience</h3>
        <p className="text-stone-600 mb-10 text-lg">Showcasing my expertise across multiple roles and projects in community management, project coordination, and marketing strategy.</p>
        
        <div className="space-y-12">
          
          {/* Project Manager Block */}
          <div>
            <h4 className="text-2xl font-black text-stone-400 uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">Project Manager & Marketer</h4>
            <div className="grid gap-6">
              {[
                { name: "ChronyxBot", tags: ["Project Management", "Marketing", "Strategy"], desc: "Led project management and marketing initiatives, coordinating team efforts and developing go-to-market strategies." },
                { name: "FEENTIME bet", tags: ["Project Management", "Marketing", "User Growth"], desc: "Managed project coordination and executed marketing campaigns to drive user adoption and engagement." }
              ].map((job, i) => (
                <div key={i} className="p-6 bg-white border-l-4 border-rose-600 rounded-r-xl shadow-sm">
                  <h5 className="text-xl font-bold text-stone-900">{job.name}</h5>
                  <p className="text-stone-600 mt-2 mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(t => <span key={t} className="px-3 py-1 bg-stone-100 text-xs font-bold text-stone-500 rounded-full">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Manager Block */}
          <div>
            <h4 className="text-2xl font-black text-stone-400 uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">Community Manager</h4>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { name: "DuelDuck", tags: ["Community Management", "Engagement", "Content"], desc: "Built and maintained an active, engaged community. Created content, moderated discussions, and fostered user interaction." },
                { name: "FX NEXUS", tags: ["Community Management", "Growth", "Culture"], desc: "Managed community growth and engagement strategies. Facilitated discussions and maintained positive community culture." },
                { name: "Voidbet", tags: ["Community Management", "Events", "Relations"], desc: "Developed community initiatives and managed user relations. Coordinated events and promoted community participation." },
                { name: "INFECT3D", tags: ["Community Management", "Operations", "Moderation"], desc: "Oversaw community operations and member engagement. Implemented community programs and moderation policies." }
              ].map((job, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-xl shadow-sm">
                  <h5 className="text-xl font-bold text-stone-900">{job.name}</h5>
                  <p className="text-stone-600 text-sm mt-2 mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(t => <span key={t} className="px-2 py-1 bg-stone-100 text-[10px] font-bold text-stone-500 rounded-full">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Moderator Block */}
          <div>
            <h4 className="text-2xl font-black text-stone-400 uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">Community Moderator</h4>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { name: "PAI3", tags: ["Moderation", "Community Health", "Guidelines"], desc: "Moderated community discussions and enforced community guidelines. Ensured healthy and constructive interactions." },
                { name: "Tauntcoin", tags: ["Moderation", "Community", "Standards"], desc: "Managed community channels and member interactions. Maintained forum rules and community standards." },
                { name: "Battleworld", tags: ["Moderation", "Resolution", "Engagement"], desc: "Oversaw community moderation and dispute resolution. Promoted positive community engagement and participation." },
                { name: "Masked-INJ", tags: ["Moderation", "Support", "Integrity"], desc: "Led moderation efforts and community support. Handled member concerns and maintained community integrity." },
                { name: "Memescope", tags: ["Moderation", "Content", "Culture"], desc: "Managed content moderation and community culture. Ensured community guidelines compliance and positive interactions." },
                { name: "Official Bullrun", tags: ["Moderation", "Coordination", "Standards"], desc: "Supervised community discussions and member engagement. Coordinated community activities and maintained standards." }
              ].map((job, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-xl shadow-sm">
                  <h5 className="text-xl font-bold text-stone-900">{job.name}</h5>
                  <p className="text-stone-600 text-sm mt-2 mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(t => <span key={t} className="px-2 py-1 bg-stone-100 text-[10px] font-bold text-stone-500 rounded-full">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer Contact */}
      <footer className="mt-24 pt-12 border-t-2 border-stone-900 text-center">
        <h3 className="text-4xl font-black mb-6">Let's Connect</h3>
        <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">I'm always interested in new opportunities, collaborations, and conversations. Feel free to reach out!</p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://twitter.com/theacidxyz" target="_blank" rel="noreferrer" className="px-8 py-3 bg-stone-900 text-white rounded-full font-bold hover:bg-rose-600 transition-colors shadow-lg">Twitter (X)</a>
          <a href="mailto:theacid@gmail.com" className="px-8 py-3 bg-white border-2 border-stone-900 text-stone-900 rounded-full font-bold hover:bg-stone-100 transition-colors shadow-lg">Email Me</a>
        </div>
        <p className="text-stone-400 text-sm font-medium">© 2026 The Acid. All rights reserved.</p>
      </footer>
      
    </div>
  </div>
);

export default App;
