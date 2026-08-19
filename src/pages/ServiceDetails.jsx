import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCheckCircle, FiMapPin, FiStar } from "react-icons/fi";
import { services, providers } from "../data/mock";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find(service => service.id === Number(id)) || services[0];
  const provider = providers.find(provider => provider.category.toLowerCase().includes(service.category.split(" ")[0].toLowerCase())) || providers[0];

  return (
    <main className="pt-13.75 pb-18.75 min-h-[65vh] bg-[#fbfcfe]">
      <div className="mx-auto w-[calc(100%-32px)] max-w-295">
        <Link to="/services" className=" inline-flex items-center gap-1.5 text-(--primary)! text-[14px] font-extrabold mb-4.5 "><FiArrowLeft /> Back to services</Link>
        <div className=" grid grid-cols-1 md:grid-cols-[1fr_320px] gap-5 items-start">
          <section className="detail-main p-7 bg-white border border-(--border) rounded-xl ">
            <div className=" grid place-items-center w-11 h-11 flex-[0_0_44px] rounded-[10px] bg-[#edf5ff] text-(--primary) text-[21px] ">{service.icon}</div>
            <span className="text-(--primary) text-[11px] font-extrabold tracking-[0.12em]">{service.category}</span>
            <h1 className="text-3xl font-normal">{service.title}</h1>
            <div className="flex items-center gap-1.25 text-(--muted) text-[11px] mt-2.25 "><FiMapPin /> {service.location}</div>
            <div className="rating inline-flex items-center gap-1 text-[#f59e0b] text-[11px] font-extrabold mt-2.5 "><FiStar /> {service.rating} ({service.reviews} reviews)</div>
            <hr className="border-t border-(--border) my-6.25 mx-0" />
            <h2 className="mt-7.5 text-[18px]">Service Description</h2>
            <p className="text-[#5d6b80]  ">Professional and reliable service from a local provider. Discuss your exact requirements, timing and price directly with the provider.</p>
            <h2 className="mt-7.5 text-[18px]">What is included</h2>
            <ul className="check-list list-none p-0 grid gap-2.5 text-[#536177] text-[13px]">
              <li className="flex gap-1.75 items-center"><FiCheckCircle className="text-(--success)" /> Professional service</li>
              <li className="flex gap-1.75 items-center"><FiCheckCircle className="text-(--success)" /> Clear communication</li>
              <li className="flex gap-1.75 items-center"><FiCheckCircle className="text-(--success)" /> Local availability</li>
              <li className="flex gap-1.75 items-center"><FiCheckCircle className="text-(--success)" /> Customer support</li>
            </ul>
          </section>
          <aside className="border border-(--border) bg-white rounded-xl transition duration-200 overflow-hidden p-5.5 sticky top-22.5 ">
            <img className=" w-18 h-18 object-cover rounded-full" src={provider.image} alt={provider.name} />
            <h3 className="mt-3 mr-0 mb-2">{provider.name}</h3>
            <p className="text-xs text-[#7b7b7b]">{provider.category}</p>
            <div className=" inline-flex items-center gap-1 text-[#f59e0b] text-[11px] font-extrabold mt-2.5"><FiStar /> {provider.rating} ({provider.reviews})</div>
            <strong className=" block text-[20px] mt-5.5 mr-0 mb-4">From {service.price}</strong>
            <Link
              to={`/providers/${provider.id}`}
              className="w-full bg-(--primary) text-white hover:bg-(--primary-dark) border border-transparent inline-flex items-center justify-center gap-2 rounded-[9px] py-2.75 px-4.25 font-bold transition duration-200"
            >
              View Provider
            </Link>
            <button
              className="w-full bg-white text-(--primary) hover:bg-[#eff6ff] border border-[#a9c8f5] inline-flex items-center justify-center gap-2 rounded-[9px] py-2.75 px-4.25 font-bold transition duration-200 my-2"
            >
              Contact Provider
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}

