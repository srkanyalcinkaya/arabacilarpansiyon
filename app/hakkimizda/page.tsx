import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hakkımızda | Arabacılar Pansiyon & Hotel",
  description: "10 yılı aşkın tecrübemizle, Bursa'nın merkezinde ev konforunda, güvenli ve hijyenik konaklama hizmeti sunuyoruz. Arabacılar Pansiyon'u daha yakından tanıyın.",
  keywords: "Arabacılar Pansiyon hakkında, Bursa pansiyon hikayesi, otel tanıtım, Bursa konaklama hizmetleri, kaliteli pansiyon",
  openGraph: {
    title: "Hakkımızda | Arabacılar Pansiyon & Hotel",
    description: "10 yılı aşkın tecrübemizle, Bursa'nın merkezinde ev konforunda, güvenli ve hijyenik konaklama hizmeti sunuyoruz.",
    url: 'https://arabacilarpansiyon.com/hakkimizda',
    type: 'article',
    images: [
      {
        url: '/images/iletisim.jpg',
        width: 1200,
        height: 630,
        alt: 'Arabacılar Pansiyon & Hotel Hakkında',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hakkımızda | Arabacılar Pansiyon & Hotel",
    description: "10 yılı aşkın tecrübemizle, Bursa'nın merkezinde ev konforunda, güvenli ve hijyenik konaklama hizmeti sunuyoruz.",
    images: ['/images/iletisim.jpg'],
  },
}

export default function Page() {
  return (
    <section className=' py-12 bg-[#f6f6f6]'>
      <div className="flex flex-col items-center justify-center text-center relative">
        <h1 className="md:text-4xl font-bold mb-10 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl  w-auto px-10 py-4 rounded-full">Hakkımızda</h1>
        <img src="/images/iletisim.jpg" alt="Arabacılar Pansiyon Hakkında" className='w-full h-56 object-cover' />
      </div>
      <div className='max-w-6xl mx-auto container px-4 md:px-0'>

        <p className="text-gray-700 text-lg my-20">
        10 yılı aşkın tecrübemizle, İzmir'in merkezinde ev konforunda, güvenli ve hijyenik bir ortam sunuyoruz. Modern odalarımız, güler yüzlü ekibimiz ve merkezi konumumuz ile huzurlu bir konaklama deneyimi için sizi bekliyoruz. Arabacılar Pansiyon olarak, İzmir'in tarihi ve kültürel dokusuna yakın konumumuzla misafirlerimize benzersiz bir deneyim yaşatıyoruz. Her biri özenle tasarlanmış odalarımızda kaliteli malzemeler kullanarak rahatınızı ön planda tutuyoruz. Misafirlerimizin memnuniyeti bizim için en önemli öncelik olup, sizlere aile sıcaklığında bir konaklama sunmayı hedefliyoruz. Şehrin gürültüsünden uzak, sakin ve huzurlu bir ortamda dinlenirken aynı zamanda şehrin tüm olanaklarına kolayca ulaşabilirsiniz. Profesyonel ekibimiz 7/24 hizmetinizde olup, her türlü ihtiyacınıza anında çözüm üretmek için hazır beklemektedir.
      </p>
      </div>
    </section>
  )
}
