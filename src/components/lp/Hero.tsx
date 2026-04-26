import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 pb-16 lg:py-14 lg:pb-20">
      {/* Decorative blobs */}
      <Image
        src="/images/blobs/red.png"
        alt=""
        width={280}
        height={280}
        className="absolute -top-8 -left-16 opacity-40 pointer-events-none z-[1] w-[140px] lg:w-[280px]"
      />
      <Image
        src="/images/blobs/blue.png"
        alt=""
        width={180}
        height={180}
        className="absolute top-16 -right-10 opacity-50 pointer-events-none z-[1] hidden sm:block"
      />
      <Image
        src="/images/blobs/yellow.png"
        alt=""
        width={160}
        height={160}
        className="absolute bottom-0 -left-5 opacity-60 pointer-events-none z-[1] hidden sm:block"
      />
      <Image
        src="/images/decorations/confetti.png"
        alt=""
        width={350}
        height={105}
        className="absolute top-6 right-[10%] opacity-40 pointer-events-none z-[1] hidden md:block"
      />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center relative z-[2]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <h1 className="text-[28px] sm:text-[38px] lg:text-[54px] font-black leading-[1.3]">
            イベントに、
            <br />
            一緒に行ける
            <span
              className="relative text-coral"
              style={{
                background: "linear-gradient(transparent 60%, #FFE3A8 60%)",
                padding: "0 4px",
              }}
            >
              友達
            </span>
            を
            <br />
            見つけよう。
          </h1>
          <p className="text-[15px] sm:text-[17px] text-ink-soft mt-4 sm:mt-6 mb-4 max-w-[480px] mx-auto lg:mx-0">
            ライブ・フェス・展示会・スポーツ観戦など、
            <br className="hidden sm:block" />
            共通の趣味をきっかけに自然につながれる
            <br className="hidden sm:block" />
            マッチングアプリ。
          </p>
          <span className="inline-flex items-center gap-2 px-4 py-2 pl-2.5 rounded-full bg-[#FFF1E8] text-coral-deep text-[11px] sm:text-[13px] font-bold mb-6 sm:mb-8">
            <span className="w-[18px] h-[18px] rounded-full bg-coral text-white inline-flex items-center justify-center text-[11px] shrink-0">
              ✓
            </span>
            20〜30代の社会人向け / ユーザー投稿型でスタート
          </span>
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
            <a href="#cta" className="btn btn-primary !py-3 sm:!py-4 !px-5 sm:!px-7 !text-[13px] sm:!text-[15px]">
              無料ではじめる<span className="arr">→</span>
            </a>
            <a href="#genres" className="btn btn-outline !py-3 sm:!py-4 !px-5 sm:!px-7 !text-[13px] sm:!text-[15px]">
              イベントを見てみる<span className="arr">→</span>
            </a>
          </div>
        </div>

        {/* Phones - CSS-based mockup */}
        <div className="flex flex-col items-center">
        <div className="relative h-[290px] sm:h-[360px] lg:h-[440px] w-full flex justify-center items-center">
          {/* Phone Left: Profile */}
          <div className="phone absolute max-sm:-translate-x-[62px] sm:-translate-x-[82px] lg:-translate-x-[120px] -rotate-[8deg] translate-y-5 z-[2]">
            <div className="screen">
              <div className="pt-[30px] px-3 pb-2 flex items-center gap-2 border-b border-[#F2EAE0]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD9D2] to-[var(--peach)]" />
                <div>
                  <div className="text-[10px] font-bold">たくみ</div>
                  <div className="text-[8px] text-ink-mute">28歳 / 東京</div>
                </div>
              </div>
              <div className="h-[120px] sm:h-[140px] lg:h-[160px] bg-gradient-to-br from-[#FFD9D2] to-[var(--lavender)]" />
              <div className="px-3 pt-2">
                <div className="flex gap-1 mb-1">
                  <span className="text-[8px] bg-[#FFF1E8] text-coral-deep px-2 py-0.5 rounded-full font-bold">ライブ</span>
                  <span className="text-[8px] bg-[#FFF1E8] text-coral-deep px-2 py-0.5 rounded-full font-bold">フェス</span>
                </div>
                <p className="text-[9px] text-ink-soft leading-[1.5] m-0">邦ロック大好き。週末のフェス仲間募集中！</p>
                <div className="text-[var(--yellow)] text-[9px] mt-1">★★★★★</div>
              </div>
            </div>
          </div>

          {/* Phone Center: Events */}
          <div className="phone absolute -translate-y-2.5 z-[3]">
            <div className="screen">
              <div className="pt-[26px] pb-2 text-center">
                <div className="text-[13px] font-black text-coral" style={{ fontFamily: "'Nunito', sans-serif" }}>ASOBO</div>
              </div>
              <div className="mx-3 h-[22px] bg-[#F4ECE2] rounded-full flex items-center px-2 text-[8px] text-ink-mute mb-2">🔍 イベントを探す</div>
              <div className="px-3 flex flex-col gap-1.5">
                {[
                  { color: "from-[#7B5BB6] to-coral", badge: "LIVE", badgeBg: "bg-coral", title: "週末J-POPライブ", sub: "渋谷 / 4/30 ・参加4名" },
                  { color: "from-[#FFB54A] to-[#FF8B5C]", badge: "フェス", badgeBg: "bg-[#FF8B5C]", title: "クラフトビールフェス", sub: "恵比寿 / 5/3 ・参加6名" },
                  { color: "from-[#5FCFC1] to-[#3A9B8E]", badge: "スポーツ", badgeBg: "bg-[#3A9B8E]", title: "サッカー観戦オフ", sub: "国立 / 5/10 ・参加3名" },
                  { color: "from-[#D8C9A8] to-[#A89878]", badge: "アート", badgeBg: "bg-[#A89878]", title: "現代アート展", sub: "六本木 / 5/14" },
                ].map((ev, i) => (
                  <div key={i} className="flex gap-2 items-center p-1.5 rounded-lg bg-paper border border-[#F4ECE2]">
                    <div className={`w-9 h-9 rounded-lg shrink-0 bg-gradient-to-br ${ev.color}`} />
                    <div>
                      <span className={`text-[6px] ${ev.badgeBg} text-white px-1 py-px rounded font-bold inline-block mb-px`}>{ev.badge}</span>
                      <div className="text-[8px] font-bold leading-[1.3]">{ev.title}</div>
                      <div className="text-[7px] text-ink-mute">{ev.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phone Right: Chat */}
          <div className="phone absolute max-sm:translate-x-[62px] sm:translate-x-[82px] lg:translate-x-[120px] rotate-[8deg] translate-y-5 z-[2]">
            <div className="screen">
              <div className="pt-[26px] px-3 pb-2 flex items-center gap-2 border-b border-[#F2EAE0]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FFE0A8] to-[var(--peach)]" />
                <div>
                  <div className="text-[10px] font-bold">あゆか</div>
                  <div className="text-[7px] text-ink-mute">オンライン</div>
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-1.5">
                <div className="text-[8px] py-1.5 px-2 rounded-xl rounded-bl-sm bg-[#F4ECE2] text-[var(--ink)] self-start max-w-[85%] leading-[1.4]">
                  はじめまして！フェス一緒に行きませんか？☺
                </div>
                <div className="text-[8px] py-1.5 px-2 rounded-xl rounded-br-sm bg-coral text-white self-end max-w-[85%] leading-[1.4]">
                  いいですね！<br />ぜひお願いします！
                </div>
                <div className="text-[8px] py-1.5 px-2 rounded-xl rounded-bl-sm bg-[#F4ECE2] text-[var(--ink)] self-start max-w-[85%] leading-[1.4]">
                  日程あわせましょう〜🎵
                </div>
                <div className="text-[8px] py-1.5 px-2 rounded-xl rounded-br-sm bg-coral text-white self-end max-w-[85%] leading-[1.4]">
                  わくわくしてきた！
                </div>
              </div>
            </div>
          </div>

          {/* People group — overlapping on PC (lg+) */}
          <Image
            src="/images/people/people_group1_full.png"
            alt=""
            width={320}
            height={100}
            className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 z-[4] drop-shadow-lg w-[300px]"
          />
        </div>
        {/* People group — below phones on mobile/tablet */}
        <Image
          src="/images/people/people_group1_full.png"
          alt=""
          width={320}
          height={100}
          className="lg:hidden drop-shadow-lg w-[200px] sm:w-[260px] -mt-2 sm:mt-0"
        />
        </div>
      </div>
    </section>
  );
}
