import React from 'react'

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#111111] px-6 py-24 text-white"
    >

      <div className="mx-auto w-full max-w-7xl">

        <div className="mb-16 flex items-center justify-between">

          <p className="text-sm tracking-[0.3em] text-gray-500">
            PORTFOLIO / 2026
          </p>

          <p className="hidden text-sm text-gray-500 md:block">
            Python Full Stack Developer
          </p>

        </div>

        <div className="relative">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-cyan-400">
            Python Full Stack Developer
          </p>

          <h1 className="text-[15vw] font-black uppercase leading-[0.78] tracking-[-0.06em] sm:text-8xl md:text-9xl">

            Gayatri

            <span className="block pl-[8vw] text-gray-400">
              Borate
            </span>

          </h1>

        </div>

        <div className="mt-16 grid gap-10 border-t border-gray-800 pt-8 md:grid-cols-3">

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              About
            </p>

            <p className="mt-4 max-w-sm leading-7 text-gray-300">
              Computer Science Engineering graduate passionate
              about building scalable web applications using
              Python, Django and React.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Tech Stack
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Python • Django
              <br />
              Django REST Framework • React
              <br />
              MySQL • REST APIs
            </p>
          </div>

          <div className="md:text-right">

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Explore
            </p>

            <a
              href="#projects"
              className="mt-5 inline-flex items-center gap-3 border-b border-cyan-400 pb-2 text-lg font-medium text-white transition hover:text-cyan-400"
            >
              View Selected Work
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Home