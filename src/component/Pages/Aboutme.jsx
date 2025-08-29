import React from "react";

export default function AboutMe() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900">
        <div className="rounded-full bg-indigo-600/20 w-28 h-28 flex items-center justify-center mb-6">
          <span className="text-3xl font-bold">AN</span>
        </div>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Ahmad Naveed</h1>
        <p className="mt-4 max-w-xl text-gray-300">
          Crafting exceptional digital experiences with modern design, clean
          code, and cutting-edge technology.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-6 py-2.5 text-white hover:bg-indigo-500 transition"
          >
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            className="rounded-lg border border-indigo-400 px-6 py-2.5 text-indigo-300 hover:bg-indigo-800 transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m a frontend developer in progress, learning React.js, Node.js,
            and Tailwind CSS. I run <span className="font-semibold">aurabags.pk</span>
            and explore digital marketing, SEO, and UI/UX design. Passionate
            about problem solving, from data structures to real-world apps.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-gray-800 rounded-xl p-5 shadow">
            <h3 className="font-semibold text-lg">Skills</h3>
            <p className="mt-2 text-sm text-gray-400">
              React, Node.js, Tailwind, Redux, APIs, C++ (OOP), Data Structures,
              Dijkstra’s Algorithm, Digital Marketing.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 shadow">
            <h3 className="font-semibold text-lg">Journey</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>2025 — Founder at aurabags.pk</li>
              <li>2024–2025 — React & Node.js Learner</li>
              <li>Academics — Computing & Applied Physics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl bg-gray-900 p-5 shadow hover:shadow-lg transition"
              >
                <div className="aspect-video bg-gray-700 rounded-lg" />
                <h3 className="mt-3 font-semibold">Project #{i}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Short description about what you built and tech stack.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl bg-indigo-700 p-8 text-center">
          <h2 className="text-2xl font-bold">Let’s Connect</h2>
          <p className="mt-2 text-indigo-100">
            Open for collaborations, freelance work, and opportunities.
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <a
              href="mailto:Ahmad@aurabags.pk"
              className="bg-white text-indigo-700 rounded-lg px-6 py-2.5 shadow hover:shadow-md"
            >
              Email Me
            </a>
            <a
              href="https://github.com/Ahmadnaveedofficial"
              className="rounded-lg border border-white px-6 py-2.5 text-white hover:bg-indigo-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-naveed-7b539521a/"
              className="rounded-lg border border-white px-6 py-2.5 text-white hover:bg-indigo-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
