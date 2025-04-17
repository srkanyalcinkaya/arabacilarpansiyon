import { faqItems } from '@/constants'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Arabacılar Pansiyon & Hotel",
  description: "Arabacılar Pansiyon & Hotel hakkında sıkça sorulan sorular ve yanıtları. Check-in/check-out saatleri, rezervasyon iptali, oda özellikleri ve daha fazlası.",
  keywords: "Arabacılar Pansiyon SSS, Bursa otel soruları, pansiyon rezervasyon bilgisi, otel SSS, konaklama soruları, check-in saati, check-out saati",
  openGraph: {
    title: "Sıkça Sorulan Sorular | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel ile ilgili en çok sorulan sorular ve yanıtları.",
    url: 'https://arabacilarpansiyon.com/sikca-sorulan-sorular',
    images: [
      {
        url: '/images/arabacilarpansiyon-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arabacılar Pansiyon & Hotel Sıkça Sorulan Sorular',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sıkça Sorulan Sorular | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel ile ilgili en çok sorulan sorular ve yanıtları.",
    images: ['/images/arabacilarpansiyon-og-image.jpg'],
  },
}

export default function Page() {
  return (
    <section className='py-1 bg-[#f6f6f6]'>
      <div className="flex flex-col items-center justify-center text-center relative">
        <h1 className="md:text-4xl font-bold mb-10 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl  w-auto px-10 py-4 rounded-full">Sıkça Sorulan Sorular</h1>
        <img src="/images/iletisim.jpg" alt="" className='w-full h-56 object-cover' />
      </div>
      <div className='max-w-6xl mx-auto container my-16 px-4 md:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 flex flex-col h-full border-l-4 border-[#383e42]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#383e42]">{item.icon}</div>
                <span className="font-bold text-lg text-[#383e42]">{item.title}</span>
              </div>
              <span className="text-gray-500 text-sm">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
