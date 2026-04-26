import type { Metadata } from "next";
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
    </MobileShell>
  );
}
