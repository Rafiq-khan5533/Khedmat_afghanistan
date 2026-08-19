// import DashboardSidebar from "../components/DashboardSidbar";
// import StatCard from "../components/StatCard";
// import { jobs } from "../data/mock";

// export default function Dashboard() {
//   return (
//     <main className="dashboard-page">
//       <div className="dashboard-layout">
//         <DashboardSidebar />
//         <section className="dashboard-content">
//           <div className="dashboard-header">
//             <div><span className="eyebrow">USER DASHBOARD</span><h1>Welcome back, Rafiq Khan</h1></div>
//             <button className="btn btn-primary">Add New Service</button>
//           </div>
//           <div className="stats-grid">
//             <StatCard label="My Jobs" value="3" hint="Active" />
//             <StatCard label="Applications" value="7" hint="Total" />
//             <StatCard label="Favorites" value="12" hint="Saved" />
//             <StatCard label="Messages" value="5" hint="Unread" />
//           </div>
//           <div className="dashboard-card card">
//             <div className="card-heading"><h2>Recent Applications</h2><button className="text-link">View All</button></div>
//             <div className="table">
//               {jobs.slice(0,3).map(job => (
//                 <div className="table-row" key={job.id}><span>{job.title}</span><span>{job.location}</span><span className="status pending">Pending</span><span>{job.posted}</span></div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


import DashboardSidebar from "../components/DashboardSidbar";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr]">
      
      <DashboardSidebar />

      <main className="bg-gray-50 p-6">
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>
      </main>

    </div>
  );
}