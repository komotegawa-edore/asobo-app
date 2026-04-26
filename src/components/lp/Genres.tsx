import Image from "next/image";

const genres = [
  {
    image: "/images/photos/concert-large.png",
    badge: "ライブ",
    badgeColor: "text-[#7B5BB6]",
    title: "J-POPライブ",
    desc: "一緒に盛り上がれるイベントが多数！",
  },
  {
    image: "/images/photos/beer-large.png",
    badge: "フェス",
    badgeColor: "text-[#FF8B5C]",
    title: "クラフトビールフェス",
    desc: "美味しいビールと出会いを楽しもう！",
  },
  {
    image: "/images/photos/gallery-large.png",
    badge: "アート",
    badgeColor: "text-[#A89878]",
    title: "アート展示",
    desc: "感性が刺激される展示会へ。",
  },
  {
    image: "/images/photos/stadium-large.png",
    badge: "スポーツ",
    badgeColor: "text-[#3A9B8E]",
    title: "サッカー観戦",
    desc: "スタジアムで一体感を味わおう！",
  },
];

export default function Genres() {
  return (
    <section id="genres" className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <p className="text-center text-ink-mute text-[13px] font-bold tracking-[.18em] mb-2">
          EVENT GENRES
        </p>
        <h2 className="text-center text-[24px] sm:text-[30px] font-black mb-3">
          人気の<span className="text-coral">イベントジャンル</span>
        </h2>
        <p className="text-center text-ink-soft text-[13px] font-bold mb-10">
          <span className="text-coral">📍</span> まずは大阪エリアを中心にスタート予定
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {genres.map((g, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-line bg-white"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div className="h-[180px] sm:h-[160px] lg:h-[180px] relative overflow-hidden">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  className="object-cover scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className={`absolute left-3 bottom-3 bg-white px-3 py-1 rounded-md text-[12px] font-black ${g.badgeColor} z-[1]`}
                >
                  {g.badge}
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-[16px] font-black mb-1.5">{g.title}</h4>
                <p className="text-[13px] text-ink-soft m-0 leading-[1.6]">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
