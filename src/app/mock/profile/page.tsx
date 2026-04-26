import {
  Calendar,
  Heart,
  Users,
  ChevronRight,
  Settings,
  Star,
  Clock,
} from "lucide-react";
import StatusBar from "@/components/mock/StatusBar";
import BottomTabBar from "@/components/mock/BottomTabBar";
import Avatar from "@/components/mock/Avatar";
import Badge from "@/components/mock/Badge";
import { me } from "@/data/mock/users";

const stats = [
  { label: "イベント", value: "12", icon: Calendar },
  { label: "いいね", value: "48", icon: Heart },
  { label: "参加回数", value: "8", icon: Users },
];

const menuItems = [
  { label: "参加予定のイベント", icon: Calendar },
  { label: "過去のイベント", icon: Clock },
  { label: "お気に入り", icon: Star },
  { label: "設定", icon: Settings },
];

export default function ProfilePage() {
  return (
    <>
      <StatusBar />

      <div className="flex-1 overflow-y-auto">
        {/* Profile header */}
        <div className="flex flex-col items-center pt-8 pb-5 bg-gradient-to-b from-cream to-white">
          <Avatar src={me.avatar} size={88} className="mb-3" />
          <h2 className="text-lg font-bold text-ink">{me.name}</h2>
          <p className="text-sm text-ink-mute">
            {me.age}歳 / {me.area}
          </p>
          <p className="text-sm text-ink-soft mt-1">{me.bio}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 py-4 border-b border-line mx-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <Icon size={18} className="text-coral" strokeWidth={2} />
                <span
                  className="text-lg font-bold text-ink"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {s.value}
                </span>
                <span className="text-[11px] text-ink-mute">{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* Interest tags */}
        <div className="px-4 py-4 border-b border-line">
          <h3 className="text-xs font-bold text-ink-mute mb-2">興味タグ</h3>
          <div className="flex flex-wrap gap-2">
            {me.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="coral" />
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="px-4 py-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center justify-between py-3.5 border-b border-line"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-ink-mute" strokeWidth={2} />
                  <span className="text-sm text-ink">{item.label}</span>
                </div>
                <ChevronRight size={16} className="text-ink-mute" />
              </div>
            );
          })}
        </div>
      </div>

      <BottomTabBar />
    </>
  );
}
