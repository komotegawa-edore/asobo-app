import { Signal, Wifi, Battery } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-1 bg-white">
      <span className="text-xs font-bold" style={{ fontFamily: "Nunito, sans-serif" }}>
        9:41
      </span>
      <div className="flex items-center gap-1">
        <Signal size={14} strokeWidth={2} />
        <Wifi size={14} strokeWidth={2} />
        <Battery size={14} strokeWidth={2} />
      </div>
    </div>
  );
}
