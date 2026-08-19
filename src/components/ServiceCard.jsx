import { Link } from "react-router-dom";
import { FiMapPin, FiStar } from "react-icons/fi";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className="border border-(--border) bg-white/90 rounded-xl  service-card">
      <div className="service-icon">{service.icon}</div>
      <div className="p-3.75">
        <h3 className="m-0 mb-1.25 text-[15px]">{service.title}</h3>
        <span className="text-(--muted) text-[11px]">{service.category}</span>
        <div className="mt-2.25 flex items-center gap-1.25 text-[11px] text-[#68758a]"><FiMapPin /> {service.location}</div>
        <div className="flex items-center justify-between mt-3 text-[11px]">
          <strong>From {service.price}</strong>
          <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-extrabold text-[#f59e0b]"><FiStar /> {service.rating} ({service.reviews})</span>
        </div>
      </div>
    </Link>
  );
}