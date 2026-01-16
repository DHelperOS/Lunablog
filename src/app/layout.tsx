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
    default: "루나 - 전문 야간 구인구직 플랫폼",
    template: "%s | 루나"
  },
  description: "루나에서 검증된 야간 전문직, 안심 일자리 정보를 확인하세요. 전문 연계 구인구직부터 생생한 커뮤니티 후기까지. 당신의 커리어를 위한 안전한 플랫폼입니다.",
  keywords: ["야간 알바", "저녁 파트타임", "전문 야간 구인구직", "안심 매칭 서비스", "야간 일자리 플랫폼", "루나"],
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
    title: "루나 - 전문 야간 구인구직 플랫폼",
    description: "검증된 전문 야간 일자리 정보, 루나에서 확인하세요.",
    url: "https://www.lunaalba.com",
    siteName: "루나",
    images: [
      {
        url: "/app_icon_info.webp", // Should ideally be a larger OG image
        width: 800,
        height: 600,
        alt: "루나 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "루나",
    description: "전문 야간 구인구직의 모든 것",
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
