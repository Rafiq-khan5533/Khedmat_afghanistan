import { Link } from "react-router-dom";
import { FiMapPin, FiStar, FiCheckCircle } from "react-icons/fi";

export default function ProviderCard({ provider }) {
  
  console.log("actual", provider);
  return (
    <Link to={`/providers/${provider.id}`} className="overflow-hidden rounded-xl bg-white border border-(--border)  block w-full  hover:transition duration-200 hover:-translate-y-0.5">
      <img className="block h-40 w-full object-cover" src={provider.image} alt={provider.name} />
      <div className="p-4">
        <h3>{provider.name} {provider.verified && <FiCheckCircle className=" text-(--primary) text-[15px]  " />}</h3>
        <span className=" text-(--muted) text-[11px] ">{provider.category}</span>
        <div className="flex items-center gap-1 text-(--muted) text-[11px] mt-2.25 "><FiMapPin /> {provider.location}</div>
        <div className="rating inline-flex items-center gap-1 text-[#f59e0b] text-[11px] font-extrabold mt-2.5"><FiStar /> {provider.rating} <span>$</span> ({provider.reviews})</div>
      </div>
    </Link>
  );
}