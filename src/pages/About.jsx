import React from "react";
import {
  FiSearch,
  FiUsers,
  FiCheckCircle,
  FiBriefcase,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

import { Link } from "react-router-dom";
export default function About() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#172033]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-(--border) text-white">
        <div className="absolute  inset-0 bg-linear-to-r from-white/95 via-white/75 to-black/15" />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[.12em] text-(--primary)">
              About Afghan Services
            </p>

            <h1 className="mb-6 text-4xl font-black text-[#456256] leading-tight tracking-[1.5px] md:text-5xl ">
              Connecting people with trusted professionals across Afghanistan
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-[#1569e8]">
              Afghan Services is a platform designed to make it easier to
              discover skilled professionals, find local services, and connect
              with reliable providers for everyday work and professional needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.12em] text-(--primary)">
              Our Mission
            </p>

            <h2 className="mb-5 text-3xl font-black tracking-[-.8px] md:text-4xl">
              Making local services easier to discover and access
            </h2>

            <p className="mb-5 leading-7 text-[#64748b]">
              Finding the right professional should not be difficult. Afghan
              Services brings customers and service providers together through
              one simple platform.
            </p>

            <p className="leading-7 text-[#64748b]">
              Whether someone needs a web developer, graphic designer,
              electrician, IT specialist, or another professional, the goal is
              to make the search faster, clearer, and more trustworthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
              <FiUsers className="mb-4 text-2xl text-(--primary)" />
              <h3 className="mb-2 text-xl font-bold">For Everyone</h3>
              <p className="text-sm leading-6 text-[#64748b]">
                Simple access to professionals and local services.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
              <FiShield className="mb-4 text-2xl text-(--primary)" />
              <h3 className="mb-2 text-xl font-bold">Built on Trust</h3>
              <p className="text-sm leading-6 text-[#64748b]">
                Profiles, ratings, and service information help users make
                better decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
              <FiBriefcase className="mb-4 text-2xl text-(--primary)" />
              <h3 className="mb-2 text-xl font-bold">More Opportunities</h3>
              <p className="text-sm leading-6 text-[#64748b]">
                Professionals can showcase their skills and find new work.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
              <FiCheckCircle className="mb-4 text-2xl text-(--primary)" />
              <h3 className="mb-2 text-xl font-bold">Simple Process</h3>
              <p className="text-sm leading-6 text-[#64748b]">
                Search, compare, connect, and get the work done.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-[#e2e8f0] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.12em] text-(--primary)">
              How It Works
            </p>

            <h2 className="mb-4 text-3xl font-black md:text-4xl">
              One platform. Three simple steps.
            </h2>

            <p className="text-[#64748b]">
              We keep the process straightforward for both customers and
              professionals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <Link to="/services" className="relative rounded-2xl border border-[#e2e8f0] p-7 transition hover:translate-y-0.5 hover:duration-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-black text-(--primary)">
                01
              </div>

              <FiSearch className="mb-3 text-xl text-(--primary)" />

              <h3 className="mb-2 text-xl font-bold">
                Find a Service
              </h3>

              <p className="text-sm leading-6 text-[#64748b]">
                Search for the service or professional you need by category
                and location.
              </p>
            </Link>

            <Link to="/providers" className="rounded-2xl border border-[#e2e8f0] p-7 transition hover:translate-y-0.5 hover:duration-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-black text-(--primary)">
                02
              </div>

              <FiUsers className="mb-3 text-xl text-(--primary)" />

              <h3 className="mb-2 text-xl font-bold">
                Compare Providers
              </h3>

              <p className="text-sm leading-6 text-[#64748b]">
                Review profiles, skills, ratings, locations, and service
                details before making your choice.
              </p>
            </Link>

            <Link to = "/jobs" className="rounded-2xl border border-[#e2e8f0] p-7 transition hover:translate-y-0.5 hover:duration-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-black text-(--primary)">
                03
              </div>

              <FiCheckCircle className="mb-3 text-xl text-(--primary)" />

              <h3 className="mb-2 text-xl font-bold">
                Connect & Get Started
              </h3>

              <p className="text-sm leading-6 text-[#64748b]">
                Contact the provider, discuss your requirements, and move
                forward with your project.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* Customers / Providers */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[.12em] text-(--primary)">
            Built for Both Sides
          </p>

          <h2 className="text-3xl font-black md:text-4xl">
            Better opportunities for everyone
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-[#cddff7] p-8">
            <h3 className="mb-4 text-2xl font-black">
              For Customers
            </h3>

            <ul className="space-y-4 text-[#475569]">
              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-(--primary)" />
                Find professionals by service and location
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-(--primary)" />
                Compare providers before making a decision
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-(--primary)" />
                View skills, ratings, and service information
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-(--primary)" />
                Connect directly with service providers
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#172033] p-8 text-white">
            <h3 className="mb-4 text-2xl font-black">
              For Providers
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-blue-400" />
                Create a professional profile
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-blue-400" />
                Showcase your skills and services
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-blue-400" />
                Reach customers looking for your expertise
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-blue-400" />
                Build your reputation through reviews and ratings
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-(--border)">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-16 text-center text-black md:flex-row md:text-left">

          <div>
            <h2 className="mb-2 text-3xl font-black">
              Ready to find the right professional?
            </h2>

            <p className="text-emerald-900">
              Explore services and connect with professionals across
              Afghanistan.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-(--border)! bg-blue-600 hover:bg-blue-700 transition hover:-translate-y-0.5"
          >
            Explore Services
            <FiArrowRight className="text-white" />
          </a>

        </div>
      </section>

    </main>
  );
}