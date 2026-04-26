import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";
import MemberAvatarStack from "./MemberAvatarStack";

export default function FestivalCard({
  id,
  title,
  image,
  location,
  date,
  participantIds,
}: {
  id: string;
  title: string;
  image: string;
  location: string;
  date: string;
  participantIds: string[];
}) {
  return (
    <Link
      href={`/mock/festivals/${id}`}
      className="block rounded-2xl border border-line overflow-hidden bg-white no-underline"
      style={{ boxShadow: "var(--shadow)" }}
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3.5">
        <h3 className="text-sm font-bold text-ink leading-tight mb-1.5">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-xs text-ink-mute mb-1">
          <MapPin size={13} strokeWidth={2} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-ink-mute mb-2.5">
          <Calendar size={13} strokeWidth={2} />
          <span>{date}</span>
        </div>
        <div className="flex items-center justify-between">
          <MemberAvatarStack userIds={participantIds} size={24} />
          <span className="text-[11px] text-ink-mute">
            {participantIds.length}人参加予定
          </span>
        </div>
      </div>
    </Link>
  );
}
