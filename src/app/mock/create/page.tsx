"use client";

import { useState } from "react";
import { ImagePlus, Calendar, MapPin, Users, Tag, Sparkles, Mic, Music, Palette, Trophy } from "lucide-react";
import BottomTabBar from "@/components/mock/BottomTabBar";

const categoryOptions = [
  { id: "live", label: "ライブ", icon: Mic },
  { id: "fes", label: "フェス", icon: Music },
  { id: "art", label: "アート", icon: Palette },
  { id: "sports", label: "スポーツ", icon: Trophy },
];

export default function CreatePage() {
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mb-4">
            <Sparkles size={32} className="text-coral" strokeWidth={1.8} />
          </div>
          <h2 className="text-lg font-bold text-ink mb-2">投稿しました！</h2>
          <p className="text-sm text-ink-mute text-center mb-6">
            イベントが公開されました。<br />参加者を待ちましょう！
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn btn-outline text-sm"
          >
            もう一つ投稿する
          </button>
        </div>
        <BottomTabBar />
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="px-4 lg:px-6 pt-4 pb-2 shrink-0">
        <h2 className="text-lg font-bold text-ink">イベントを投稿</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 lg:px-6 pb-4">
        <div className="max-w-lg space-y-5 pt-2">
          {/* Photo */}
          <div className="w-full h-44 lg:h-56 rounded-2xl border-2 border-dashed border-line flex flex-col items-center justify-center gap-2 bg-cream/50 cursor-pointer hover:border-coral/40 transition-colors">
            <ImagePlus size={32} className="text-ink-mute" strokeWidth={1.5} />
            <span className="text-sm text-ink-mute">カバー写真を追加</span>
          </div>

          {/* Title */}
          <div>
            <label className="text-xs font-bold text-ink-mute block mb-1.5">
              イベント名
            </label>
            <input
              type="text"
              placeholder="例: サマソニ一緒に行こう！"
              className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-mute focus:ring-2 focus:ring-coral/30"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-bold text-ink-mute block mb-1.5">
              カテゴリ
            </label>
            <div className="flex gap-2 flex-wrap">
              {categoryOptions.map((cat) => {
                const active = category === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-colors ${
                      active
                        ? "bg-coral text-white"
                        : "bg-cream text-ink-soft"
                    }`}
                  >
                    <Icon size={14} strokeWidth={2.2} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-xs font-bold text-ink-mute block mb-1.5">
              <Calendar size={13} className="inline mr-1" strokeWidth={2} />
              日程
            </label>
            <input
              type="text"
              placeholder="例: 2026年8月15日"
              className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-mute focus:ring-2 focus:ring-coral/30"
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-xs font-bold text-ink-mute block mb-1.5">
              <MapPin size={13} className="inline mr-1" strokeWidth={2} />
              場所
            </label>
            <input
              type="text"
              placeholder="例: 幕張メッセ"
              className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-mute focus:ring-2 focus:ring-coral/30"
            />
          </div>

          {/* Max members */}
          <div>
            <label className="text-xs font-bold text-ink-mute block mb-1.5">
              <Users size={13} className="inline mr-1" strokeWidth={2} />
              募集人数
            </label>
            <input
              type="text"
              placeholder="例: 5"
              className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-mute focus:ring-2 focus:ring-coral/30"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="text-xs font-bold text-ink-mute block mb-1.5">
              <Tag size={13} className="inline mr-1" strokeWidth={2} />
              タグ
            </label>
            <input
              type="text"
              placeholder="例: 初参加OK, 20代中心"
              className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-mute focus:ring-2 focus:ring-coral/30"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-bold text-ink-mute block mb-1.5">
              説明
            </label>
            <textarea
              rows={4}
              placeholder="グループの雰囲気や当日の予定などを書いてみましょう"
              className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-mute resize-none focus:ring-2 focus:ring-coral/30"
            />
          </div>

          {/* Submit */}
          <button
            onClick={() => setSubmitted(true)}
            className="btn btn-primary w-full lg:w-auto justify-center text-sm"
          >
            投稿する
          </button>
        </div>
      </div>

      <BottomTabBar />
    </>
  );
}
