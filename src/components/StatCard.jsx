export default function StatCard({ label, value, hint }) {
  return (
    <div className="stat-card bg-white border border-(--border) rounded-[10px] p-4.5" >
      <span className="block text-(--muted) text-[10px]">{label}</span>
      <strong className="block text-[29px] my-1.75 mx-0">{value}</strong>
      <small className="block text-(--muted) text-[10px]">{hint}</small>
    </div>
  );
}

