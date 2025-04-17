import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sürdürülebilirlik Politikamız | Arabacılar Pansiyon & Hotel",
  description: "Arabacılar Pansiyon & Hotel'in çevre dostu sürdürülebilirlik politikaları ve uygulamaları. Doğayı koruma ve enerji tasarrufu çalışmalarımız.",
  keywords: "Arabacılar Pansiyon sürdürülebilirlik, çevre dostu otel, yeşil otel, enerji tasarrufu, sürdürülebilir turizm, ekolojik konaklama, çevreye duyarlı",
  openGraph: {
    title: "Sürdürülebilirlik Politikamız | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel'in çevre dostu sürdürülebilirlik politikaları ve uygulamaları.",
    url: 'https://arabacilarpansiyon.com/surdurulebilirlik-politikamiz',
    images: [
      {
        url: '/images/arabacilarpansiyon-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arabacılar Pansiyon & Hotel Sürdürülebilirlik',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sürdürülebilirlik Politikamız | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel'in çevre dostu sürdürülebilirlik politikaları ve uygulamaları.",
    images: ['/images/arabacilarpansiyon-og-image.jpg'],
  },
}

export default function Page() {
  return (
    <section className='py-1 bg-[#f6f6f6]'>
      <div className="flex flex-col items-center justify-center text-center relative">
        <h1 className="md:text-4xl font-bold mb-10 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl  w-auto px-10 py-4 rounded-full">Sürdürülebilirlik Politikamız</h1>
        <img src="/images/iletisim.jpg" alt="" className='w-full h-56 object-cover' />
      </div>
      <div className='max-w-6xl mx-auto container my-16 px-4 md:px-0'>
        
      </div>
    </section>
  )
}
