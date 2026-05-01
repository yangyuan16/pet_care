import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "爪爪云洗护 | 高端宠物洗护店",
  description:
    "为猫咪和狗狗提供温和洗护、精修造型、皮毛护理和舒缓 SPA 的高端宠物洗护门店。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
