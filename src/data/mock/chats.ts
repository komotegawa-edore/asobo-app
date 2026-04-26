export type ChatMessage = {
  id: string;
  groupId: string;
  senderId: string;
  text: string;
  time: string;
};

export type ChatRoom = {
  groupId: string;
  groupName: string;
  festivalName: string;
  lastMessage: string;
  lastTime: string;
  unread: number;
};

export const chatRooms: ChatRoom[] = [
  {
    groupId: "g1",
    groupName: "サマソニ初参加組",
    festivalName: "SUMMER SONIC 2026",
    lastMessage: "楽しみですね！何時に集合しますか？",
    lastTime: "14:32",
    unread: 3,
  },
  {
    groupId: "g2",
    groupName: "ビール好き集合",
    festivalName: "CRAFT BEER FESTIVAL",
    lastMessage: "おすすめのブルワリーありますか？",
    lastTime: "昨日",
    unread: 0,
  },
  {
    groupId: "g3",
    groupName: "アート巡りしよ",
    festivalName: "TOKYO ART EXHIBITION",
    lastMessage: "チームラボの展示、絶対見たい！",
    lastTime: "月曜",
    unread: 1,
  },
];

export const chatMessages: ChatMessage[] = [
  { id: "m1", groupId: "g1", senderId: "u1", text: "グループ作りました！よろしくお願いします", time: "10:00" },
  { id: "m2", groupId: "g1", senderId: "u6", text: "よろしくお願いします！初サマソニ楽しみです", time: "10:15" },
  { id: "m3", groupId: "g1", senderId: "u2", text: "私も初めてです！一緒に楽しみましょう〜", time: "10:30" },
  { id: "m4", groupId: "g1", senderId: "me", text: "参加します！みなさんよろしくです", time: "11:00" },
  { id: "m5", groupId: "g1", senderId: "u1", text: "おお！嬉しい！当日のタイムテーブル見ました？", time: "11:05" },
  { id: "m6", groupId: "g1", senderId: "me", text: "見ました！Vaundyは絶対行きたいです", time: "11:20" },
  { id: "m7", groupId: "g1", senderId: "u6", text: "私もVaundy見たい！あとYOASOBIも！", time: "12:00" },
  { id: "m8", groupId: "g1", senderId: "u2", text: "NewJeansも気になる…時間かぶってないかな", time: "13:45" },
  { id: "m9", groupId: "g1", senderId: "u1", text: "楽しみですね！何時に集合しますか？", time: "14:32" },
];

export function getMessagesByGroupId(groupId: string): ChatMessage[] {
  return chatMessages.filter((m) => m.groupId === groupId);
}
