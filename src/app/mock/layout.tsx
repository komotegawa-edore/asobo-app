import type { Metadata } from "next";
import MobileShell from "@/components/mock/MobileShell";

export const metadata: Metadata = {
  title: "ASOBO Mock App",
};

export default function MockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MobileShell>{children}</MobileShell>;
}
