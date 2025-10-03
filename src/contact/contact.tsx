"use client";

import React from "react";

export default function Contact() {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <div className="max-w-2xl text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Contact us
        </h1>
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          We partner with CMOs, CPOs, Heads of Brand, and Design Directors,
          acting as an integrated team to deliver expert support for projects or
          ongoing initiatives
        </p>

        {/* Email */}
        <p className="text-sm text-gray-900 font-medium mb-2">
          newbusiness@aura.com
        </p>

        {/* Divider with OR */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-px bg-gray-300 w-24" />
          <span className="text-xs text-gray-500">or</span>
          <div className="h-px bg-gray-300 w-24" />
        </div>

        {/* Form */}
        <p className="text-sm text-gray-800 mb-4">fill up the form:</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 outline-none"
          />
          <input
            type="email"
            placeholder="email@company.com"
            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 outline-none"
          />
          <textarea
            placeholder="Project description"
            rows={4}
            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 outline-none"
          />
          <input
            type="text"
            placeholder="How did you find Aura"
            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 outline-none"
          />

          {/* Privacy Note */}
          <p className="text-[11px] text-gray-500 text-left leading-relaxed">
            By filling in the form, you agree to our privacy policy including
            our cookie use.
          </p>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-gray-100 text-gray-400 text-lg py-3 cursor-not-allowed"
          >
            Let’s talk
          </button>
        </form>
      </div>
    </section>
  );
}
