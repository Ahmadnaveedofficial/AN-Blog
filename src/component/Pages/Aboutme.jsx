import React from "react";

export default function AboutMe() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      <div className="fixed top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-500/3 to-emerald-500/3 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 mt-16 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-slate-700/30 w-32 h-32 flex items-center justify-center mb-8 group hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">AN</span>
        </div>
        
        <h1 className="text-5xl font-extrabold sm:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-[1.1] pb-4">
          Ahmad Naveed
        </h1>
        
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
        
        <p className="mt-4 max-w-2xl text-xl text-slate-300 font-light leading-relaxed">
          Crafting exceptional digital experiences with modern design, clean
          code, and cutting-edge technology.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-6">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1 group"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Contact Me</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a1 1 0 001.42 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
          <a
            href="/cv.pdf"
            className="px-8 py-4 border-2 border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-slate-800/30 group"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Download CV</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-4-8V4" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
        </div>
        
        {/* About Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] group">
            <p className="text-slate-300 leading-relaxed text-lg text-center">
              I'm a frontend developer in progress, learning React.js, Node.js,
              and Tailwind CSS. I run <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">aurabags.pk </span>
              and explore digital marketing, SEO, and UI/UX design. Passionate
              about problem solving, from data structures to real-world apps.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Journey section */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02] hover:border-slate-600/50 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-white">2025 —</span>
                  <span className="text-slate-300 ml-2">Founder at aurabags.pk</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-white">2024–2025 —</span>
                  <span className="text-slate-300 ml-2">React & Node.js Learner</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-white">Certification —</span>
                  <span className="text-slate-300 ml-2">Certified in Web Development</span>
                </div>
              </li>
               <li className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-white">Academics —</span>
                  <span className="text-slate-300 ml-2">Computing & Applied Physics</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Skills section */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02] hover:border-slate-600/50 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['React', 'Node.js', 'Tailwind', 'Redux', 'APIs', 'C++ (OOP)', 'Data Structures', 'Digital Marketing'].map((skill, index) => (
                <div key={skill} className="flex items-center space-x-2 py-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <span className="text-slate-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-[1.1] pb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
              Here are some of my recent projects showcasing modern web development and design.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group hover:scale-105 transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${i * 150}ms`
                }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-xl hover:border-slate-600/50 transition-all duration-500 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl mb-6 flex items-center justify-center group-hover:from-slate-700 group-hover:to-slate-600 transition-all duration-300 overflow-hidden">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      Project #{i}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      Short description about what you built and tech stack used in this amazing project.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">React</span>
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">Node.js</span>
                      <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">Tailwind</span>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 text-sm">
                        Live Demo
                      </button>
                      <button className="flex-1 px-4 py-2 border border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-slate-800/30 text-sm">
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center shadow-2xl">
            <div className="mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-[1.1] pb-2">
                Let's Connect
              </h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                Open for collaborations, freelance work, and exciting opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:Ahmad@aurabags.pk"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1 group/btn"
              >
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a1 1 0 001.42 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Me</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a
                href="https://github.com/Ahmadnaveedofficial"
                className="px-8 py-4 border-2 border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-slate-800/30 group/btn2"
              >
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/ahmad-naveed-7b539521a/"
                className="px-8 py-4 border-2 border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-slate-800/30 group/btn3"
              >
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}