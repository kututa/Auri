import React from 'react';

export default function Subscribe() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-16 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-black text-center">
        Join the inner circle
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-center text-sm text-gray-600 leading-relaxed">
        Sign up for our newsletter and be the first to receive exclusive insights,
        fresh case studies, and the latest updates — delivered straight to your
        inbox by the brand, product, and design teams at Aura.
      </p>

      {/* Email link */}
      <p className="mt-4 text-center text-base font-semibold text-black">
        newbusiness@aura.com
      </p>

      {/* Divider with OR */}
      <div className="flex items-center justify-center gap-4 w-full max-w-2xl mt-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-sm text-gray-500">or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Subheading */}
      <p className="mt-6 text-sm font-medium text-black">fill up the form:</p>

      {/* Form */}
      <form className="mt-6 w-full max-w-2xl flex flex-col gap-4 items-center">
        <input
          type="email"
          placeholder="email@company.com"
          aria-label="Email"
          required
          className="w-full rounded-3xl bg-gray-200 px-6 py-5 text-sm placeholder-gray-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="First name"
          aria-label="First name"
          className="w-full rounded-3xl bg-gray-200 px-6 py-5 text-sm placeholder-gray-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last name"
          aria-label="Last name"
          className="w-full rounded-3xl bg-gray-200 px-6 py-5 text-sm placeholder-gray-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Company name"
          aria-label="Company name"
          className="w-full rounded-3xl bg-gray-200 px-6 py-5 text-sm placeholder-gray-500 focus:outline-none"
        />

        {/* Disclaimer */}
        <p className="text-[11px] text-gray-600 mt-2 text-center leading-snug max-w-[720px]">
          By filling in the form, you agree to our privacy policy including our cookie use.
        </p>

        {/* Subscribe button (large pill) */}
        <button
          type="submit"
          className="mt-6 w-[320px] sm:w-[420px] md:w-[520px] max-w-full h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-medium text-gray-500"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
