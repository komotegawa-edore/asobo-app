"use client";

import { useState } from "react";
import { Bell, Search, Sparkles, Mic, Music, Palette, Trophy } from "lucide-react";
import StatusBar from "@/components/mock/StatusBar";
import BottomTabBar from "@/components/mock/BottomTabBar";
import FestivalCard from "@/components/mock/FestivalCard";
import { categories } from "@/data/mock/categories";
import { festivals } from "@/data/mock/festivals";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Sparkles,
  Mic,
  Music,
  Palette,
  Trophy,
};

export default function FestivalsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? festivals
      : festivals.filter((f) => f.category === activeCategory);

  return (
    <>
      <StatusBar />
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <img src="/images/logo/text.png" alt="ASOBO" className="h-6" />
        <button className="w-9 h-9 rounded-full bg-cream flex items-center justify-center">
          <Bell size={18} className="text-ink-soft" strokeWidth={2} />
        </button>
      </div>

      {/* Search bar */}
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2 bg-cream rounded-full px-4 py-2.5">
          <Search size={16} className="text-ink-mute" strokeWidth={2} />
          <span className="text-sm text-ink-mute">イベントを探す</span>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 px-4 mb-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => {
          const active = activeCategory === cat.id;
          const Icon = iconMap[cat.icon];
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-colors ${
                active
                  ? "bg-coral text-white"
                  : "bg-cream text-ink-soft"
              }`}
            >
              {Icon && (
                <Icon
                  size={14}
                  strokeWidth={2.2}
                  className={active ? "text-white" : "text-ink-mute"}
                />
              )}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Festival list */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
        {filtered.map((f) => (
          <FestivalCard
            key={f.id}
            id={f.id}
            title={f.title}
            image={f.image}
            location={f.location}
            date={f.date}
            participantIds={f.participantIds}
          />
        ))}
      </div>

      <BottomTabBar />
    </>
  );
}
