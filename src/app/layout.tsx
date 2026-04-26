import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASOBO — イベントに、一緒に行ける友達を見つけよう。",
  description:
    "ライブ・フェス・展示会・スポーツ観戦など、共通の趣味をきっかけに自然につながれるマッチングアプリ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Zen+Maru+Gothic:wght@500;700;900&family=Nunito:wght@800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
