import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCheck, FiCheckCircle, FiMail, FiMapPin, FiMessageSquare, FiPhone, FiStar } from "react-icons/fi";
import { providers, services, providersDetails } from "../data/mock";

export default function ProviderProfile() {
  const { id } = useParams();
  const provider = providers.find(p => p.id === Number(id)) || providers[0];
  const providerDetail = providersDetails.find(provider=> provider.id=== Number(id)) || providersDetails[2];

  return (
    <main className="pt-13.75 pb-17.75 min-h-[65vh] bg-[#fbfcfe]">
      <div className="mx-auto w-[calc(100%-32px)] max-w-295">
        <Link to="/providers" className=" inline-flex items-center gap-1.5 text-(--primary) text-[12px] font-extrabold mb-4.5"><FiArrowLeft /> Providers</Link>
        <div className="p-6.25 border border-(--border) bg-white rounded-xl transition duration-200 overflow-hidden ">
          <div className="grid grid-cols-[85px_1fr] md:grid-cols-[85px_1fr_auto] gap-4.5 items-center">
            <img className="w-21.25  h-21.25 rounded-full object-cover" src={provider.image} alt={provider.name} />
            <div>
              <h1 className="m-[0 0 5px] text-[26px]">{provider.name} {provider.verified && <FiCheckCircle className=" text-(--primary) align-[-2px] text-[15px]" />}</h1>
              <p className="m-0 text-(--muted)">{provider.category}</p>
              <div className="meta flex items-center gap-1.25 text-(--primary) text-[11px] mt-2.25"><FiMapPin /> {provider.location}</div>
              <div className="rating inline-flex items-center gap-1 text-[#f59e0b] text-[11px] font-extrabold mt-2.5"><FiStar /> {provider.rating} ({provider.reviews} reviews)</div>
            </div>
            <div className="col-span-full md:col-span-1 flex flex-wrap gap-2 items-center">
              <button className="border-transparent inline-flex items-center justify-center gap-2 rounded-lg py-2.75 px-4.25 font-bold transition duration-200 text-white bg-(--primary) hover:bg-(--primary-dark) "><FiPhone /> Contact Provider</button>
              <button className="border border-[#a9c8f5] inline-flex items-center justify-center gap-2 rounded-lg py-2.75 px-4.25 font-bold transition duration-200 bg-white text-(--primary) hover:bg-[#eff6ff]"><FiMessageSquare /> Message</button>
            </div>
          </div>
            {/* {providerDetail.map(proProfile =>  */}
          <div key ={providerDetail.id}className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 py-5.5 px-0 mt-5.5 border-t border-(--border) border-b">
            <div>
              <span className="block text-[10px] text-(--muted) mb-1.25">Member Since</span>
              <strong className="block text-[10px]">{providerDetail.memberSince}</strong>
            </div>
            <div>
              <span className="block text-[10px] text-(--muted) mb-1.25">Experience</span>
              <strong className="block text-[10px]">{providerDetail.Experience}</strong>
            </div>
            <div>
              <span className="block text-[10px] text-(--muted) mb-1.25">Response Time</span>
              <strong className="block text-[10px]">{providerDetail.ResponseTime}</strong>
              </div>
            <div>
              <span className="block text-[10px] text-(--muted) mb-1.25">Phone</span>
              <strong className="block text-[10px]">{providerDetail.phone}</strong>
              </div>
            <div>
              <span className="block text-[10px] text-(--muted) mb-1.25">Email</span>
              <strong className="block text-[10px]">{providerDetail.Email}</strong>
            </div> 
              <div>
                
              </div>
          </div>
            {/* )} */}
          <div className="profile-body max-w-190 pt-2.5">
            <h2 className="text-[18px] mt-6.25">About Me</h2>
            <p>I am a professional local service provider with experience delivering reliable work. Contact me to discuss your requirements.</p>
            <h2 className="text-[18px] mt-6.25">My Services</h2>
            <ul className="check-list list-none p-0 grid gap-2.5 text-[#536177] text-[13px]">
              {provider.services?.map((service, index) => <li className="flex gap-1.75 items-center" key={index}><FiCheck className="text-(--success)" /> {service}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
