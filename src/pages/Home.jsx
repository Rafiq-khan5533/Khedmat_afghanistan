import React from 'react'
import khedmat from "../assets/bg1.png"
import { FiSearch, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import ProviderCard from "../components/ProviderCard";
import JobCard from "../components/JobCard";
import { categories, providers, services, jobs } from "../Data/Mymock";
import { Link } from "react-router-dom";


function Home() {
    const steps = [
        {
            num: "01",
            title: "Search",
            text: "Find a service or provider in your city.",
            link: "/services",
        },
        {
            num: "02",
            title: "Compare",
            text: "Review profiles, ratings and service details.",
            link: "/providers",
        },
        {
            num: "03",
            title: "Connect",
            text: "Contact the provider or apply for a job.",
            link: "/jobs",
        },
    ];
    return (
        <>
            <section className={`min-h-[80vh] relative`}
            // style={{ backgroundImage: `url(${khedmat})` }}
            >
                <div className=' absolute inset-0 bg-linear-to-r from-white/95 via-white/75 to-black/15'>
                    <div className='mx-auto w-[calc(100%-32px)] max-w-295 min-h-126.25 relative flex items-center'>
                        <div className='max-w-162.5'>
                            <span className="text-(--primary) text-[15px] font-black tracking-[.12em]">KHEDMAT AFGHANISTAN</span>
                            <h1 className='text-[clamp(40px,6vw,60px)] leading-[1.02] my-3.5 mb-4.5 tracking-[1.5px] font-medium  
                            '>Find Trusted Services <span className='text-(--primary)'>Near You</span></h1>
                            <p className='text-[#4d5b70] text-[17px] max-w-147.5 leading-[1.7] '>Connect with skilled professionals and find the best services across Afghanistan.</p>

                            <div className=" grid grid-cols-1 md:grid-cols-4  gap-1.75 p-1.75 bg-white rounded-xl shadow-[0_15px_45px_rgba(20,40,70,.15)] mt-7">
                                <div className="min-w-0 flex items-center gap-2 border border-(--border) bg-white rounded-[9px] px-3">
                                    <FiSearch className='text-[#8290a4] shrink-0' />
                                    <input className='outline-none border-none w-full min-w-0 py-3 px-0' placeholder="Search services..." />
                                </div>
                                <select className='border border-(--border) bg-white rounded-md outline-0 text-[#56647a] py-0 px-3 '>
                                    <option>All Provinces</option>
                                    <option>Nangarhar</option>
                                    <option>Kabul</option>
                                    <option>Kandahar</option>
                                </select>
                                <select className='border border-(--border) bg-white rounded-md outline-0 text-[#56647a] py-0 px-3 '>
                                    <option>All Cities</option>
                                    <option>Jalalabad</option>
                                    <option>Kabul</option>
                                </select>
                                <button className=" text-white border border-[#a9c8f5] inline-flex items-center justify-center gap-2 rounded-lg py-2.5 px-3 font-semibold transition-colors text-lg bg-[#1769e0] transform: translateY(-1px) hover:bg-[#0e55c0]">Search</button>
                            </div>

                            <div className="flex flex-wrap items-center gap-1 mt-3 text-[12px] text-[#66748a]">
                                <span>Popular searches:</span>
                                <button className='border border-(--border) rounded-full bg-white px-2.25 py-1.25 text-[11px]'>Computer Repair</button>
                                <button className='border border-(--border) rounded-full bg-white px-2.25 py-1.25 text-[11px]'>Electrician</button>
                                <button className='border border-(--border) rounded-full bg-white px-2.25 py-1.25 text-[11px]'>Graphic Design</button>
                                <button className='border border-(--border) rounded-full bg-white px-2.25 py-1.25 text-[11px]'>Construction</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main>
                <section className="px-0 py-16.5">
                    <div className="mx-auto w-[calc(100%-32px)] max-w-300">
                        <SectionTitle title="Popular Categories" action={<Link to="/services" className="inline-flex text-(--primary) text-[13px] font-extrabold items-center bg-none border-0 gap-1">View all categories <FiArrowRight /></Link>} />
                        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                            {categories.map(category => (
                                <Link className=" 'category-card'  px-3.25 py-5 border border-(--border) rounded-xl text-center bg-white/80 transition-[.2s] hover:shadow-[0_12px_30px_rgba(20,40,70,.08)] hover:-translate-y-0.5" to="/services" key={category.id}>
                                    <span className='text-[30px]'>{category.icon}</span>
                                    <h3 className='text-[13px] m-[12px 0 5px]'>{category.name}</h3>
                                    <small className='text-(--muted) text-[11px]'>{category.count}+ Providers</small>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                {/* featured providers  */}
                <section className="px-0 py-16.5 bg-(--soft) ">
                    <div className="mx-auto w-[calc(100%-32px)] max-w-295 min-h-126.25">
                        <SectionTitle title="Featured Providers" action={<Link to="/providers" className="text-link text-(--primary) text-[13px] font-extrabold inline-flex items-center gap-1.25 border-0 bg-none  ">View all providers <FiArrowRight /></Link>} />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.75">
                            {providers.slice(0,4).map(provider => <ProviderCard className ="" key={provider.id} provider={provider} />)}
                        </div>
                    </div>
                </section>
                {/* latest jobs */}
                <section className=" px-0 py-26.5">
                    <div className=" mx-auto w-[calc(100%-32px)] max-w-295">
                        <SectionTitle title="Latest Jobs" action={<Link to="/jobs" className="text-(--primary) text-sm font-extrabold inline-flex items-center gap-1.25 border-0 bg-none ">View all jobs <FiArrowRight /></Link>} />
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 ">
                            {jobs.map(job => <JobCard key={job.id} job={job} />)}
                        </div>
                    </div>
                </section>

                <section  className="py-16.5 px-0 bg-[#fbfcfe]">
                    <div className="mx-auto w-[calc(100%-32px)] max-w-295">

                        <SectionTitle
                            title="How It Works"
                            text="Simple for customers and service providers."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {steps.map((step) => (
                                <Link
                                    key={step.num}
                                    to={step.link}
                                    className="group block p-6.5 border border-(--border) rounded-xl bg-white transition duration-200 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <span className="text-(--primary) font-extrabold text-[12px]">
                                        {step.num}
                                    </span>

                                    <h3 className="mt-3 mb-1.5 text-[18px] font-bold">
                                        {step.title}
                                    </h3>

                                    <p className="m-0 text-(--muted) leading-[1.6] text-[13px]">
                                        {step.text}
                                    </p>

                                    <span className="inline-block mt-4 text-(--primary) text-[12px] font-bold group-hover:underline">
                                        Explore →
                                    </span>
                                </Link>
                            ))}
                        </div>

                    </div>
                </section>
                <section className=" bg-[#10203a] text-white py-12.5 px-0 ">
                    <div className="mx-auto w-[calc(100%-32px)] max-w-295 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6.25 ">
                        <div>
                            <span className="text-(--primary) text-[11px] font-black tracking-[0.12em]">GROW YOUR BUSINESS</span>
                            <h2 className='my-2.25 mx-0 text-[32px]'>Are you a service provider?</h2>
                            <p className='text-[#b9c5d7] m-0'>Create your profile and reach customers across Afghanistan.</p>
                        </div>
                        <Link to="/register" className=" border border-transparent inline-flex items-center justify-center gap-2 rounded-[9px] py-2.5 px-4.25 font-bold transition duration-200 text-white bg-(--primary) hover:bg-(--primary-dark) hover:-translate-y-px ">Become a Provider <FiArrowRight /></Link>
                    </div>
                </section>
            </main>
        </>
    )
};

export default Home;