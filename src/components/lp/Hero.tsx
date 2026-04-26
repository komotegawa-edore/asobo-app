import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-14 pb-20 md:py-14 md:pb-20">
      {/* Decorative blobs */}
      <Image
        src="/images/blobs/red.png"
        alt=""
        width={280}
        height={280}
        className="absolute -top-8 -left-16 opacity-40 pointer-events-none z-[1]"
      />
      <Image
        src="/images/blobs/blue.png"
        alt=""
        width={180}
        height={180}
        className="absolute top-16 -right-10 opacity-50 pointer-events-none z-[1]"
      />
      <Image
        src="/images/blobs/yellow.png"
        alt=""
        width={160}
        height={160}
        className="absolute bottom-0 -left-5 opacity-60 pointer-events-none z-[1]"
      />
      <Image
        src="/images/decorations/confetti.png"
        alt=""
        width={350}
        height={105}
        className="absolute top-6 right-[10%] opacity-40 pointer-events-none z-[1]"
      />

      <div className="max-w-[1180px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-12 items-center relative z-[2]">
        {/* Copy */}
        <div>
          <h1 className="text-[30px] sm:text-[38px] lg:text-[54px] font-black leading-[1.3]">
            イベントに、
            <br />
            一緒に行ける
            <span className="relative text-coral" style={{ background: "linear-gradient(transparent 60%, #FFE3A8 60%)", padding: "0 4px" }}>
              友達
            </span>
            を
            <br />
            見つけよう。
          </h1>
          <p className="text-[17px] text-ink-soft mt-6 mb-4 max-w-[480px]">
            ライブ・フェス・展示会・スポーツ観戦など、
            <br className="hidden sm:block" />
            共通の趣味をきっかけに自然につながれる
            <br className="hidden sm:block" />
            マッチングアプリ。
          </p>
          <span className="inline-flex items-center gap-2 px-4 py-2 pl-2.5 rounded-full bg-[#FFF1E8] text-coral-deep text-[13px] font-bold mb-8">
            <span className="w-[18px] h-[18px] rounded-full bg-coral text-white inline-flex items-center justify-center text-[11px]">
              ✓
            </span>
            20〜30代の社会人向け / ユーザー投稿型でスタート
          </span>
          <div className="flex gap-4 flex-wrap">
            <a href="#cta" className="btn btn-primary !py-4 !px-7 !text-[15px]">
              無料ではじめる<span className="arr">→</span>
            </a>
            <a href="#genres" className="btn btn-outline !py-4 !px-7 !text-[15px]">
              イベントを見てみる<span className="arr">→</span>
            </a>
          </div>
        </div>

        {/* Phones */}
        <div className="relative h-[480px] lg:h-[540px] flex justify-center items-center">
          {/* Phone Left: Event Detail */}
          <div className="phone absolute -translate-x-[150px] -rotate-[8deg] translate-y-5 z-[2]">
            <div className="screen">
              <Image
                src="/images/screens/event-detail.png"
                alt="イベント詳細画面"
                fill
                className="object-cover object-top rounded-[30px]"
              />
            </div>
          </div>

          {/* Phone Center: Home */}
          <div className="phone absolute -translate-y-2.5 z-[3]">
            <div className="screen">
              <Image
                src="/images/screens/home.png"
                alt="ホーム画面"
                fill
                className="object-cover object-top rounded-[30px]"
              />
            </div>
          </div>

          {/* Phone Right: Chat */}
          <div className="phone absolute translate-x-[150px] rotate-[8deg] translate-y-5 z-[2]">
            <div className="screen">
              <Image
                src="/images/screens/chat.png"
                alt="チャット画面"
                fill
                className="object-cover object-top rounded-[30px]"
              />
            </div>
          </div>

          {/* People group decoration */}
          <Image
            src="/images/people/people_group1_full.png"
            alt=""
            width={320}
            height={100}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-[4] drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
