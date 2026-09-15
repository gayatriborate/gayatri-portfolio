import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "What I Do", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="text-3xl font-bold tracking-tight text-white"
        >
          Gayatri<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a
          href="/Python_resume (1).pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border-2 border-cyan-400 px-5 py-2 text-base font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950 md:block"
        >
          Resume ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-2xl text-cyan-400 transition hover:bg-slate-800 md:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-slate-800 pb-3 text-base font-medium text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Resume Button */}
            <a
              href="/Python_resume (1).pdf"
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
              className="mt-2 w-fit rounded-full border-2 border-cyan-400 px-5 py-2 text-base font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;