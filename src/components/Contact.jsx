import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mailBody = `
Name: ${form.name}

Email: ${form.email}

Message:
${form.message}
    `

    const mailtoLink =
      `mailto:gayatriborate15@gmail.com` +
      `?subject=${encodeURIComponent(form.subject)}` +
      `&body=${encodeURIComponent(mailBody)}`

    window.location.href = mailtoLink
  }

  return (
    <section
      id="contact"
      className="bg-[#111111] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="border-b border-gray-800 pb-6">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-400">
            06 / Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Let's Connect
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold">
              Have an opportunity?
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              I'm currently looking for an opportunity to start my
              career as a Python Full Stack Developer. If you have
              an opportunity or would like to connect, feel free to
              reach out.
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gray-600">
                  Email
                </p>

                <a
                  href="mailto:gayatriborate15@gmail.com"
                  className="mt-1 inline-block text-base text-gray-300 transition hover:text-cyan-400"
                >
                  gayatriborate15@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gray-600">
                  GitHub
                </p>

                <a
                  href="https://github.com/gayatriborate"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-base text-gray-300 transition hover:text-cyan-400"
                >
                  github.com/gayatriborate ↗
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gray-600">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/gayatri-borate-1255a9298/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-base text-gray-300 transition hover:text-cyan-400"
                >
                  LinkedIn Profile ↗
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div>

            <form
              onSubmit={handleSubmit}
              className="space-y-3"
            >

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border-b border-gray-700 bg-transparent px-1 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border-b border-gray-700 bg-transparent px-1 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full border-b border-gray-700 bg-transparent px-1 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                required
                className="w-full resize-none border-b border-gray-700 bg-transparent px-1 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="mt-4 rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-white"
              >
                Send Message ↗
              </button>

            </form>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-600 md:flex-row">

          <p>
            © 2026 Gayatri Borate
          </p>

          <p>
            Python Full Stack Developer
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact

