import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProviderCard from "../components/ProviderCard";
import { providers } from "../data/mock";

export default function Providers() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [province, setProvince] = useState("All Provinces");

  const filteredProviders = providers.filter((provider) => {
    const search = query.toLowerCase();

    const matchesSearch =
      provider.name.toLowerCase().includes(search) ||
      provider.category.toLowerCase().includes(search);

    const matchesCategory =
      category === "All Categories" ||
      provider.category.toLocaleLowerCase().includes(category.toLocaleLowerCase())

    const matchesProvince =
      province === "All Provinces" ||
      provider.location.toLowerCase().includes(province.toLowerCase());

    return matchesSearch && matchesCategory && matchesProvince;
  });


  return (
    <main className=" min-h-[65vh] p-[55px 0 75px] bg-[#fbfcfe] my-10">
      <div className="mx-auto w-[calc(100%-20px)] max-w-310">
        <div className=" mb-7.5"><span className="text-(--primary) text-[11px] font-black tracking-[.12em]">LOCAL EXPERTS</span><h1 className="my-2 mx-0 text-[38px] tracking-[-0.8px] ">Service Providers</h1><p className="m-0 text-(--muted)  ">Discover professionals by service and location.</p></div>



        <div className="grid grid-cols-1 md:grid-cols-[0.999fr_205px_205px] gap-2 mb-4.5">
          <div className="min-h-12 flex items-center gap-2 border border-(--border) rounded-lg px-3 bg-white">
            <FiSearch className="text-[#8290a4] shrink-0" />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search providers..."
              className="w-full outline-none bg-transparent"
            />
          </div>

          <select className="w-full border border-(--border) rounded-lg px-3 bg-white outline-none py-2 md:py-2" value={province} onChange={(e) => setProvince(e.target.value)} >
            <option selected>All Provinces</option>
            <option value ="Nangarhar">Nangarhar</option>
            <option value ="Kabul">Kabul</option>
            <option value ="Kandahar">Kandahar</option>
            <option value="Herat">Herat</option>
          </select>

          <select className="w-full border border-(--border) rounded-lg px-3 bg-white outline-none py-2" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option selected>All Categories</option>
            <option value="Software Engineer">Software Engineering</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Web Developer">Web Developer</option>
          </select>
        </div>


        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 ">

          {filteredProviders.map(provider => <ProviderCard key={provider.id} provider={provider} />)}
        </div>
      </div>
    </main>
  );
}
