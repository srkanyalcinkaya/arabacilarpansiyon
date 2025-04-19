import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "İletişim | Arabacılar Pansiyon & Hotel",
  description: "Arabacılar Pansiyon & Hotel ile iletişime geçin. Adres: Karşıyaka, İzmir. Telefon: +90 533 162 55 39. E-posta: arabacilarpansiyon@gmail.com",
  keywords: "Arabacılar Pansiyon iletişim, İzmir otel iletişim, otel rezervasyon, pansiyon telefon, otel adres, iletişim bilgileri",
  openGraph: {
    title: "İletişim | Arabacılar Pansiyon & Hotel",
    description: "Arabacılar Pansiyon & Hotel ile iletişime geçin. Soru ve rezervasyonlarınız için bize ulaşın.",
    url: 'https://arabacilarpansiyon.com/iletisim',
    images: [
      {
        url: '/images/iletisim.jpg',
        width: 1200,
        height: 630,
        alt: 'Arabacılar Pansiyon & Hotel İletişim',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "İletişim | Arabacılar Pansiyon & Hotel", 
    description: "Arabacılar Pansiyon & Hotel ile iletişime geçin. Soru ve rezervasyonlarınız için bize ulaşın.",
    images: ['/images/iletisim.jpg'],
  },
}

export default function Page() {
  return (
    <section className=' py-12 bg-[#f6f6f6]'>
      <div className="flex flex-col items-center justify-center text-center relative">
        <h1 className="md:text-4xl font-bold mb-10 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl  w-auto px-10 py-4 rounded-full">İletişim</h1>
        <img src="/images/iletisim.jpg" alt="Arabacılar Pansiyon İletişim" className='w-full h-56 object-cover' />
      </div>
      <div className='max-w-6xl mx-auto container mt-12  px-4 md:px-0'>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* İletişim Bilgileri */}
            <div className="bg-gradient-to-br from-[#383e42] to-[#292d31] text-white p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#FFD600]">İletişim Bilgileri</h3>

              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1 text-[#FFD600]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FFD600]">Adres</h4>
                  <p className="mt-1">Karşıyaka, İzmir</p>
                  <p className="text-sm text-gray-300 mt-1">Tuna Mah. 1690 Sk. No:71</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1 text-[#FFD600]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FFD600]">Telefon</h4>
                  <p className="mt-1">+90 533 162 55 39</p>
                  <p className="text-sm text-gray-300 mt-1">7/24 hizmetinizdeyiz</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[#FFD600]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FFD600]">E-posta</h4>
                  <p className="mt-1">arabacilarpansiyon@gmail.com</p>
                  <p className="text-sm text-gray-300 mt-1">Size en kısa sürede dönüş yapacağız</p>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-semibold text-[#FFD600] mb-4">Bizi Takip Edin</h4>
                <div className="flex space-x-4">
                  <a href={`https://api.whatsapp.com/send?phone=+905331625539&text=${encodeURIComponent("Merhaba, Boş odanız var mı?")}`} className="text-white hover:text-[#FFD600] transition-colors">
                    <FaWhatsapp />
                  </a>
                  <a href="https://www.instagram.com/" className="text-white hover:text-[#FFD600] transition-colors">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#383e42]">Bize Mesaj Gönderin</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Adınız</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-gray-400"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-gray-400"
                    placeholder="ornek@mail.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-gray-400"
                    placeholder="Mesajınızın konusu"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-gray-400"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#383e42] text-white py-2 px-4 rounded-md hover:bg-[#FFD600] hover:text-[#383e42] transition-colors duration-300 font-medium"
                  >
                    Mesaj Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
