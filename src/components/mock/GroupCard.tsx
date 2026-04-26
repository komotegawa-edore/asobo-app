import Link from "next/link";
import { Users } from "lucide-react";
import Badge from "./Badge";
import MemberAvatarStack from "./MemberAvatarStack";

export default function GroupCard({
  id,
  name,
  tags,
  memberIds,
  maxMembers,
}: {
  id: string;
  name: string;
  tags: string[];
  memberIds: string[];
  maxMembers: number;
}) {
  const remaining = maxMembers - memberIds.length;

  return (
    <Link
      href={`/mock/groups/${id}`}
      className="block rounded-2xl border border-line p-3.5 bg-white no-underline"
      style={{ boxShadow: "var(--shadow)" }}
    >
      <h4 className="text-sm font-bold text-ink mb-2">{name}</h4>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <MemberAvatarStack userIds={memberIds} size={28} />
        <div className="flex items-center gap-1 text-xs text-ink-mute">
          <Users size={14} strokeWidth={2} />
          <span>
            {memberIds.length}/{maxMembers}人（残り{remaining}枠）
          </span>
        </div>
      </div>
    </Link>
  );
}
