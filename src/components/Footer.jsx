import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Top Border */}
        <div className="border-t border-white/20" />

        {/* Main Footer */}
        <div className="grid gap-10 py-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold">
              Gayatri<span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-3 text-gray-400">
              Python Full Stack Developer
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Building modern, responsive and user-friendly web
              applications with Python, Django and React.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-3 text-gray-300">

              <button
                onClick={() => scrollToSection("home")}
                className="w-fit transition hover:text-cyan-400"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="w-fit transition hover:text-cyan-400"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className="w-fit transition hover:text-cyan-400"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="w-fit transition hover:text-cyan-400"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-fit transition hover:text-cyan-400"
              >
                Contact
              </button>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Connect
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/gayatriborate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-gray-300 transition hover:text-cyan-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-gray-300 transition hover:text-cyan-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:your-email@gmail.com"
                className="w-fit text-gray-300 transition hover:text-cyan-400"
              >
                Email ↗
              </a>

            </div>
          </div>
        </div>

        {/* Middle Border */}
        <div className="border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Gayatri Borate
          </p>

          <p>
            Designed & Built with React
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="w-fit text-gray-300 transition hover:text-cyan-400"
          >
            Back to top ↑
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;