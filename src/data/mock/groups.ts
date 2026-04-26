export type Group = {
  id: string;
  name: string;
  festivalId: string;
  tags: string[];
  maxMembers: number;
  memberIds: string[];
  organizerId: string;
  description: string;
};

export const groups: Group[] = [
  {
    id: "g1",
    name: "サマソニ初参加組",
    festivalId: "f1",
    tags: ["初参加OK", "20代中心", "男女mix"],
    maxMembers: 6,
    memberIds: ["u1", "u6", "u2"],
    organizerId: "u1",
    description: "サマソニ初めての人集まれ！みんなで楽しみましょう。当日は一緒に回る予定です。",
  },
  {
    id: "g2",
    name: "ビール好き集合",
    festivalId: "f2",
    tags: ["お酒好き", "20代〜30代", "まったり"],
    maxMembers: 5,
    memberIds: ["u3", "u5", "u7"],
    organizerId: "u3",
    description: "クラフトビール飲み比べしましょう！ビール初心者も大歓迎です。",
  },
  {
    id: "g3",
    name: "アート巡りしよ",
    festivalId: "f3",
    tags: ["アート好き", "カメラOK", "少人数"],
    maxMembers: 4,
    memberIds: ["u4", "u8"],
    organizerId: "u4",
    description: "一緒にアート展示を回りませんか？写真撮影しながらゆっくり楽しみたいです。",
  },
];

export function getGroupById(id: string): Group | undefined {
  return groups.find((g) => g.id === id);
}

export function getGroupsByFestivalId(festivalId: string): Group[] {
  return groups.filter((g) => g.festivalId === festivalId);
}
