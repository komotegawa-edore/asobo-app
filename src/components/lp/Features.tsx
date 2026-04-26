import Image from "next/image";

const features = [
  {
    icon: "/images/icons/edit.png",
    title: "イベント投稿型",
    desc: "まずはユーザー投稿型で、\n気になるイベントを自由に募集。",
    color: "coral",
    gradient: "from-[#FF8090] to-coral",
    barColor: "bg-coral",
  },
  {
    icon: "/images/icons/music.png",
    title: "共通の趣味でつながる",
    desc: "音楽・アート・スポーツなど\n豊富なジャンル。",
    color: "yellow",
    gradient: "from-[#FFE08A] to-[#FFB54A]",
    barColor: "bg-yellow",
  },
  {
    icon: "/images/icons/person.png",
    title: "一緒に行く相手を探せる",
    desc: "イベントごとに興味のある人を\n見つけてメッセージ。",
    color: "teal",
    gradient: "from-[#7BD8CC] to-teal",
    barColor: "bg-teal",
  },
  {
    icon: "/images/icons/shield.png",
    title: "安心・安全設計",
    desc: "本人確認・通報・ブロック・\nガイド機能を搭載。",
    color: "sky",
    gradient: "from-[#9DD6F0] to-sky",
    barColor: "bg-sky",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-18 bg-paper">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-center text-ink-mute text-[13px] font-bold tracking-[.18em] mb-2">
          FEATURES
        </p>
        <h2 className="text-center text-[24px] sm:text-[30px] font-black mb-10">
          ASOBO<span className="text-coral">の特徴</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
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
                <Image src={f.icon} alt="" width={28} height={28} className="brightness-0 invert" />
              </div>
              <h3 className="text-base font-black mb-2">{f.title}</h3>
              <p className="text-[13px] text-ink-soft m-0 leading-[1.7] whitespace-pre-line">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
