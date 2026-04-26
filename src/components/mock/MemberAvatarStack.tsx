import { getUserById } from "@/data/mock/users";
import Avatar from "./Avatar";

export default function MemberAvatarStack({
  userIds,
  max = 4,
  size = 32,
}: {
  userIds: string[];
  max?: number;
  size?: number;
}) {
  const visible = userIds.slice(0, max);
  const remaining = userIds.length - max;

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {visible.map((id) => {
          const user = getUserById(id);
          if (!user) return null;
          return (
            <div
              key={id}
              className="rounded-full border-2 border-white"
              style={{ width: size + 4, height: size + 4 }}
            >
              <Avatar src={user.avatar} size={size} />
            </div>
          );
        })}
      </div>
      {remaining > 0 && (
        <span className="ml-1.5 text-xs text-ink-mute font-medium">
          +{remaining}
        </span>
      )}
    </div>
  );
}
