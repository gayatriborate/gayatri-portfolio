import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold tracking-tight text-white"
        >
          Gayatri<span className="text-cyan-400">.</span>
        </a>


        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">

          <a
            href="#home"
            className="text-lg font-medium text-gray-300 transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-lg font-medium text-gray-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#services"
            className="text-lg font-medium text-gray-300 transition hover:text-cyan-400"
          >
            What I Do
          </a>

          <a
            href="#skills"
            className="text-lg font-medium text-gray-300 transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-lg font-medium text-gray-300 transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-lg font-medium text-gray-300 transition hover:text-cyan-400"
          >
            Contact
          </a>

        </div>


        {/* Resume Button */}
        <a
          href="/Python_resume (1).pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border-2 border-cyan-400 px-6 py-3 text-lg font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950 md:block"
        >
          Resume ↗
        </a>

      </div>

    </nav>
  )
}

export default Navbar

