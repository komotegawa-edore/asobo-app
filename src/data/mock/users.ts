export type User = {
  id: string;
  name: string;
  age: number;
  area: string;
  avatar: string;
  tags: string[];
  bio: string;
};

export const me: User = {
  id: "me",
  name: "あなた",
  age: 26,
  area: "東京都",
  avatar: "/images/people/profile_card1.png",
  tags: ["邦ロック", "フェス好き", "カメラ"],
  bio: "音楽とカフェ巡りが好きです！",
};

export const users: User[] = [
  {
    id: "u1",
    name: "ゆうき",
    age: 25,
    area: "東京都",
    avatar: "/images/people/people_group1_person1.png",
    tags: ["邦ロック", "フェス初心者"],
    bio: "ロックが好き！一緒に盛り上がりたい",
  },
  {
    id: "u2",
    name: "あやか",
    age: 24,
    area: "神奈川県",
    avatar: "/images/people/people_group1_person2.png",
    tags: ["K-POP", "ダンス"],
    bio: "推し活仲間探してます",
  },
  {
    id: "u3",
    name: "たくや",
    age: 28,
    area: "千葉県",
    avatar: "/images/people/people_group1_person3.png",
    tags: ["EDM", "クラフトビール"],
    bio: "フェスは年5回ペース",
  },
  {
    id: "u4",
    name: "さくら",
    age: 23,
    area: "東京都",
    avatar: "/images/people/people_group1_person4.png",
    tags: ["アート", "写真"],
    bio: "美術館巡りが趣味です",
  },
  {
    id: "u5",
    name: "けんた",
    age: 27,
    area: "埼玉県",
    avatar: "/images/people/people_group2_person1.png",
    tags: ["サッカー", "ビール"],
    bio: "スポーツ観戦仲間募集！",
  },
  {
    id: "u6",
    name: "みく",
    age: 22,
    area: "東京都",
    avatar: "/images/people/people_group2_person2.png",
    tags: ["J-POP", "カフェ"],
    bio: "初めてのフェス、誰か一緒に行きませんか？",
  },
  {
    id: "u7",
    name: "りょう",
    age: 29,
    area: "神奈川県",
    avatar: "/images/people/people_group2_person3.png",
    tags: ["テクノ", "旅行"],
    bio: "国内外のフェスに参加してます",
  },
  {
    id: "u8",
    name: "ひなた",
    age: 24,
    area: "東京都",
    avatar: "/images/people/people_group2_person4.png",
    tags: ["アニメ", "コスプレ"],
    bio: "イベント大好き！気軽に話しかけてね",
  },
];

export function getUserById(id: string): User | undefined {
  if (id === "me") return me;
  return users.find((u) => u.id === id);
}
