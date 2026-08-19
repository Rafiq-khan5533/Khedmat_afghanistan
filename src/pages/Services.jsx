import { useMemo, useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import ServiceCard from "../components/ServiceCard";
import { categories, services } from "../data/mock";

export default function Services() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const filtered = useMemo(() => services.filter(s =>
    (category === "All Categories" || s.category === category) &&
    `${s.title} ${s.category} ${s.location}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category]);

  return (
    <main className="pt-13.75 pb-18.75 min-h-[65vh] bg-[#fbfcfe]">
      <div className="mx-auto w-[calc(100%-32px)] max-w-295">
        <div className="mb-8.75">
          <div>
            <span className=" text-(--primary) text-[11px] font-extrabold letter-spacing tracking-[0.8px]">EXPLORE</span>
            <h1 className="my-2 text-[38px] tracking-[-.8px]">Services</h1>
            <p className="text-(--muted) m-0">Find skilled providers for the work you need.</p>
          </div>
        </div>

        <div  className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-5 items-start">
          <aside className="border border-(--border) bg-white rounded-xl p-4">
            <h3 className="text-(--primary-dark) text-lg font-medium my-3">Categories</h3>
            <button className={`${category === "All Categories" ? "filter-active bg-(--primary) text-white" : ""} block w-full text-left border-0 p-2.25 rounded-[7px] text- text-xs`} onClick={() => setCategory("All Categories")}>All Categories</button>
            {categories.map(c => <button key={c.id} className={`${category === c.name ? "filter-active bg-(--primary) text-white" : ""} block w-full text-left border-0 t p-2.25 rounded-[7px]  text-xs `} onClick={() => setCategory(c.name)}>{c.name}</button>)}
          </aside>


          <section>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_190px_110px] gap-2 mb-4.5">
              <div className="min-w-0 flex items-center gap-2 border border-(--border) bg-white rounded-[9px] px-3 py-2">
                <FiSearch className="text-[#8290a4] shrink-0" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-full bg-transparent outline-none"
                />
              </div>
              <select className="border border-(--border) bg-white rounded-[9px] px-3  outline-none py-2">
                <option>All Provinces</option>
                <option>Nangarhar</option>
                <option>Kabul</option>
                <option>Herat</option>
              </select>

              <button className="flex items-center justify-center gap-2 text-white bg-(--primary) rounded-[9px] p-3 ">
                <FiFilter />
                Filter
              </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
