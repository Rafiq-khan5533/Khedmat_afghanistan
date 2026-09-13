import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../App.css"
export default function Loader() {

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">

      {/* Icon */}
       <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
    <AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />
  </div>

      {/* Name */}

      {/* Loading text */}
      <p className="mt-3 text-sm text-gray-400">
        Loading...
      </p>

      {/* Loading bar */}

      <div className="h-1.5 w-56 overflow-hidden rounded-full bg-gray-700">
        <div className="h-full w-full origin-left animate-[loader_2.5s_linear_forwards] rounded-full bg-white" />
      </div>
    </div>
  );
}