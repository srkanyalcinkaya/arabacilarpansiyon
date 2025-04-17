import React from 'react'
import RoomGallery from '../components/RoomGallery'
import type { Metadata } from 'next'

// Standart oda için tüm resimleri tanımlıyoruz
const room = {
  id: 1,
  name: 'Standart Oda',
  images: [
    '/images/room-1.jpeg',
    '/images/room-2.jpeg',
    '/images/room-3.jpeg',
    '/images/room-4.jpeg',
    '/images/room-5.jpeg',
    '/images/room-6.jpeg',
    '/images/room-7.jpeg',
    '/images/room-8.jpeg',
    '/images/room-9.jpeg',
    '/images/room-10.jpeg',
    '/images/room-11.jpeg',
    '/images/room-12.jpeg',
    '/images/room-13.jpeg',
    '/images/room-14.jpeg',
    '/images/room-15.jpeg',
  ]
}

export const metadata: Metadata = {
  title: "Odalarımız | Arabacılar Pansiyon & Hotel",
  description: "Arabacılar Pansiyon & Hotel'in konforlu ve modern odaları. Tek kişilik, çift kişilik ve aile odaları ile tüm ihtiyaçlarınıza uygun konaklama seçenekleri.",
  keywords: "Arabacılar Pansiyon odaları, Bursa otel odaları, pansiyon oda seçenekleri, ekonomik oda, lüks oda, konforlu konaklama, temiz odalar",
  openGraph: {
    title: "Odalarımız | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel'in konforlu ve modern odaları. Çeşitli oda seçeneklerimiz ile misafirlerimizin tüm ihtiyaçlarını karşılıyoruz.",
    url: 'https://arabacilarpansiyon.com/odalarimiz',
    images: [
      {
        url: '/images/odalar/oda1.jpg',
        width: 1200,
        height: 630,
        alt: 'Arabacılar Pansiyon & Hotel Odaları',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Odalarımız | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel'in konforlu ve modern odaları.",
    images: ['/images/odalar/oda1.jpg'],
  },
}

export default function Page() {
  return (
    <section className='py-1 bg-[#f6f6f6]'>
      <div className="flex flex-col items-center justify-center text-center relative">
        <h1 className="md:text-4xl font-bold mb-10 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl  w-auto px-10 py-4 rounded-full">Odalarımız</h1>
        <img src="/images/iletisim.jpg" alt="" className='w-full h-56 object-cover' />
      </div>
      <div className='max-w-6xl mx-auto container my-16 px-4 md:px-0'>
        <RoomGallery room={room} />
      </div>
    </section>
  )
}
