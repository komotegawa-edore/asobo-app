import Image from "next/image";

const items = [
  {
    icon: "/images/3d/shield-card.png",
    badge: "/images/badges/check.png",
    title: "本人確認",
    desc: "本人確認済みユーザーのみ利用できる安全設計。",
  },
  {
    icon: "/images/3d/flag-people.png",
    badge: "/images/badges/flag.png",
    title: "通報機能",
    desc: "不適切なユーザーや行為を運営に通報できます。",
  },
  {
    icon: "/images/3d/nosign-card.png",
    badge: "/images/badges/no.png",
    title: "ブロック機能",
    desc: "気になる相手をブロックできます。",
  },
  {
    icon: "/images/3d/book.png",
    badge: "/images/badges/book.png",
    title: "安心ガイド",
    desc: "安全に使うためのガイドをアプリ内で確認できます。",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="py-20 sm:py-24 bg-[#FFFBF3] relative safety-bg">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 relative z-[1]">
        <p className="text-center text-ink-mute text-[13px] font-bold tracking-[.18em] mb-2">
          SAFETY
        </p>
        <h2 className="text-center text-[24px] sm:text-[30px] font-black mb-2">
          安心して使える<span className="text-coral">仕組み</span>
        </h2>
        <p className="text-center text-ink-soft text-sm mb-12">
          はじめての人でも、安心してイベント参加ができるように設計。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[18px] p-5 sm:p-6 px-4 sm:px-5 border border-line"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div className="flex justify-center mb-3">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={60}
                  className="object-contain h-[60px] w-auto"
                />
              </div>
              <div className="flex items-center gap-2 mb-2.5">
                <Image src={item.badge} alt="" width={28} height={28} className="w-7 h-7" />
                <h4 className="text-sm font-black">{item.title}</h4>
              </div>
              <p className="text-xs text-ink-soft m-0 leading-[1.7]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
