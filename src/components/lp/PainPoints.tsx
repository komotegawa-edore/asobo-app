import Image from "next/image";

const pains = [
  {
    icon: "/images/icons/search.png",
    gradient: "from-[#FF8090] to-coral",
    label: "一緒に行く人が\n見つからない",
  },
  {
    icon: "/images/icons/plus.png",
    gradient: "from-[#FFD466] to-[#FFA84A]",
    label: "趣味の合う\n友達を増やしたい",
  },
  {
    icon: "/images/icons/heart.png",
    gradient: "from-[#7BD8CC] to-teal",
    label: "初参加でも安心して\nイベントに行きたい",
  },
];

export default function PainPoints() {
  return (
    <section className="py-18 bg-gradient-to-b from-white to-cream">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-center text-ink-mute text-[13px] font-bold tracking-[.18em] mb-2">
          PAIN POINTS
        </p>
        <h2 className="text-center text-[24px] sm:text-[30px] font-black mb-9">
          こんなお悩み、ありませんか？
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-7 px-6 border border-line flex items-center gap-4"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div
                className={`w-[54px] h-[54px] rounded-2xl shrink-0 flex items-center justify-center bg-gradient-to-br ${p.gradient}`}
              >
                <Image src={p.icon} alt="" width={28} height={28} className="brightness-0 invert" />
              </div>
              <div className="text-[15px] font-bold leading-[1.5] whitespace-pre-line">
                {p.label}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-9 text-[22px] text-coral">▼</div>
        <div className="mt-12 mx-auto max-w-[680px] text-center bg-white rounded-full py-4.5 px-7 border-2 border-dashed border-coral text-[18px] font-bold">
          <Image
            src="/images/logo/icon.png"
            alt=""
            width={28}
            height={28}
            className="inline-block mr-2 -mt-1.5 rounded-full"
          />
          ASOBOなら、イベントをきっかけに自然につながれる。
        </div>
      </div>
    </section>
  );
}
