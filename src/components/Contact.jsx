import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// =====================================================
// EMAILJS CONFIG
// =====================================================

const SERVICE_ID = "service_qwnx7eh";
const TEMPLATE_ID = "template_8n5ykq8";
const AUTOREPLY_TEMPLATE_ID = "template_jmb9kuy";
const PUBLIC_KEY = "TReJz1u6QColjAQsM";

// =====================================================
// CONTACT DETAILS
// =====================================================

const contactDetails = [
  {
    number: "01",
    label: "Email",
    value: "gayatriborate15@gmail.com",
    href: "mailto:gayatriborate15@gmail.com",
  },
  {
    number: "02",
    label: "GitHub",
    value: "github.com/gayatribore",
    href: "https://github.com/gayatribore",
  },
  {
    number: "03",
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/gayatri-borate-1255a9298/",
  },
];

// =====================================================
// CONTACT COMPONENT
// =====================================================

const Contact = () => {

  // =====================================================
  // FORM STATE
  // =====================================================

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("");
  };

  // =====================================================
  // VALIDATION
  // =====================================================

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (
      !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(form.name.trim())
    ) {
      newErrors.name = "Name can contain letters and spaces only.";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Subject
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (form.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    // Message
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =====================================================
  // SEND EMAIL
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
  const templateParams = {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  };

  // 1. Send visitor message to Gayatri
  const response = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    {
      publicKey: PUBLIC_KEY,
    }
  );

  console.log("Email sent to Gayatri:", response);

  // 2. Send Thank You email to visitor
  const autoReplyResponse = await emailjs.send(
    SERVICE_ID,
    AUTOREPLY_TEMPLATE_ID,
    templateParams,
    {
      publicKey: PUBLIC_KEY,
    }
  );

  console.log("Thank You email sent:", autoReplyResponse);

  setStatus("success");

  setForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  setErrors({});

} catch (error) {
  console.error("EmailJS Error:", error);
  setStatus("error");

} finally {
  setIsSending(false);
}
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111111] px-6 py-24 text-white sm:px-10 lg:px-16"
    >

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1400px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 border-b border-gray-800 pb-12 lg:grid-cols-[1fr_1.4fr]">

          {/* Small Label */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-400">
              06 / Contact
            </p>

            <p className="mt-5 text-sm uppercase tracking-widest text-gray-500">
              Let's connect
            </p>

          </div>

          {/* Heading */}
          <div>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Let's Work
              <span className="block text-gray-400">
                Together<span className="text-white">.</span>
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Have an opportunity or want to discuss a project?
              Feel free to reach out and connect with me.
            </p>

          </div>

        </div>

        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================================
              LEFT CARD - CONTACT DETAILS
          ================================================= */}

          <div className="rounded-2xl border border-gray-200 bg-white p-7 text-[#111111] shadow-2xl sm:p-10">

            {/* Card Header */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                  Contact Details
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  Get In Touch
                </h3>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-xl text-white">
                ↗
              </div>

            </div>

            <div className="mt-4 h-1 w-12 rounded-full bg-cyan-400"></div>

            <p className="mt-6 text-sm leading-7 text-gray-600">
              I'm currently looking for an opportunity to start my
              career as a Python Full Stack Developer. If you have
              an opportunity or would like to connect, feel free to
              reach out.
            </p>

            {/* Contact List */}
            <div className="mt-10">

              {contactDetails.map((item) => (
                <div
                  key={item.number}
                  className="group border-t border-gray-200 py-5 last:border-b"
                >

                  <div className="flex items-start gap-4">

                    {/* Number */}
                    <span className="pt-1 text-xs font-medium text-gray-400">
                      {item.number}
                    </span>

                    {/* Details */}
                    <div className="min-w-0 flex-1">

                      <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                        {item.label}
                      </p>

                      <a
                        href={item.href}
                        target={item.label !== "Email" ? "_blank" : undefined}
                        rel={
                          item.label !== "Email"
                            ? "noreferrer"
                            : undefined
                        }
                        className="mt-2 block break-all text-sm font-semibold text-gray-900 transition duration-300 group-hover:text-cyan-500"
                      >
                        {item.value}
                      </a>

                    </div>

                    {/* Arrow */}
                    <span className="text-gray-400 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-500">
                      ↗
                    </span>

                  </div>

                </div>
              ))}

            </div>

            {/* Bottom Note */}
            <div className="mt-8 rounded-xl bg-gray-100 p-4">

              <p className="text-xs leading-6 text-gray-600">
                Available for internships, fresher opportunities
                and exciting web development projects.
              </p>

            </div>

          </div>

          {/* =================================================
              RIGHT CARD - SEND MESSAGE
          ================================================= */}

          <div className="rounded-2xl border border-gray-200 bg-white p-7 text-[#111111] shadow-2xl sm:p-10">

            {/* Card Header */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                  Start a conversation
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  Send Me a Message
                </h3>

              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-900 sm:flex">
                ✉
              </div>

            </div>

            <div className="mt-4 h-1 w-12 rounded-full bg-cyan-400"></div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
              noValidate
            >

              {/* NAME + EMAIL */}
              <div className="grid gap-5 md:grid-cols-2">

                {/* NAME */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-500"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                        : "border-gray-200 focus:border-cyan-400 focus:ring-cyan-100"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}

                </div>

                {/* EMAIL */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-500"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                        : "border-gray-200 focus:border-cyan-400 focus:ring-cyan-100"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}

                </div>

              </div>

              {/* SUBJECT */}
              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-500"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-200 focus:border-cyan-400 focus:ring-cyan-100"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.subject}
                  </p>
                )}

              </div>

              {/* MESSAGE */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-500"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message here..."
                  className={`w-full resize-none rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-200 focus:border-cyan-400 focus:ring-cyan-100"
                  }`}
                ></textarea>

                {errors.message && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}

              </div>

              {/* SUCCESS */}
              {status === "success" && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* ERROR */}
              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  ✕ Message could not be sent. Please try again.
                </div>
              )}

              {/* BUTTON */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">

                <p className="text-xs text-gray-500">
                  I usually reply as soon as possible.
                </p>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center gap-3 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <span>↗</span>
                </button>

              </div>

            </form>

          </div>

        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-600 md:flex-row">

          <p>
            © {new Date().getFullYear()} Gayatri Borate
          </p>

          <p>
            Python Full Stack Developer
          </p>

        </div>

      </div>

    </section>
  );
};

export default Contact;