import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Логика и Мышление — Полный Конспект",
  description: "Полный разбор 14 модулей — от картины мира до металогики. С примерами, антипримерами и применением в реальных ситуациях.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
