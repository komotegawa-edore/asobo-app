import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BackHeader({
  title,
  backHref,
  right,
}: {
  title: string;
  backHref: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-line shrink-0">
      <Link
        href={backHref}
        className="flex items-center gap-0.5 text-ink-soft no-underline"
      >
        <ChevronLeft size={22} />
        <span className="text-sm">戻る</span>
      </Link>
      <h3 className="text-sm font-bold truncate max-w-[60%] text-center">
        {title}
      </h3>
      <div className="w-14 flex justify-end">{right}</div>
    </div>
  );
}
