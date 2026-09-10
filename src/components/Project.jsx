import React, { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    icon: '📦',
    title: 'AI-Powered Inventory & Sales Management',
    description:
      'A full stack system for managing products, suppliers, customers, purchases and sales with AI-based demand forecasting and chatbot features.',
    technologies: ['Python', 'Django', 'DRF', 'React', 'MySQL', 'AI'],
    github:
      'https://github.com/gayatriborate/ai-inventory-sales-management',
    demo: '#',
  },
  {
    number: '02',
    icon: '👥',
    title: 'Employee Leave Management System',
    description:
      'A web application for managing employee leave requests, approvals and employee records through a simple interface.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github:
      'https://github.com/gayatriborate/employee-leave-management-system',
    demo: '#',
  },
  {
    number: '03',
    icon: '📊',
    title: '3D Bharat Deal Dashboard',
    description:
      'A responsive dashboard for managing and visualizing deal and investor information with a clean and user-friendly interface.',
    technologies: ['React', 'JavaScript', 'Next.js', 'CSS'],
    github:
      'https://github.com/gayatriborate/3d-bharat-deal-dashboard',
    demo:
      'https://drive.google.com/file/d/1lCHXtAFrTBWF0XHFTyqzL5xbyC2BdT8x/view?usp=drive_link',
  },
]

const Projects = () => {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const project = projects[current]

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      changeProject((current + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  // Smooth project change
  const changeProject = (index) => {
    setIsAnimating(true)

    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 250)
  }

  // Next
  const nextProject = () => {
    const nextIndex = (current + 1) % projects.length
    changeProject(nextIndex)
  }

  // Previous
  const previousProject = () => {
    const previousIndex =
      current === 0 ? projects.length - 1 : current - 1

    changeProject(previousIndex)
  }

  return (
    <section
      id="projects"
      className="bg-[#f5f5f0] px-6 py-28 text-[#111111]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 border-b border-gray-300 pb-8 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
              05 / Projects
            </p>

            <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
              My Work
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500">
            A collection of web applications and dashboards
            built using modern development technologies.
          </p>

        </div>

        {/* Project Card */}
        <div
          className={`mt-16 overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm transition-all duration-500 ${
            isAnimating
              ? 'translate-y-2 opacity-0'
              : 'translate-y-0 opacity-100'
          }`}
        >

          {/* Visual Area */}
          <div className="relative flex h-64 items-center justify-between overflow-hidden bg-[#111111] p-8 text-white md:h-80">

            {/* Circle Decoration */}
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-gray-700 transition duration-700 hover:scale-110" />

            <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-gray-800" />

            <div className="relative z-10">

              <p className="text-sm tracking-[0.3em] text-gray-500">
                PROJECT {project.number}
              </p>

              <div className="mt-8 text-7xl transition duration-500 hover:scale-110">
                {project.icon}
              </div>

            </div>

            {/* Big Number */}
            <span className="relative z-10 text-8xl font-bold text-gray-800 md:text-[10rem]">
              {project.number}
            </span>

          </div>

          {/* Content */}
          <div className="p-8 md:p-10">

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">

              <h3 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
                {project.title}
              </h3>

              <span className="text-sm font-medium text-gray-400">
                {String(current + 1).padStart(2, '0')} / 03
              </span>

            </div>

            {/* Description */}
            <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">

              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 transition hover:border-cyan-400 hover:text-cyan-600"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-cyan-500 hover:text-black"
              >
                GitHub ↗
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Live Demo ↗
              </a>

            </div>

          </div>

        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between border-y border-gray-300 py-6">

          {/* Previous */}
          <button
            onClick={previousProject}
            className="group flex items-center gap-3 text-lg font-semibold transition hover:text-cyan-600"
          >
            <span className="text-2xl transition group-hover:-translate-x-1">
              ←
            </span>

            Prev
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-3">

            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => changeProject(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'w-10 bg-cyan-500'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}

          </div>

          {/* Next */}
          <button
            onClick={nextProject}
            className="group flex items-center gap-3 text-lg font-semibold transition hover:text-cyan-600"
          >
            Next

            <span className="text-2xl transition group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>

      </div>
    </section>
  )
}

export default Projects

