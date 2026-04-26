import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-9 pb-8 border-t border-line">
      <div className="max-w-[1180px] mx-auto px-7 flex justify-between items-center flex-wrap gap-4">
        <Link href="/">
          <Image
            src="/images/logo/text.png"
            alt="ASOBO"
            width={100}
            height={36}
            className="h-7 w-auto"
          />
        </Link>
        <ul className="list-none p-0 m-0 flex gap-7 text-[13px]">
          <li>
            <a href="#" className="text-ink-soft no-underline hover:text-coral transition-colors">
              利用規約
            </a>
          </li>
          <li>
            <a href="#" className="text-ink-soft no-underline hover:text-coral transition-colors">
              プライバシーポリシー
            </a>
          </li>
          <li>
            <a href="#" className="text-ink-soft no-underline hover:text-coral transition-colors">
              お問い合わせ
            </a>
          </li>
        </ul>
        <div className="text-xs text-ink-mute">※サービスは現在準備中です</div>
      </div>
    </footer>
  );
}
