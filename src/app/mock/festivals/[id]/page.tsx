import Link from "next/link";
import { ChevronLeft, Heart, MapPin, Calendar, Ticket, Users } from "lucide-react";
import StatusBar from "@/components/mock/StatusBar";
import BottomTabBar from "@/components/mock/BottomTabBar";
import MemberAvatarStack from "@/components/mock/MemberAvatarStack";
import GroupCard from "@/components/mock/GroupCard";
import { festivals } from "@/data/mock/festivals";
import { getGroupsByFestivalId } from "@/data/mock/groups";

export function generateStaticParams() {
  return festivals.map((f) => ({ id: f.id }));
}

export default async function FestivalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const festival = festivals.find((f) => f.id === id);
  if (!festival) return null;

  const groups = getGroupsByFestivalId(id);

  return (
    <>
      <StatusBar />
      {/* Hero image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={festival.imageLarge}
          alt={festival.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <Link
            href="/mock/festivals"
            className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center no-underline"
          >
            <ChevronLeft size={20} className="text-ink" />
          </Link>
          <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
            <Heart size={18} className="text-coral" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-3">
          <h2 className="text-lg font-bold text-ink mb-2">{festival.title}</h2>
          <div className="space-y-1.5 mb-3">
            <div className="flex items-center gap-1.5 text-sm text-ink-soft">
              <MapPin size={15} strokeWidth={2} className="text-coral" />
              {festival.location}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-ink-soft">
              <Calendar size={15} strokeWidth={2} className="text-coral" />
              {festival.date}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-ink-soft">
              <Ticket size={15} strokeWidth={2} className="text-coral" />
              {festival.price}
            </div>
          </div>
          <p className="text-sm text-ink-soft leading-relaxed mb-4">
            {festival.description}
          </p>

          {/* Participants */}
          <div className="flex items-center gap-3 mb-5">
            <MemberAvatarStack userIds={festival.participantIds} size={28} />
            <span className="text-xs text-ink-mute">
              <Users size={13} className="inline mr-1" strokeWidth={2} />
              {festival.participantIds.length}人が参加予定
            </span>
          </div>

          {/* CTA */}
          <button className="btn btn-primary w-full justify-center text-sm mb-6">
            グループを探す
          </button>

          {/* Artists */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-ink mb-2">出演アーティスト</h3>
            <div className="flex flex-wrap gap-2">
              {festival.artists.map((artist) => (
                <span
                  key={artist}
                  className="px-3 py-1.5 bg-cream rounded-full text-xs font-medium text-ink-soft"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>

          {/* Groups */}
          {groups.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-bold text-ink mb-2">
                このフェスのグループ
              </h3>
              <div className="space-y-3">
                {groups.map((g) => (
                  <GroupCard
                    key={g.id}
                    id={g.id}
                    name={g.name}
                    tags={g.tags}
                    memberIds={g.memberIds}
                    maxMembers={g.maxMembers}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomTabBar />
    </>
  );
}
