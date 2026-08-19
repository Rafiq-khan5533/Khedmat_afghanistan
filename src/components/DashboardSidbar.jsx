import { NavLink } from "react-router-dom";
import { FiGrid, FiUser, FiBriefcase, FiHeart, FiMessageSquare, FiSettings, FiLogOut, FiTool, FiFileText } from "react-icons/fi";

const items = [
  ["Dashboard", "/dashboard", FiGrid],
  ["My Profile", "/dashboard", FiUser],
  ["My Services", "/dashboard", FiTool],
  ["My Jobs", "/dashboard", FiBriefcase],
  ["Applications", "/dashboard", FiFileText],
  ["Favorites", "/dashboard", FiHeart],
  ["Messages", "/dashboard", FiMessageSquare],
  ["Settings", "/dashboard", FiSettings],
];

export default function DashboardSidebar() {
  return (
    <aside className="bg-[#10203a] py-5.5 px-3 text-white min-h-screen">

  <div className="font-bold tracking-wide pt-0 pr-3 pb-6.25">
    Khedmat Afghanistan
  </div>

  {items.map(([label, path, Icon]) => (
    <NavLink
      key={label}
      to={path}
      className={({ isActive }) =>
  `flex items-center gap-2.5 w-full px-3 py-2.5 mb-1 rounded-lg text-sm font-medium transition duration-200 ${
    isActive && label === "Dashboard"
      ? "bg-(--primary) text-white"
      : "text-gray-300 hover:bg-white/10 hover:text-white"
  }`
}
    >
      <Icon />
      {label}
    </NavLink>
  ))}

  <button className="flex items-center gap-2.5 w-full px-3 py-2.5 mt-4 rounded-lg text-sm font-medium text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white">
    <FiLogOut />
    Logout
  </button>

</aside>
  );
}
