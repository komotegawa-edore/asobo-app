import { Send, ImageIcon, ChevronLeft, Users } from "lucide-react";
import Link from "next/link";
import StatusBar from "@/components/mock/StatusBar";
import ChatBubble from "@/components/mock/ChatBubble";
import { chatMessages } from "@/data/mock/chats";
import { groups } from "@/data/mock/groups";
import { getUserById } from "@/data/mock/users";

export function generateStaticParams() {
  return groups.map((g) => ({ id: g.id }));
}

export default async function ChatRoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = groups.find((g) => g.id === id);
  if (!group) return null;

  const messages = chatMessages.filter((m) => m.groupId === id);

  return (
    <>
      <StatusBar />
      {/* Header - no bottom tab */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line shrink-0">
        <Link
          href="/mock/chats"
          className="flex items-center gap-0.5 text-ink-soft no-underline"
        >
          <ChevronLeft size={22} />
          <span className="text-sm">戻る</span>
        </Link>
        <div className="text-center">
          <h3 className="text-sm font-bold text-ink">{group.name}</h3>
          <span className="text-[11px] text-ink-mute flex items-center justify-center gap-0.5">
            <Users size={11} strokeWidth={2} />
            {group.memberIds.length}人のメンバー
          </span>
        </div>
        <div className="w-14" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-white">
        {messages.map((msg) => {
          const user = getUserById(msg.senderId);
          return (
            <ChatBubble
              key={msg.id}
              text={msg.text}
              time={msg.time}
              senderName={user?.name ?? ""}
              senderAvatar={user?.avatar ?? ""}
              isMe={msg.senderId === "me"}
            />
          );
        })}
      </div>

      {/* Input bar (decorative) */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-line bg-white shrink-0">
        <button className="w-9 h-9 rounded-full bg-cream flex items-center justify-center shrink-0">
          <ImageIcon size={18} className="text-ink-mute" strokeWidth={2} />
        </button>
        <div className="flex-1 bg-cream rounded-full px-4 py-2">
          <span className="text-sm text-ink-mute">メッセージを入力</span>
        </div>
        <button className="w-9 h-9 rounded-full bg-coral flex items-center justify-center shrink-0">
          <Send size={16} className="text-white" strokeWidth={2} />
        </button>
      </div>
    </>
  );
}
