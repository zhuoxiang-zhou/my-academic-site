import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Zhuoxiang (Shawn) Zhou',
  description: 'Undergraduate in Economics at Peking University studying labor economics and innovation.',
  keywords: ['Zhuoxiang Zhou', 'Shawn Zhou', 'Economist', 'Peking University', 'Labor Economics', 'Economics Research'],
  authors: [{ name: 'Zhuoxiang Zhou' }],
  metadataBase: new URL('https://shawn-zhou.com'),
  openGraph: {
    title: 'Zhuoxiang (Shawn) Zhou',
    description: 'Undergraduate in Economics studying labor markets and innovation',
    url: 'https://shawn-zhou.com',
    siteName: 'Zhuoxiang Zhou',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
