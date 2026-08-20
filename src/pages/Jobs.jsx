import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import JobCard from "../components/JobCard";
import { jobs } from "../Data/Mymock";

export default function Jobs() {
    const [query, setQuery] = useState("");
    const filtered = useMemo(() => jobs.filter(j => `${j.title} ${j.category} ${j.location}`.toLowerCase().includes(query.toLowerCase())), [query]);

    return (
        <main className="pt-13.75 pb-18.75 min-h-[65vh] bg-[#fbfcfe]">
            <div className="mx-auto w-[calc(100%-32px)] max-w-295">
                <div className="mb-7.5">
                    <span className=" text-(--primary) text-[11px] font-extrabold letter-spacing tracking-[0.8px]">OPPORTUNITIES</span>
                    <h1 className="my-2 mx-0 text-[38px] tracking-[-.8px]">Jobs</h1>
                    <p className="text-(--muted) m-0">Find jobs posted by people and businesses across Afghanistan.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-start">
                    <aside className=" border border-(--border) bg-white rounded-xl p-4  ">
                        <h3 className="mb-4 text-[14px]">Filter Jobs</h3>
                        <label className="block m-[17px 0 6px ] text-[11px] font-extrabold text-[#55637a]">Keyword</label>
                        <input placeholder="Search jobs..." value={query} onChange={e => setQuery(e.target.value)} className="w-full p-2.75 border border-(--border) rounded-lg outline-0 bg-white" />
                        <label className="block mt-4.25 mb-1.5 text-[11px] font-extrabold text-[#55637a]">Category</label>
                        <select className="w-full p-2.75 border border-(--border) rounded-lg outline-0 bg-white">
                            <option>All Categories</option>
                            <option>Graphic Design</option>
                            <option>Web Development</option>
                            <option>Data Analysis</option>
                        </select >
                        <label className="block mt-4.25 mb-1.5 text-[11px] font-extrabold text-[#55637a]">Province</label>
                        <select className="w-full p-2.75 border border-(--border) rounded-lg outline-0 bg-white">
                            <option className="">All Provinces</option>
                            <option className="">Kabul</option>
                            <option className="">Nangarhar</option>
                            <option className="">Herat</option>
                        </select>
                        <label className="block mt-4.25 mb-1.5 text-[11px] font-extrabold text-[#55637a]">Budget</label>
                        <select className="w-full p-2.75 border border-(--border) rounded-lg outline-0 bg-white">
                            <option>All Budgets</option>
                            <option>Under $50</option>
                            <option>$50 - $200</option>
                            <option>$200+</option>
                        </select>
                    </aside>
                    <section className="grid gap-2.5">
                        {filtered.map(job => <JobCard  key={job.id} job={job} />)}
                    </section>
                </div>
            </div>
        </main>
    
    );
}
