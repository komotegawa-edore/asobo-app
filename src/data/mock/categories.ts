export type Category = {
  id: string;
  label: string;
  icon: string; // lucide-react icon name
};

export const categories: Category[] = [
  { id: "all", label: "すべて", icon: "Sparkles" },
  { id: "live", label: "ライブ", icon: "Mic" },
  { id: "fes", label: "フェス", icon: "Music" },
  { id: "art", label: "アート", icon: "Palette" },
  { id: "sports", label: "スポーツ", icon: "Trophy" },
];
