"use client";

import { useState } from "react";
import { Search, MapPin, TrendingUp, Sparkles, Mic, Music, Palette, Trophy } from "lucide-react";
import BottomTabBar from "@/components/mock/BottomTabBar";
import FestivalCard from "@/components/mock/FestivalCard";
import { festivals } from "@/data/mock/festivals";

const trendingTags = ["サマソニ", "ロッキン", "クラフトビール", "チームラボ", "Jリーグ", "花火大会", "野外フェス"];

const categoryCards = [
  { id: "live", label: "ライブ", icon: Mic, color: "bg-coral/10 text-coral" },
  { id: "fes", label: "フェス", icon: Music, color: "bg-lavender/20 text-lavender" },
  { id: "art", label: "アート", icon: Palette, color: "bg-teal/10 text-teal" },
  { id: "sports", label: "スポーツ", icon: Trophy, color: "bg-yellow/20 text-ink-soft" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = query
    ? festivals.filter(
        (f) =>
          f.title.toLowerCase().includes(query.toLowerCase()) ||
          f.location.includes(query) ||
          f.artists.some((a) => a.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <>
      {/* Header */}
      <div className="px-4 lg:px-6 pt-4 pb-2 shrink-0">
        <h2 className="text-lg font-bold text-ink mb-3">さがす</h2>
        {/* Search input */}
        <div className="flex items-center gap-2 bg-cream rounded-full px-4 py-2.5">
          <Search size={16} className="text-ink-mute shrink-0" strokeWidth={2} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="イベント名・アーティスト・場所"
            className="bg-transparent text-sm text-ink outline-none w-full placeholder:text-ink-mute"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 lg:px-6 pb-4">
        {query ? (
          /* Search results */
          <div className="pt-3">
            <p className="text-xs text-ink-mute mb-3">
              {filtered.length}件の結果
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <Search size={40} className="text-line mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-sm text-ink-mute">該当するイベントがありません</p>
              </div>
            )}
          </div>
        ) : (
          /* Default: categories + trending */
          <>
            {/* Categories */}
            <div className="pt-4 mb-6">
              <h3 className="text-sm font-bold text-ink mb-3">カテゴリから探す</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categoryCards.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setQuery(cat.label)}
                      className={`flex flex-col items-center gap-2 py-5 rounded-2xl border border-line transition-colors hover:border-coral/30 ${cat.color}`}
                    >
                      <Icon size={28} strokeWidth={1.8} />
                      <span className="text-sm font-bold">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trending */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-1.5">
                <TrendingUp size={15} className="text-coral" strokeWidth={2} />
                トレンド
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-2 bg-cream rounded-full text-xs font-medium text-ink-soft hover:bg-coral/10 hover:text-coral transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Nearby */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-1.5">
                <MapPin size={15} className="text-coral" strokeWidth={2} />
                近くのイベント
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {festivals.slice(0, 2).map((f) => (
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
            </div>
          </>
        )}
      </div>

      <BottomTabBar />
    </>
  );
}
