"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, PlusCircle, MessageCircle, User } from "lucide-react";

const tabs = [
  { href: "/mock/festivals", label: "ホーム", icon: Home },
  { href: "/mock/festivals", label: "さがす", icon: Search },
  { href: "/mock/festivals", label: "とうこう", icon: PlusCircle },
  { href: "/mock/chats", label: "チャット", icon: MessageCircle },
  { href: "/mock/profile", label: "マイページ", icon: User },
];

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around bg-white border-t border-line py-1.5 shrink-0 lg:hidden">
      {tabs.map((tab) => {
        const active = pathname.startsWith(tab.href);
        const Icon = tab.icon;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            className="flex flex-col items-center gap-0.5 px-2 py-1 no-underline"
          >
            <Icon
              size={22}
              strokeWidth={active ? 2.5 : 1.8}
              className={active ? "text-coral" : "text-ink-mute"}
            />
            <span
              className={`text-[10px] font-medium ${
                active ? "text-coral" : "text-ink-mute"
              }`}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
