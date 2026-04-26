import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="how" className="py-18 bg-gradient-to-b from-cream to-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-center text-ink-mute text-[13px] font-bold tracking-[.18em] mb-2">
          HOW IT WORKS
        </p>
        <h2 className="text-center text-[24px] sm:text-[30px] font-black mb-10">
          使い方は<span className="text-coral">かんたん3ステップ</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-3.5 items-stretch">
          {/* Step 1 */}
          <div
            className="bg-white rounded-[20px] p-6 px-5 border border-line relative"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <div className="absolute -top-3.5 left-4 w-9 h-9 rounded-full bg-coral text-white flex items-center justify-center font-[var(--font-nunito)] font-black text-lg shadow-[0_4px_0_rgba(218,69,90,.45)]"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              1
            </div>
            <h4 className="text-[15px] font-black mt-2 mb-1.5">
              イベントを探す / 投稿する
            </h4>
            <p className="text-xs text-ink-soft m-0 mb-3.5 leading-[1.6]">
              気になるイベントを選んで参加表明、または自分で募集を投稿できます。
            </p>
            {/* Mini event cards */}
            <div className="flex gap-2 p-2 rounded-[10px] bg-cream mb-1.5 items-center">
              <Image
                src="/images/photos/concert.png"
                alt="ライブ"
                width={36}
                height={36}
                className="rounded-md shrink-0 object-cover"
              />
              <div>
                <span className="text-[8px] bg-coral text-white px-1.5 py-0.5 rounded font-bold inline-block mb-0.5">
                  LIVE
                </span>
                <div className="text-[11px] font-bold">週末J-POPライブ</div>
                <div className="text-[9px] text-ink-mute">渋谷 / 4/30</div>
              </div>
            </div>
            <div className="flex gap-2 p-2 rounded-[10px] bg-cream items-center">
              <Image
                src="/images/photos/beer.png"
                alt="フェス"
                width={36}
                height={36}
                className="rounded-md shrink-0 object-cover"
              />
              <div>
                <span className="text-[8px] bg-[#FF8B5C] text-white px-1.5 py-0.5 rounded font-bold inline-block mb-0.5">
                  フェス
                </span>
                <div className="text-[11px] font-bold">クラフトビールフェス</div>
                <div className="text-[9px] text-ink-mute">恵比寿 / 5/3</div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="self-center text-coral text-2xl font-black lg:rotate-0 rotate-90 justify-self-center">
            →
          </div>

          {/* Step 2 */}
          <div
            className="bg-white rounded-[20px] p-6 px-5 border border-line relative"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <div className="absolute -top-3.5 left-4 w-9 h-9 rounded-full bg-coral text-white flex items-center justify-center font-black text-lg shadow-[0_4px_0_rgba(218,69,90,.45)]"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              2
            </div>
            <h4 className="text-[15px] font-black mt-2 mb-1.5">
              一緒に行きたい人を見つける
            </h4>
            <p className="text-xs text-ink-soft m-0 mb-3.5 leading-[1.6]">
              イベントに興味のある人を見つけて、プロフィールを確認。
            </p>
            <div className="flex flex-col items-center bg-cream rounded-xl p-3.5">
              <Image
                src="/images/people/people_group2_person1.png"
                alt="あゆか"
                width={64}
                height={64}
                className="rounded-full mb-2 bg-gradient-to-br from-[#FFE0A8] to-peach"
              />
              <div className="text-[13px] font-bold">あゆか</div>
              <div className="text-[10px] text-ink-mute mb-2">26歳 / 東京</div>
              <div className="flex gap-1 flex-wrap justify-center">
                <span className="text-[9px] bg-white border border-line px-1.5 py-0.5 rounded-full font-bold">
                  ライブ
                </span>
                <span className="text-[9px] bg-white border border-line px-1.5 py-0.5 rounded-full font-bold">
                  カフェ
                </span>
              </div>
              <div className="mt-2 text-[10px] bg-coral text-white px-3 py-1 rounded-full font-bold">
                メッセージ
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="self-center text-coral text-2xl font-black lg:rotate-0 rotate-90 justify-self-center">
            →
          </div>

          {/* Step 3 */}
          <div
            className="bg-white rounded-[20px] p-6 px-5 border border-line relative"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <div className="absolute -top-3.5 left-4 w-9 h-9 rounded-full bg-coral text-white flex items-center justify-center font-black text-lg shadow-[0_4px_0_rgba(218,69,90,.45)]"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              3
            </div>
            <h4 className="text-[15px] font-black mt-2 mb-1.5">
              チャットで当日を楽しむ
            </h4>
            <p className="text-xs text-ink-soft m-0 mb-3.5 leading-[1.6]">
              チャットでやりとりして、当日はそのまま一緒に楽しもう！
            </p>
            <div className="bg-cream rounded-xl p-2.5 flex flex-col gap-1.5">
              <div className="text-[11px] py-1.5 px-2.5 rounded-xl rounded-bl-sm bg-[#F4ECE2] text-ink self-start max-w-[80%] leading-[1.4]">
                楽しみにしてます！<br />当日はお願いします☺
              </div>
              <div className="text-[11px] py-1.5 px-2.5 rounded-xl rounded-br-sm bg-coral text-white self-end max-w-[80%] leading-[1.4]">
                はい！よろしくおねがいします🎵
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
