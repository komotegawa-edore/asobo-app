import Image from "next/image";

const recs = [
  {
    image: "/images/people/people_group1_person1.png",
    title: "休日をもっと充実させたい社会人",
    desc: "新しい仲間と出かけて、週末をもっと楽しみたい。",
    bg: "from-[#FFE0D6] to-[var(--peach)]",
  },
  {
    image: "/images/people/people_group1_person2.png",
    title: "趣味友を増やしたい人",
    desc: "共通の趣味をきっかけに、自然に友達を増やしたい。",
    bg: "from-[#FFE9A8] to-[#FFC972]",
  },
  {
    image: "/images/people/people_group1_person3.png",
    title: "一人参加に少し不安がある人",
    desc: "参加者と知り合ってから、初めてのイベントも安心。",
    bg: "from-[#D4C4F0] to-[var(--lavender)]",
  },
];

export default function Recommend() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-[var(--cream)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <p className="text-center text-ink-mute text-[13px] font-bold tracking-[.18em] mb-2">
          FOR YOU
        </p>
        <h2 className="text-center text-[24px] sm:text-[30px] font-black mb-9">
          こんな人に<span className="text-coral">おすすめ</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {recs.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-7 px-6 border border-line text-center"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div
                className={`w-20 h-20 rounded-full mx-auto mb-5 bg-gradient-to-br ${r.bg} overflow-hidden flex items-center justify-center`}
              >
                <Image
                  src={r.image}
                  alt={r.title}
                  width={72}
                  height={72}
                  className="object-cover rounded-full"
                />
              </div>
              <h4 className="text-base font-black mb-2">{r.title}</h4>
              <p className="text-[13px] text-ink-soft m-0 leading-[1.7]">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
