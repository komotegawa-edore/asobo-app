import Link from "next/link";
import { Users } from "lucide-react";

export default function ChatListItem({
  groupId,
  groupName,
  festivalName,
  lastMessage,
  lastTime,
  unread,
}: {
  groupId: string;
  groupName: string;
  festivalName: string;
  lastMessage: string;
  lastTime: string;
  unread: number;
}) {
  return (
    <Link
      href={`/mock/chats/${groupId}`}
      className="flex items-center gap-3 px-4 py-3.5 border-b border-line no-underline"
    >
      <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center shrink-0">
        <Users size={20} className="text-coral" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-sm font-bold text-ink truncate">
            {groupName}
          </span>
          <span className="text-[11px] text-ink-mute shrink-0 ml-2">
            {lastTime}
          </span>
        </div>
        <p className="text-[11px] text-ink-mute mb-0.5 truncate">
          {festivalName}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-ink-soft truncate">{lastMessage}</p>
          {unread > 0 && (
            <span className="ml-2 shrink-0 w-5 h-5 rounded-full bg-coral text-white text-[10px] font-bold flex items-center justify-center">
              {unread}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
