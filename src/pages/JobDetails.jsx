import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiBriefcase, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { jobs } from "../Data/Mymock";

import "../App.css"
export default function JobDetails() {
    const { id } = useParams();
    const job = jobs.find(j => j.id === Number(id)) || jobs[0];

    return (
        <main className="p-[55px 0 75px ] min-h-[65vh] bg-[#fbfcfe]">
            <div className="w-[calc(100%-32px)] max-w-295 mx-auto py-20">
                <Link to="/jobs" className="inline-flex items-center gap-1.5 t text-blue-600 text-xs font-extrabold mb-4.5 hover:underline">
                <FiArrowLeft />Back to jobs</Link>
                <div className="grid grid-cols-[1fr_320px] gap-5 items-start">
                    <section className="p-7 bg-white border border-(--border) rounded-xl transition duration-200 overflow-hidden shadow-lg hover:transition hovere:duration-200 hover:translate-y-0.5">
                        <div className="detail-title-row flex justify-between gap-5">
                            <div className="">
                                <span className="inline-flex px-1.75 py-1 rounded-[5px] bg-[#eaf3ff] text-(--primary) text-[9px] font-black">New</span>
                                <h1 className="text-[36px] mt-[13px  mb-2]" >{job.title}</h1>
                                <div className="flex flex-wrap items-center gap-3 mt-2.5 text-(--muted) text-[10px]">
                                    <span className="inline-flex items-center gap-1">
                                        <FiBriefcase />
                                        {job.category}
                                    </span>

                                    <span className="inline-flex items-center gap-1">
                                        <FiMapPin />
                                        {job.location}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <FiDollarSign />
                                        {job.budget}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <FiClock />
                                        Posted {job.posted}
                                    </span>
                                </div>
                            </div>
                            <div className="detail-buttons flex gap-2 items-start"><button className="border border-transparent inline-flex items-center justify-center gap-2 rounded-[9px] px-4.25 py-2.25 font-bold transition duration-200 text-white bg-(--primary) hover:bg-(--primary-dark) translate-y-px ">Apply Now</button><button className=" btn-outline bg-white text-(--primary) border border-[#a9c8f5] hover:bg-[#eff6ff] inline-flex items-center justify-center gap-2 rounded-[9px] px-4.5 py-2.5 font-bold transition duration-200">Save Job</button></div>
                        </div>
                        <hr className="border border-(--border) my-6 mx-0 " />
                        <h2 className="text-[18px] mt-7.5 ">Job Description</h2>
                        <p className="text-[#5d6b80] leading-[1.8]">We need a skilled professional for this project. The selected person should communicate clearly, understand the requirements and deliver quality work on time.</p>
                        <h2 className="text-[18px] mt-7.5 ">Requirements</h2>
                        <ul className="list-none p-0 grid gap-2.5 text-[#536177] text-[13px]">
                            <li>Experience in the relevant field</li>
                            <li>Professional communication</li>
                            <li>Reliable and timely delivery</li>
                        </ul>
                    </section>
                    <aside className="card border border-(--border) bg-white rounded-xl transition duration-200 overflow-hidden p-5.25 shadow-lg hover:transition hovere:duration-200 hover:translate-y-0.5">
                        <h3 className="mt-0">Job Overview</h3>
                        <div className="flex justify-between gap-3 border-t border-(--border) py-3.5 px-0 text-[11px]">
                            <span className="text-(--muted) ">Category</span>
                            <strong>{job.category}</strong>
                        </div>
                        <div className="flex justify-between gap-3 border-t border-(--border) py-3.5 px-0 text-[11px]">
                            <span>Location</span>
                            <strong>{job.location}</strong>
                        </div>
                        <div className="flex justify-between gap-3 border-t border-(--border) py-3.5 px-0 text-[11px]">
                            <span>Budget</span>
                            <strong>{job.budget}</strong>
                        </div>
                        <div className="flex justify-between gap-3 border-t border-(--border) py-3.5 px-0 text-[11px]">
                            <span>Job Type</span>
                            <strong>{job.type}</strong>
                        </div>
                        <div className="flex justify-between gap-3 border-t border-(--border) py-3.5 px-0 text-[11px]">
                            <span>Experience</span>
                            <strong>{job.experience}</strong>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
