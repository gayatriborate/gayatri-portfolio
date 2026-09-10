import React from 'react'

const skills = [
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color:
      'hover:border-orange-400 hover:shadow-[0_0_25px_rgba(251,146,60,0.35)]',
  },
  {
    name: 'Django',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    color:
      'hover:border-green-400 hover:shadow-[0_0_25px_rgba(74,222,128,0.35)]',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color:
      'hover:border-red-400 hover:shadow-[0_0_25px_rgba(248,113,113,0.35)]',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color:
      'hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color:
      'hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.35)]',
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color:
      'hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color:
      'hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color:
      'hover:border-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.35)]',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color:
      'hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color:
      'hover:border-purple-400 hover:shadow-[0_0_25px_rgba(192,132,252,0.35)]',
  },
  {
    name: 'VS Code',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    color:
      'hover:border-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.35)]',
  },
  {
    name: 'Eclipse',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg',
    color:
      'hover:border-purple-400 hover:shadow-[0_0_25px_rgba(192,132,252,0.35)]',
  },
  {
    name: 'Postman',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    color:
      'hover:border-orange-400 hover:shadow-[0_0_25px_rgba(251,146,60,0.35)]',
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="overflow-hidden bg-[#f5f5f0] py-28 text-[#111111]"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}
        <div className="border-b border-gray-300 pb-8">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            04 / Education & Skills
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
            Education & Skills
          </h2>

        </div>


        {/* ================= EDUCATION ================= */}
        <div className="mt-20">

          <div className="grid gap-8 md:grid-cols-[180px_1fr]">

            {/* Left Title */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Education
              </p>
            </div>


            {/* Education Timeline */}
            <div className="relative border-l border-gray-300 pl-8">

              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-[#f5f5f0]" />

              {/* Year */}
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                2022 — 2026
              </p>

              {/* Degree */}
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                B.Tech in Computer Science Engineering
              </h3>

              {/* College */}
              <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-600">
                Fabtech Technical Campus College of Engineering
                and Research, Sangola
              </p>

              {/* Description */}
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
                Building a strong foundation in software development,
                programming, web technologies, databases and application
                development.
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 transition hover:border-cyan-400 hover:text-cyan-600">
                  Computer Science
                </span>

                <span className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 transition hover:border-cyan-400 hover:text-cyan-600">
                  Software Development
                </span>

                <span className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 transition hover:border-cyan-400 hover:text-cyan-600">
                  Web Technologies
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ================= TECHNICAL SKILLS ================= */}
        <div className="mt-20">

          <div className="mb-8 grid gap-8 md:grid-cols-[180px_1fr]">

            {/* Left Title */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Technical Skills
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600">
              Technologies and tools I use to build web applications.
            </p>

          </div>

        </div>

      </div>


      {/* ================= SCROLLING SKILLS ================= */}
      <div className="w-full overflow-hidden border-y border-gray-800 bg-[#111111] py-10">

        <div className="flex w-max animate-[scroll_25s_linear_infinite] gap-6">

          {[...skills, ...skills].map((skill, index) => (

            <div
              key={index}
              className={`
                flex min-w-[230px] items-center justify-center gap-5
                rounded-2xl
                border border-gray-700
                bg-[#171717]
                px-8 py-7
                transition-all duration-300
                hover:-translate-y-1
                ${skill.color}
              `}
            >

              {/* Logo */}
              <img
                src={skill.logo}
                alt={skill.name}
                className={`
                  h-16 w-16 object-contain
                  ${
                    skill.name === 'GitHub'
                      ? 'brightness-0 invert'
                      : ''
                  }
                `}
              />

              {/* Skill Name */}
              <span className="whitespace-nowrap text-xl font-semibold text-white">
                {skill.name}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills