import React from 'react'
import profile from '../assets/profile.png'

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#111111] px-6 py-20 text-white sm:px-10 lg:px-16"
    >

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Top Info */}
        <div className="mb-12 flex items-center justify-between">

          <p className="text-xs tracking-[0.3em] text-gray-500 sm:text-sm">
            PORTFOLIO / 2026
          </p>

          <p className="hidden text-sm text-gray-500 md:block">
            Python Full Stack Developer
          </p>

        </div>

        {/* Hero Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">

          {/* LEFT SIDE */}
          <div>

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-gray-400 sm:text-sm">
              Python Full Stack Developer
            </p>

            <h1 className="text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-8xl md:text-9xl lg:text-[clamp(5rem,8vw,9rem)]">

              Gayatri

              <span className="block pl-[5vw] text-gray-400 lg:pl-12">
                Borate
              </span>

            </h1>

            {/* Description */}
            <p className="mt-10 max-w-lg text-base leading-7 text-gray-300 sm:text-lg">
              Computer Science Engineering graduate passionate
              about building scalable web applications using
              Python, Django and React.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-300"
              >
                View My Projects
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-gray-500 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* RIGHT SIDE - PROFILE PHOTO */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[390px] sm:w-[390px] lg:h-[480px] lg:w-[480px]">

              {/* Background Circle */}
              <div className="absolute inset-10 rounded-full bg-[#1c1c1c]" />

              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-gray-600" />

              {/* Second Ring */}
              <div className="absolute inset-5 rounded-full border border-gray-800" />

              {/* Decorative Ring - Top */}
              <div className="absolute -right-2 top-8 h-24 w-24 rounded-full border-t border-r border-gray-400" />

              {/* Decorative Ring - Bottom */}
              <div className="absolute -bottom-2 left-8 h-24 w-24 rounded-full border-b border-l border-gray-400" />

              {/* Profile Image - Original Color */}
              <img
                src={profile}
                alt="Gayatri Borate"
                className="relative z-10 h-full w-full rounded-full object-cover object-top"
              />

              {/* Code Icon */}
              <div className="absolute right-0 top-6 z-20 flex h-16 w-16 items-center justify-center rounded-full border border-gray-500 bg-[#111111] text-xl font-bold text-white sm:right-2 sm:top-4">
                {'</>'}
              </div>

              {/* Dot Grid - Top Left */}
              <div className="absolute -left-2 top-14 grid grid-cols-3 gap-3 sm:-left-8">

                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1 w-1 rounded-full bg-gray-400"
                  />
                ))}

              </div>

              {/* Dot Grid - Bottom Right */}
              <div className="absolute -bottom-2 -right-2 grid grid-cols-3 gap-3 sm:-right-8">

                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1 w-1 rounded-full bg-gray-400"
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Information */}
        <div className="mt-16 grid gap-10 border-t border-gray-800 pt-8 md:grid-cols-3">

          {/* ABOUT */}
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

          {/* TECH STACK */}
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

          {/* EXPLORE */}
          <div className="md:text-right">

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Explore
            </p>

            <a
              href="#projects"
              className="mt-5 inline-flex items-center gap-3 border-b border-white pb-2 text-lg font-medium text-white transition hover:text-gray-400"
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