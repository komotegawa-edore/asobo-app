import { PenLine, Music, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "イベント投稿型",
    desc: "まずはユーザー投稿型で、\n気になるイベントを自由に募集。",
    gradient: "from-[#FF8090] to-[var(--coral)]",
    barColor: "bg-coral",
  },
  {
    icon: Music,
    title: "共通の趣味でつながる",
    desc: "音楽・アート・スポーツなど\n豊富なジャンル。",
    gradient: "from-[#FFE08A] to-[#FFB54A]",
    barColor: "bg-yellow",
  },
  {
    icon: Users,
    title: "一緒に行く相手を探せる",
    desc: "イベントごとに興味のある人を\n見つけてメッセージ。",
    gradient: "from-[#7BD8CC] to-[var(--teal)]",
    barColor: "bg-teal",
  },
  {
    icon: ShieldCheck,
    title: "安心・安全設計",
    desc: "本人確認・通報・ブロック・\nガイド機能を搭載。",
    gradient: "from-[#9DD6F0] to-[var(--sky)]",
    barColor: "bg-sky",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-paper">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <p className="text-center text-ink-mute text-[13px] font-bold tracking-[.18em] mb-2">
          FEATURES
        </p>
        <h2 className="text-center text-[24px] sm:text-[30px] font-black mb-10">
          ASOBO<span className="text-coral">の特徴</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-[22px] p-7 px-5 text-center border border-line relative"
                style={{ boxShadow: "var(--shadow)" }}
              >
                <div
                  className={`absolute -top-0.5 left-6 right-6 h-1 rounded-b-lg ${f.barColor}`}
                />
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${f.gradient}`}
                >
                  <Icon size={28} color="#fff" strokeWidth={2.2} />
                </div>
                <h3 className="text-base font-black mb-2">{f.title}</h3>
                <p className="text-[13px] text-ink-soft m-0 leading-[1.7] whitespace-pre-line">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
