import Image from "next/image";
import { Search, UserPlus, Heart } from "lucide-react";

const pains = [
  {
    icon: Search,
    gradient: "from-[#FF8090] to-[var(--coral)]",
    label: "一緒に行く人が\n見つからない",
  },
  {
    icon: UserPlus,
    gradient: "from-[#FFD466] to-[#FFA84A]",
    label: "趣味の合う\n友達を増やしたい",
  },
  {
    icon: Heart,
    gradient: "from-[#7BD8CC] to-[var(--teal)]",
    label: "初参加でも安心して\nイベントに行きたい",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-[var(--cream)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <p className="text-center text-ink-mute text-[13px] font-bold tracking-[.18em] mb-2">
          PAIN POINTS
        </p>
        <h2 className="text-center text-[24px] sm:text-[30px] font-black mb-9">
          こんなお悩み、ありませんか？
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-[20px] p-5 sm:p-7 px-5 sm:px-6 border border-line flex items-center gap-4"
                style={{ boxShadow: "var(--shadow)" }}
              >
                <div
                  className={`w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-2xl shrink-0 flex items-center justify-center bg-gradient-to-br ${p.gradient}`}
                >
                  <Icon size={24} color="#fff" strokeWidth={2.2} />
                </div>
                <div className="text-sm sm:text-[15px] font-bold leading-[1.5] whitespace-pre-line">
                  {p.label}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8 sm:mt-9 text-[22px] text-coral">▼</div>
        <div className="mt-8 sm:mt-12 mx-auto max-w-[680px] text-center bg-white rounded-full py-3 sm:py-4.5 px-5 sm:px-7 border-2 border-dashed border-coral text-sm sm:text-[18px] font-bold">
          <Image
            src="/images/logo/icon.png"
            alt=""
            width={28}
            height={28}
            className="inline-block mr-2 -mt-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full"
          />
          ASOBOなら、イベントをきっかけに自然につながれる。
        </div>
      </div>
    </section>
  );
}
