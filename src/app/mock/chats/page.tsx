import { MessageCircle } from "lucide-react";
import StatusBar from "@/components/mock/StatusBar";
import BottomTabBar from "@/components/mock/BottomTabBar";
import ChatListItem from "@/components/mock/ChatListItem";
import { chatRooms } from "@/data/mock/chats";

export default function ChatsPage() {
  return (
    <>
      <StatusBar />
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
        <MessageCircle size={20} className="text-coral" strokeWidth={2} />
        <h2 className="text-base font-bold text-ink">チャット</h2>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        {chatRooms.map((room) => (
          <ChatListItem
            key={room.groupId}
            groupId={room.groupId}
            groupName={room.groupName}
            festivalName={room.festivalName}
            lastMessage={room.lastMessage}
            lastTime={room.lastTime}
            unread={room.unread}
          />
        ))}
      </div>

      <BottomTabBar />
    </>
  );
}
