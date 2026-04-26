import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import BottomTabBar from "@/components/mock/BottomTabBar";
import BackHeader from "@/components/mock/BackHeader";
import Avatar from "@/components/mock/Avatar";
import Badge from "@/components/mock/Badge";
import { groups } from "@/data/mock/groups";
import { getFestivalById } from "@/data/mock/festivals";
import { getUserById } from "@/data/mock/users";

export function generateStaticParams() {
  return groups.map((g) => ({ id: g.id }));
}

export default async function GroupDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = groups.find((g) => g.id === id);
  if (!group) return null;

  const festival = getFestivalById(group.festivalId);
  const organizer = getUserById(group.organizerId);
  const members = group.memberIds.map(getUserById).filter(Boolean);
  const emptySlots = group.maxMembers - group.memberIds.length;

  return (
    <>
      <BackHeader
        title={group.name}
        backHref={festival ? `/mock/festivals/${festival.id}` : "/mock/festivals"}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 lg:px-8 pt-4 lg:pt-6 pb-4 max-w-2xl">
          {/* Group name & tags */}
          <h2 className="text-lg lg:text-xl font-bold text-ink mb-2">{group.name}</h2>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {group.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="coral" />
            ))}
          </div>

          {/* Festival link card */}
          {festival && (
            <Link
              href={`/mock/festivals/${festival.id}`}
              className="flex gap-3 p-3 lg:p-4 rounded-xl bg-cream border border-line mb-4 no-underline hover:border-coral/30 transition-colors"
            >
              <img
                src={festival.image}
                alt={festival.title}
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg object-cover shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs lg:text-sm font-bold text-ink truncate">
                  {festival.title}
                </p>
                <p className="text-[11px] lg:text-xs text-ink-mute flex items-center gap-1 mt-0.5">
                  <Calendar size={11} strokeWidth={2} />
                  {festival.date}
                </p>
                <p className="text-[11px] lg:text-xs text-ink-mute flex items-center gap-1 mt-0.5">
                  <MapPin size={11} strokeWidth={2} />
                  {festival.location}
                </p>
              </div>
            </Link>
          )}

          {/* Description */}
          <p className="text-sm lg:text-base text-ink-soft leading-relaxed mb-5">
            {group.description}
          </p>

          {/* Organizer */}
          {organizer && (
            <div className="mb-5">
              <h3 className="text-xs lg:text-sm font-bold text-ink-mute mb-2">
                主催者
              </h3>
              <div className="flex items-center gap-3">
                <Avatar src={organizer.avatar} size={44} />
                <div>
                  <p className="text-sm font-bold text-ink">{organizer.name}</p>
                  <p className="text-xs text-ink-mute">
                    {organizer.age}歳 / {organizer.area}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Members */}
          <div className="mb-6">
            <h3 className="text-xs lg:text-sm font-bold text-ink-mute mb-2">
              メンバー ({group.memberIds.length}/{group.maxMembers})
            </h3>
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {members.map(
                (user) =>
                  user && (
                    <div key={user.id} className="flex flex-col items-center gap-1">
                      <Avatar src={user.avatar} size={52} />
                      <span className="text-xs text-ink-soft font-medium">
                        {user.name}
                      </span>
                    </div>
                  )
              )}
              {/* Empty slots */}
              {Array.from({ length: emptySlots }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-[52px] h-[52px] rounded-full border-2 border-dashed border-line flex items-center justify-center">
                    <span className="text-lg text-ink-mute">+</span>
                  </div>
                  <span className="text-xs text-ink-mute">空き</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="btn btn-primary w-full lg:w-auto justify-center text-sm">
            このグループに参加する
          </button>
        </div>
      </div>

      <BottomTabBar />
    </>
  );
}
