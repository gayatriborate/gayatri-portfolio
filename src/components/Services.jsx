import React from 'react'

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#111111] px-6 py-28 text-white"
    >

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            02 / What I Do
          </p>

          <h2 className="text-5xl font-bold md:text-7xl">
            What I Do
          </h2>

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Django */}
          <div className="group rounded-2xl border border-gray-800 bg-[#171717] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

            <span className="text-sm text-gray-600">
              01
            </span>

            <div className="my-8 text-5xl">
              ⚙️
            </div>

            <h3 className="text-2xl font-semibold">
              Django Development
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Building backend applications and REST APIs
              using Python, Django and Django REST Framework.
            </p>

          </div>

          {/* React */}
          <div className="group rounded-2xl border border-gray-800 bg-[#171717] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

            <span className="text-sm text-gray-600">
              02
            </span>

            <div className="my-8 text-5xl">
              ⚛️
            </div>

            <h3 className="text-2xl font-semibold">
              React Development
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Creating modern, responsive and interactive
              frontend interfaces using React.js and JavaScript.
            </p>

          </div>

          {/* Full Stack */}
          <div className="group rounded-2xl border border-gray-800 bg-[#171717] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

            <span className="text-sm text-gray-600">
              03
            </span>

            <div className="my-8 text-5xl">
              🚀
            </div>

            <h3 className="text-2xl font-semibold">
              Full Stack Development
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Developing complete web applications using
              Python, Django, React, REST APIs and MySQL.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Services