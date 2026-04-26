import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MobileShell from "@/components/mock/MobileShell";
import Sidebar from "@/components/mock/Sidebar";

export const metadata: Metadata = {
  title: "ASOBO Mock App",
};

export default function MockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileShell>
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-dvh lg:min-h-0 lg:h-dvh overflow-hidden">
        {children}
      </main>
      {/* LP に戻るボタン */}
      <Link
        href="/"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-ink/80 text-white text-xs font-medium no-underline backdrop-blur shadow-lg hover:bg-ink transition-colors"
      >
        <ArrowLeft size={14} strokeWidth={2.5} />
        LP に戻る
      </Link>
    </MobileShell>
  );
}
