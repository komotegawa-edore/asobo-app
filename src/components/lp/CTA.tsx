import Image from "next/image";

export default function CTA() {
  return (
    <section
      id="cta"
      className="cta-section py-20 pb-24 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFB6A8 0%, var(--coral) 50%, #FF8B5C 100%)",
      }}
    >
      <div className="absolute w-[300px] h-[300px] rounded-full bg-white/10 -top-24 -left-20" />
      <div className="absolute w-[240px] h-[240px] rounded-full bg-[rgba(255,212,102,0.3)] -bottom-20 -right-16" />

      {/* Confetti decoration */}
      <Image
        src="/images/decorations/confetti.png"
        alt=""
        width={250}
        height={75}
        className="absolute top-8 right-[5%] opacity-30 pointer-events-none"
      />

      <div className="max-w-[1180px] mx-auto px-7 text-center relative z-[2]">
        <h2 className="text-[24px] sm:text-[34px] font-black mb-2">
          まず気になるイベントから、つながってみよう。
        </h2>
        <p className="text-base opacity-95 mb-8">ASOBOで、最高の週末を。</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="btn btn-primary !py-4 !px-7 !text-[15px]">
            無料ではじめる<span className="arr">→</span>
          </a>
          <a href="#" className="btn btn-outline !py-4 !px-7 !text-[15px]">
            イベントを見る<span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
