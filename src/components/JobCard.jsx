import { Link } from "react-router-dom";
import { FiMapPin, FiClock, FiDollarSign } from "react-icons/fi";

export default function JobCard({ job }) {
  return (
    <Link to={`/jobs/${job.id}`} className="border border-(--border) bg-white rounded-xl transition duration-200 overflow-hidden p-3.75 flex gap-3  hover:-translate-y-1">
      <div className="grid place-items-center w-11 h-11 flex-none basis-11 rounded-[10px] bg-[#edf5ff] text-(--primary) text-[21px] ">▣</div>
      <div className="min-w-0 flex-1">
        <div className="w-full flex flex-row justify-between gap-2 ">
          <span className="inline-flex py-0.75 px-1.5 rounded-[5px] bg-[#eaf3ff] text-(--primary) text-[10px] font-extrabold ">New</span>
          <span className="text-(--muted) text-[11px] ">{job.posted}</span>
        </div>
        <h3 className="m-[7px 0 4px text-] text-[14px]">{job.title}</h3>
        <span className="text-(--muted) text-[11px] ">{job.category}</span>
        <div className="flex gap-3 flex-wrap mt-2.25 text-(--muted) text-[10px] ">
          <span className="inline-flex items-center gap-1"><FiMapPin /> {job.location}</span>
          <span className="inline-flex items-center gap-1"><FiDollarSign /> {job.budget}</span>
          <span className="inline-flex items-center gap-1"><FiClock /> {job.posted}</span>
        </div>
      </div>
    </Link>
  );
}
