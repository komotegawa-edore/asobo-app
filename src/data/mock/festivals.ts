export type Festival = {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  imageLarge: string;
  price: string;
  description: string;
  artists: string[];
  participantIds: string[];
};

export const festivals: Festival[] = [
  {
    id: "f1",
    title: "SUMMER SONIC 2026",
    category: "fes",
    date: "2026年8月15日〜16日",
    location: "ZOZOマリンスタジアム & 幕張メッセ",
    image: "/images/photos/concert.png",
    imageLarge: "/images/photos/concert-large.png",
    price: "¥16,000〜",
    description: "日本最大級の都市型フェス。国内外の豪華アーティストが集結する2日間。",
    artists: ["Aimer", "King Gnu", "Vaundy", "YOASOBI", "NewJeans"],
    participantIds: ["u1", "u2", "u3", "u6"],
  },
  {
    id: "f2",
    title: "CRAFT BEER FESTIVAL",
    category: "fes",
    date: "2026年9月5日〜6日",
    location: "横浜赤レンガ倉庫",
    image: "/images/photos/beer.png",
    imageLarge: "/images/photos/beer-large.png",
    price: "¥3,500〜",
    description: "全国50以上のブルワリーが集まるクラフトビールの祭典。フード出店も充実。",
    artists: ["DJ FUMIYA", "LUCKY TAPES", "Nulbarich"],
    participantIds: ["u3", "u5", "u7"],
  },
  {
    id: "f3",
    title: "TOKYO ART EXHIBITION",
    category: "art",
    date: "2026年10月10日〜12日",
    location: "東京国際フォーラム",
    image: "/images/photos/gallery.png",
    imageLarge: "/images/photos/gallery-large.png",
    price: "¥2,000〜",
    description: "現代アートの最前線を体感できる3日間。インスタレーション、映像作品など多数展示。",
    artists: ["チームラボ", "草間彌生", "村上隆"],
    participantIds: ["u4", "u8"],
  },
  {
    id: "f4",
    title: "J-LEAGUE ALL STAR",
    category: "sports",
    date: "2026年7月20日",
    location: "日産スタジアム",
    image: "/images/photos/stadium.png",
    imageLarge: "/images/photos/stadium-large.png",
    price: "¥5,500〜",
    description: "Jリーグオールスター戦。トップ選手が夢の共演を果たす特別な一日。",
    artists: ["三笘薫", "久保建英", "上田綺世"],
    participantIds: ["u5", "u7", "u1"],
  },
  {
    id: "f5",
    title: "ROCK IN JAPAN FES",
    category: "live",
    date: "2026年8月8日〜10日",
    location: "蘇我スポーツ公園",
    image: "/images/photos/concert.png",
    imageLarge: "/images/photos/concert-large.png",
    price: "¥14,000〜",
    description: "日本最大のロックフェス。3日間で100組以上のアーティストが出演。",
    artists: ["BUMP OF CHICKEN", "back number", "Mrs. GREEN APPLE", "マカロニえんぴつ"],
    participantIds: ["u1", "u2", "u6", "u8"],
  },
];

export function getFestivalById(id: string): Festival | undefined {
  return festivals.find((f) => f.id === id);
}
