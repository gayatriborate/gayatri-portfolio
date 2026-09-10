import React from 'react'
import profile from '../assets/profile - Copy.jpeg'

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f5f5f0] px-6 py-28 text-[#111111]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 border-b border-gray-300 pb-8 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
              01 / About
            </p>

            <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
              About Me
            </h2>
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Python Full Stack Developer
          </p>

        </div>


        {/* Main Content */}
        <div className="mt-16 grid items-center gap-14 md:grid-cols-2">

          {/* ================= PHOTO ================= */}
          <div className="relative mx-auto flex h-[530px] w-full max-w-md items-center justify-center">

            {/* Cyan Circle Glow */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Background Circle */}
            <div className="absolute left-3 top-16 h-80 w-80 rounded-full border border-cyan-400/40 bg-cyan-400/5" />


            {/* Hexagonal Outer Frame */}
            {/* Photo */}
<div className="relative mx-auto flex h-[540px] w-full max-w-md items-center justify-center">

  {/* Background Circle */}
  <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100" />

  {/* Cyan Glow */}
  <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/30 blur-2xl" />


  {/* Angled Photo Frame */}
  <div
    className="absolute h-[470px] w-[350px] rotate-[-6deg] bg-cyan-400 p-[5px]"
    style={{
      clipPath:
        'polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)',
    }}
  >

    {/* Inner Frame */}
    <div
      className="h-full w-full overflow-hidden bg-[#111111]"
      style={{
        clipPath:
          'polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)',
      }}
    >

      <img
        src={profile}
        alt="Gayatri Borate"
        className="h-full w-full object-cover"
      />

    </div>

  </div>


  {/* Small Decorative Hexagon */}
  <div
    className="absolute right-5 top-16 h-14 w-14 rotate-12 border-2 border-cyan-400 bg-[#111111]"
    style={{
      clipPath:
        'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    }}
  />


  {/* Small Cyan Dot */}
  <div className="absolute bottom-24 left-8 h-5 w-5 rounded-full bg-cyan-400" />


  {/* Developer Badge */}
  <div className="absolute bottom-10 left-2 z-20 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-xl">
    Developer <span className="text-cyan-400">•</span> 2026
  </div>

</div>

          </div>


          {/* ================= ABOUT TEXT ================= */}
          <div>

            <p className="text-3xl font-semibold leading-tight md:text-5xl">
              I build
              <span className="text-cyan-500"> clean & practical </span>
              web applications.
            </p>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              I'm Gayatri Borate, a Computer Science Engineering graduate
              passionate about full stack web development and modern
              technologies.
            </p>


            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Backend */}
              <div className="rounded-2xl border border-gray-300 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg">

                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Backend
                </p>

                <p className="mt-2 text-lg font-bold">
                  Python • Django
                </p>

              </div>


              {/* Frontend */}
              <div className="rounded-2xl border border-gray-300 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg">

                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Frontend
                </p>

                <p className="mt-2 text-lg font-bold">
                  React • JavaScript
                </p>

              </div>

            </div>


            {/* Tech Tags */}
            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full bg-[#111111] px-4 py-2 text-sm text-white transition hover:bg-cyan-400 hover:text-black">
                REST API
              </span>

              <span className="rounded-full bg-[#111111] px-4 py-2 text-sm text-white transition hover:bg-cyan-400 hover:text-black">
                MySQL
              </span>

              <span className="rounded-full bg-[#111111] px-4 py-2 text-sm text-white transition hover:bg-cyan-400 hover:text-black">
                Git & GitHub
              </span>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM INFORMATION ================= */}
        <div className="mt-20 grid border-y border-gray-300 md:grid-cols-3">

          {/* Education */}
          <div className="px-6 py-8 md:border-r md:border-gray-300">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Education
            </p>

            <p className="mt-3 text-lg font-semibold">
              B.Tech — Computer Science
            </p>

          </div>


          {/* Graduation */}
          <div className="border-t border-gray-300 px-6 py-8 md:border-t-0 md:border-r">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Graduation
            </p>

            <p className="mt-3 text-lg font-semibold">
              2026
            </p>

          </div>


          {/* Focus */}
          <div className="border-t border-gray-300 px-6 py-8 md:border-t-0">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Focus
            </p>

            <p className="mt-3 text-lg font-semibold">
              Full Stack Development
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About