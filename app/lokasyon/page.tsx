import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import type { Metadata } from 'next'

const locations = [
    {
        title: "Karşıyaka İzban",
        description: "5 DK",
        icon: <HiOutlineLocationMarker size={32} color="skyblue" />
    },
    {
        title: "Alaybey İzban",
        description: "2 DK",
        icon: <HiOutlineLocationMarker size={32} color="skyblue" />
    },
    {
        title: "Karşıyaka Vapur İskelesi",
        description: "2 DK",
        icon: <HiOutlineLocationMarker size={32} color="skyblue" />
    },
    {
        title: "Sahildeki Tüm Eğlence Merkezleri",
        description: "2 DK",
        icon: <HiOutlineLocationMarker size={32} color="skyblue" />
    },
    {
        title: "Karşıyaka Adliyesi",
        description: "5 DK",
        icon: <HiOutlineLocationMarker size={32} color="skyblue" />
    },
    {
        title: "Karşıyaka Belediyesi",
        description: "5 DK",
        icon: <HiOutlineLocationMarker size={32} color="skyblue" />
    },
]

export const metadata: Metadata = {
  title: "Lokasyon | Arabacılar Pansiyon & Hotel",
  description: "Arabacılar Pansiyon & Hotel'in İzmir'deki konumu ve ulaşım bilgileri. Tuna Mah. 1690 Sk. No:71, Karşıyaka, İzmir'de merkezi konumda hizmet vermekteyiz.",
  keywords: "Arabacılar Pansiyon lokasyon, İzmir otel konum, pansiyon nerede, otele ulaşım, merkezi konaklama, İzmir merkez otel",
  openGraph: {
    title: "Lokasyon | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel'in İzmir'deki konumu ve ulaşım bilgileri.",
    url: 'https://arabacilarpansiyon.com/lokasyon',
    images: [
      {
        url: '/images/iletisim.jpg',
        width: 1200,
        height: 630,
        alt: 'Arabacılar Pansiyon & Hotel Lokasyon',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lokasyon | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel'in İzmir'deki konumu ve ulaşım bilgileri.",
    images: ['/images/iletisim.jpg'],
  },
}

export default function Page() {
    return (
        <section className='py-1 bg-[#f6f6f6]'>
            <div className="flex flex-col items-center justify-center text-center relative">
                <h1 className="md:text-4xl font-bold mb-10 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl  w-auto px-10 py-4 rounded-full">Lokasyon</h1>
                <img src="/images/izmir-2.jpg" alt="" className='w-full h-56 object-cover' />
            </div>
            <div className='max-w-6xl mx-auto container my-16  px-4 md:px-0'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {locations.map((location, index) => (
                        <div className="flex flex-row items-start justify-start gap-3 hover:bg-white/70 transition-all duration-300 px-4 py-2 rounded-xl">
                            <div className="flex flex-col items-start justify-center">
                                <div className='flex flex-row items-center justify-center gap-3'>
                                    {location.icon}
                                    <span className="font text-lg mb-1 text-center text-[#383e42] truncate">{location.title} ({location.description})</span>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
