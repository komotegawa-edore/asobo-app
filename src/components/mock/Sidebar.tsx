"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, PlusCircle, MessageCircle, User } from "lucide-react";

const navItems = [
  { href: "/mock/festivals", label: "ホーム", icon: Home, match: "/mock/festivals" },
  { href: "/mock/festivals", label: "さがす", icon: Search, match: "" },
  { href: "/mock/festivals", label: "とうこう", icon: PlusCircle, match: "" },
  { href: "/mock/chats", label: "チャット", icon: MessageCircle, match: "/mock/chats" },
  { href: "/mock/profile", label: "マイページ", icon: User, match: "/mock/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-56 border-r border-line bg-white shrink-0 sticky top-0 h-dvh">
      {/* Logo */}
      <Link href="/mock/festivals" className="block px-5 pt-6 pb-4">
        <img src="/images/logo/text.png" alt="ASOBO" className="h-7" />
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-3 flex-1">
        {navItems.map((item) => {
          const active = item.match && pathname.startsWith(item.match);
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline transition-colors ${
                active
                  ? "bg-coral/10 text-coral"
                  : "text-ink-soft hover:bg-cream"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={active ? 2.5 : 1.8}
              />
              <span className={`text-sm ${active ? "font-bold" : "font-medium"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
