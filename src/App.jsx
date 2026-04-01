import React from 'react';const App = () =>(
  <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100">
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-24">
      
      {/* Header Profile Section */}
      <header className="mb-16 border-b border-zinc-100 pb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-zinc-200">
          <img src="/pfp.jpg" alt="The Acid" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-zinc-900">The Acid</h1>
          <p className="text-zinc-500 font-medium mb-4">Marketer, Project Manager & Community Manager</p>
          <p className="text-zinc-600 leading-relaxed">
            I specialize in building and nurturing communities, managing projects with precision, and driving growth through strategic marketing. With experience across multiple Web3 and crypto projects, I bring expertise in community engagement, project coordination, and brand development.
            <br/><br/>
            My role spans project management, community moderation, and marketing strategy—ensuring every project runs smoothly while fostering engaged and loyal communities. I'm passionate about connecting people, building trust, and creating memorable experiences.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">About</h2>
        <h3 className="text-2xl font-bold mb-4 text-zinc-900">The Acid</h3>
        <div className="text-zinc-600 leading-relaxed space-y-4">
          <p>
            I'm a dedicated marketer, project manager, and community builder with a passion for creating thriving digital communities and managing complex projects. My expertise spans across multiple Web3 and crypto projects, where I've successfully balanced strategic marketing, project coordination, and community engagement.
          </p>
          <p>My core strengths lie in:</p>
          <ul className="space-y-3">
            <li className="flex gap-2"><span className="text-zinc-400">▸</span> <span><strong>Community Building:</strong> Creating engaging spaces where members feel valued and connected, from launch through growth phases.</span></li>
            <li className="flex gap-2"><span className="text-zinc-400">▸</span> <span><strong>Project Management:</strong> Coordinating teams, timelines, and deliverables to ensure projects launch and scale successfully.</span></li>
            <li className="flex gap-2"><span className="text-zinc-400">▸</span> <span><strong>Strategic Marketing:</strong> Developing and executing marketing strategies that resonate with target audiences and drive growth.</span></li>
            <li className="flex gap-2"><span className="text-zinc-400">▸</span> <span><strong>Community Moderation:</strong> Maintaining healthy, productive communities through thoughtful moderation and conflict resolution.</span></li>
          </ul>
          <p>
            I believe that successful projects are built on strong communities and clear communication. Whether I'm managing project timelines, moderating discussions, or crafting marketing campaigns, my goal is to create value and foster meaningful connections. I take pride in being detail-oriented, responsive, and genuinely invested in the success of every project I work with.
          </p>
          <p>            When I'm not working with teams and communities, I'm constantly learning about emerging trends in Web3, staying updated on market dynamics, and exploring new ways to innovate in community engagement and project management.
          </p>
        </div>
      </section>

      {/* Key Expertise Grid */}
      <section className="mb-16">
        <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Key Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Community Development", desc: "Community engagement, member retention, growth strategies" },
            { title: "Project Coordination", desc: "Timeline management, team coordination, deliverables" },
            { title: "Marketing Strategy", desc: "Go-to-market strategy, campaign execution, brand development" },
            { title: "Moderation & Governance", desc: "Community standards, conflict resolution, policy development" }
          ].map((skill, i) => (
            <div key={i} className="p-5 border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors">
              <h4 className="font-bold text-zinc-900 mb-1">{skill.title}</h4>
              <p className="text-sm text-zinc-500">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Experience</h2>
        <p className="text-zinc-600 mb-8">Showcasing my expertise across multiple roles and projects in community management, project coordination, and marketing strategy.</p>
        
        <div className="space-y-12">
          
          {/* Project Manager Block */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Project Manager & Marketer</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "ChronyxBot", role: "Project Manager & Marketer", tags: ["Project Management", "Marketing", "Strategy"], desc: "Led project management and marketing initiatives, coordinating team efforts and developing go-to-market strategies." },
                { name: "FEENTIME bet", role: "Project Manager & Marketer", tags: ["Project Management", "Marketing", "User Growth"], desc: "Managed project coordination and executed marketing campaigns to drive user adoption and engagement." }
              ].map((job, i) => (
                <div key={i} className="p-5 border border-zinc-200 rounded-lg">
                  <h4 className="font-bold text-zinc-900">{job.name}</h4>
                  <p className="text-xs text-zinc-500 mb-3">{job.role}</p>
                  <p className="text-sm text-zinc-600 mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(t => <span key={t} className="px-2 py-1 bg-zinc-100 text-xs text-zinc-600 rounded">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Manager Block */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Community Manager</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "DuelDuck", role: "Community Manager", tags: ["Community Management", "Engagement", "Content"], desc: "Built and maintained an active, engaged community. Created content, moderated discussions, and fostered user interaction." },
                { name: "FX NEXUS", role: "Community Manager", tags: ["Community Management", "Growth", "Culture"], desc: "Managed community growth and engagement strategies. Facilitated discussions and maintained positive community culture." },
                { name: "Voidbet", role: "Community Manager", tags: ["Community Management", "Events", "Relations"], desc: "Developed community initiatives and managed user relations. Coordinated events and promoted community participation." },
                { name: "INFECT3D", role: "Community Manager", tags].map((job, i) => (
                <div key={i} className="p-5 border border-zinc-200 rounded-lg">
                  <h4 className="font-bold text-zinc-900">{job.name}</h4>
                  <p className="text-xs text-zinc-500 mb-3">{job.role}</p>
                  <p className="text-sm text-zinc-600 mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(t => <span key={t} className="px-2 py-1 bg-zinc-100 text-xs text-zinc-600 rounded">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Moderator Block */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Community Moderator</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "PAI3", role: "Community Moderator", tags: ["Moderation", "Community Health", "Guidelines"], desc: "Moderated community discussions and enforced community guidelines. Ensured healthy and constructive interactions." },
                { name: "Tauntcoin", role: "Community Moderator", tags: ["Moderation", "Community", "Standards"], desc: "Managed community channels and member interactions. Maintained forum rules and community standards." },
                { name: "Battleworld", role: "Community Moderator", tags: ["Moderation", "Resolution", "Engagement"], desc: "Oversaw community moderation and dispute resolution. Promoted positive community engagement and participation." },
                { name: "Masked-INJ", role: "Community Moderator", tags: ["Moderation", "Support", "Integrity"], desc: "Led moderation efforts and community support. Handled member concerns and maintained community integrity." },
                { name: "Memescope", role: "Community Moderator", tags: ["Moderation", "Content", "Culture"], desc: "Managed content moderation and community culture. Ensured community guidelines compliance and positive interactions." },
                { name: "Official Bullrun", role: "Community Moderator", tags: ["Moderation", "Coordination", "Standards"], desc: "Supervised community discussions and member engagement. Coordinated community activities and maintained standards." }
              ].map((job, i) => (
                <div key={i} className="p-5 border border-zinc-200 rounded-lg">
                  <h4 className="font-bold text-zinc-900">{job.name}</h4>
                  <p className="text-xs text-zinc-500 mb-3">{job.role}</p>
                  <p className="text-sm text-zinc-600 mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(t => <span key={t} className="px-2 py-1 bg-zinc-100 text-xs text-zinc-600 rounded">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer Contact */}
      <footer className="pt-12 border-t border-zinc-200">
        <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Contact</h2>
        <h3 className="text-2xl font-bold mb-4 text-zinc-900">Let's Connect</h3>
        <p className="text-zinc-600 mb-8">I'm always interested in new opportunities, collaborations, and conversations. Feel free to reach out!</p>
        
        <div className="flex flex-wrap gap-4 mb-16">
          <a href="https://twitter.com/theacidxyz" target="_blank" rel="noreferrer" className="px-6 py-2 bg-zinc-900 text-white rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors">Twitter (X)</a>
          <a href="mailto:theacid@gmail.com" className="px-6 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors">Email</a>
        </div>
        
        <p className="text-zinc-400 text-sm">© 2026 The Acid. All rights reserved.</p>
      </footer>
      
    </div>
  </div>
);

export default App;
