import Avatar from "./Avatar";

export default function ChatBubble({
  text,
  time,
  senderName,
  senderAvatar,
  isMe,
}: {
  text: string;
  time: string;
  senderName: string;
  senderAvatar: string;
  isMe: boolean;
}) {
  if (isMe) {
    return (
      <div className="flex justify-end mb-3">
        <div className="flex flex-col items-end max-w-[75%]">
          <div className="bg-coral text-white rounded-2xl rounded-br-sm px-3.5 py-2">
            <p className="text-sm leading-relaxed">{text}</p>
          </div>
          <span className="text-[10px] text-ink-mute mt-0.5">{time}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2 mb-3">
      <Avatar src={senderAvatar} size={32} className="mt-1" />
      <div className="flex flex-col max-w-[75%]">
        <span className="text-[11px] text-ink-mute mb-0.5">{senderName}</span>
        <div className="bg-cream rounded-2xl rounded-bl-sm px-3.5 py-2">
          <p className="text-sm leading-relaxed text-ink">{text}</p>
        </div>
        <span className="text-[10px] text-ink-mute mt-0.5">{time}</span>
      </div>
    </div>
  );
}
