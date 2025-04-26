import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arabacılar Pansiyon & Hotel | İzmir'de Konforlu Konaklama",
  description: "İzmir'de huzurlu ve konforlu bir konaklama deneyimi. Arabacılar Pansiyon & Hotel'e hoş geldiniz!",
  keywords: "Arabacılar Pansiyon, Hotel, İzmir konaklama, pansiyon, otel, ekonomik konaklama, merkezi konaklama, izmir karşıyaka otel, izmir karşıyaka pansiyon, izmir karşıyaka hotel, izmir pansiyon, karşıyaka otel, karşıyaka pansiyon, karşıyaka hotel, izmir pansiyon, izmir hotel, izmir otel, karşıyaka pansiyon, karşıyaka hotel, izmir pansiyon, izmir hotel, arabıcılar pansiyon, arabıcılar otel, arabıcılar hotel, arabıcılar pansiyon",
  authors: [{ name: "Arabacılar Pansiyon & Hotel" }],
  creator: "Arabacılar Pansiyon & Hotel",
  publisher: "Arabacılar Pansiyon & Hotel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://arabacilarpansiyon.com/',
    title: "Arabacılar Pansiyon & Hotel | İzmir'de Konforlu Konaklama",
    description: "İzmir'de huzurlu ve konforlu bir konaklama deneyimi. Arabacılar Pansiyon & Hotel'e hoş geldiniz!",
    siteName: 'Arabacılar Pansiyon & Hotel',
    images: [
      {
        url: '/images/arabacilarpansiyon-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arabacılar Pansiyon & Hotel',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arabacılar Pansiyon & Hotel | İzmir'de Konforlu Konaklama",
    description: "İzmir'de huzurlu ve konforlu bir konaklama deneyimi.",
    images: ['/images/arabacilarpansiyon-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://arabacilarpansiyon.com',
  },
  verification: {
    google: 'Google doğrulama kodunuzu buraya ekleyin',
    yandex: 'Yandex doğrulama kodunuzu buraya ekleyin',
  },
};

//TODO: Add og image
//TODO: Contact form google sheet ekle

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
          <Link href={`https://api.whatsapp.com/send?phone=+905331625539&text=${encodeURIComponent("Merhaba, Boş odanız var mı?")}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-lg hover:opacity-90 transition-colors">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </Link>
        </div>
        <div className="fixed bottom-24 right-8 z-50 flex flex-col items-center rounded-full">
          <Link href="https://www.otelz.com/hotel/arabacilar-pansiyon" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center  text-white shadow-lg  transition-colors">
            <img src="/otelz.png" alt="" className="w-14 h-14 rounded-full" />
          </Link>
        </div>

      </body>
      <GoogleAnalytics gaId="G-Z4PW25ZFT9" />
    </html>
  );
}
