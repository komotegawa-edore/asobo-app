import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,252,247,0.92)] backdrop-blur-[10px] border-b border-line">
      <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between py-3.5">
        <Link href="/">
          <Image
            src="/images/logo/text.png"
            alt="ASOBO"
            width={120}
            height={43}
            className="h-9 w-auto"
          />
        </Link>
        <ul className="hidden md:flex gap-8 list-none m-0 p-0 text-sm font-medium">
          <li>
            <a href="#features" className="text-ink-soft hover:text-coral no-underline transition-colors">
              特徴
            </a>
          </li>
          <li>
            <a href="#how" className="text-ink-soft hover:text-coral no-underline transition-colors">
              使い方
            </a>
          </li>
          <li>
            <a href="#safety" className="text-ink-soft hover:text-coral no-underline transition-colors">
              安心・安全
            </a>
          </li>
          <li>
            <a href="#genres" className="text-ink-soft hover:text-coral no-underline transition-colors">
              イベント例
            </a>
          </li>
        </ul>
        <a href="#cta" className="btn btn-primary text-sm">
          無料ではじめる
        </a>
      </div>
    </header>
  );
}
