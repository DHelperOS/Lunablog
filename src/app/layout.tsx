import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "루나알바 - 여성 고소득 밤알바 & 유흥알바 정보 커뮤니티",
    template: "%s | 루나알바"
  },
  description: "루나알바에서 검증된 여성알바, 밤알바, 유흥알바 정보를 확인하세요. 고소득 아가씨알바 구인구직부터 생생한 후기까지. 당신의 빛나는 밤을 위한 안전한 커뮤니티입니다.",
  keywords: ["밤알바", "유흥알바", "여성알바", "고소득알바", "아가씨알바", "루나알바", "유흥구인구직"],
  authors: [{ name: "Luna Alba" }],
  creator: "Luna Alba",
  publisher: "Luna Alba",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/app_icon_info.webp',
    apple: '/app_icon_info.webp',
  },
  openGraph: {
    title: "루나알바 - 여성 고소득 밤알바 & 유흥알바 정보 커뮤니티",
    description: "검증된 고소득 알바 정보, 루나알바에서 확인하세요.",
    url: "https://www.lunaalba.com",
    siteName: "루나알바",
    images: [
      {
        url: "/app_icon_info.webp", // Should ideally be a larger OG image
        width: 800,
        height: 600,
        alt: "루나알바 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "루나알바",
    description: "여성 고소득 알바의 모든 것",
    images: ["/app_icon_info.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
