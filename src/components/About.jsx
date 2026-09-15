import React from "react";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f5f5f0] px-6 py-20 text-[#111111] sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1200px]">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-4 border-b border-gray-300 pb-7 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              01 / About
            </p>

            <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
              About Me
            </h2>
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
            Python Full Stack Developer
          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">

          {/* PHOTO */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center">

            {/* Circle */}
            <div className="absolute h-[330px] w-[330px] rounded-full bg-cyan-100" />

            {/* Glow */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-300/30 blur-2xl" />

            {/* Photo Frame */}
            <div
              className="relative h-[390px] w-[290px] rotate-[-6deg] bg-cyan-400 p-[5px]"
              style={{
                clipPath:
                  "polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)",
              }}
            >

              <div
                className="h-full w-full overflow-hidden bg-[#111111]"
                style={{
                  clipPath:
                    "polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)",
                }}
              >

                <img
                  src={profile}
                  alt="Gayatri Borate"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

            {/* Decorative Hexagon */}
            <div
              className="absolute right-0 top-8 h-12 w-12 rotate-12 border-2 border-cyan-400 bg-[#111111]"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />

            {/* Dot */}
            <div className="absolute bottom-12 left-0 h-5 w-5 rounded-full bg-cyan-400" />

            {/* Badge */}
            <div className="absolute bottom-3 left-0 rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold text-white shadow-lg">
              Developer <span className="text-cyan-400">•</span> 2026
            </div>

          </div>

          {/* TEXT */}
          <div>

            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              I build
              <span className="text-cyan-500"> clean & practical </span>
              web applications.
            </h3>

            <p className="mt-5 text-base leading-7 text-gray-600">
              I'm Gayatri Borate, a Computer Science Engineering graduate
              passionate about full stack web development and modern
              technologies.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              I enjoy creating user-friendly interfaces and developing
              practical web applications using Python, Django and React.
            </p>

            {/* SKILL CARDS */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-gray-300 bg-white p-4 transition hover:border-cyan-400">

                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Backend
                </p>

                <p className="mt-2 font-bold">
                  Python • Django
                </p>

              </div>

              <div className="rounded-xl border border-gray-300 bg-white p-4 transition hover:border-cyan-400">

                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Frontend
                </p>

                <p className="mt-2 font-bold">
                  React • JavaScript
                </p>

              </div>

            </div>

            {/* TAGS */}
            <div className="mt-6 flex flex-wrap gap-2">

              {["REST API", "MySQL", "Git & GitHub"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-white transition hover:bg-cyan-400 hover:text-black"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* BOTTOM INFO */}
        <div className="mt-12 grid border-y border-gray-300 md:grid-cols-3">

          <div className="py-6 md:pr-6">

            <p className="text-xs uppercase tracking-widest text-gray-500">
              Education
            </p>

            <p className="mt-2 font-bold">
              B.Tech — Computer Science
            </p>

          </div>

          <div className="border-t border-gray-300 py-6 md:border-l md:border-t-0 md:px-6">

            <p className="text-xs uppercase tracking-widest text-gray-500">
              Graduation
            </p>

            <p className="mt-2 font-bold">
              2026
            </p>

          </div>

          <div className="border-t border-gray-300 py-6 md:border-l md:border-t-0 md:pl-6">

            <p className="text-xs uppercase tracking-widest text-gray-500">
              Focus
            </p>

            <p className="mt-2 font-bold">
              Full Stack Development
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About; 