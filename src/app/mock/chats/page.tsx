import { MessageCircle } from "lucide-react";
import BottomTabBar from "@/components/mock/BottomTabBar";
import ChatListItem from "@/components/mock/ChatListItem";
import { chatRooms } from "@/data/mock/chats";

export default function ChatsPage() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-2 px-4 lg:px-6 py-3 lg:py-4 border-b border-line shrink-0">
        <MessageCircle size={20} className="text-coral" strokeWidth={2} />
        <h2 className="text-base lg:text-lg font-bold text-ink">チャット</h2>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl">
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
      </div>

      <BottomTabBar />
    </>
  );
}
