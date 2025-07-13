import React from 'react'
import type { Metadata } from 'next'
import { FaDownload } from 'react-icons/fa'

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

const documents = [
  { title: "ARABACILAR PANSIYON & HOTEL", file: "arabacilarpnasiyon.pdf" },
  { title: "SÜRDÜRÜLEBİLİRLİK", file: "surdurulebilirlik-pdf1732012922.90559.pdf" },
  { title: "ŞEHİR TANITIM KATALOĞU", file: "sehir-tanitim-katalogu.pdf" },
  { title: "ERİŞİLEBİLİRLİK MESAJI", file: "ARBCLR-SYS-23-ERİŞİLEBİLİRLİK-MESAJI.pdf" },
  { title: "KÜLTÜREL ALANLARA YÖNELİK ZİYARETÇİ DAVRANIŞ KURALLARI", file: "ARBCLR-SYS-31-KÜLTÜREL-ALANLARA-YÖNELİK-ZİYARETÇİ-DAVRANIŞ-KURALLARI.pdf" },
  { title: "KÜLTÜREL ALANLAR LİSTESİ", file: "ARBCLR-SYS-32-KÜLTÜREL-ALANLAR-LİSTESİ-İZMİR.pdf" },
]

export default function Page() {
  return (
    <section className='py-12 bg-[#f6f6f6]'>
      <div className="flex flex-col items-center justify-center text-center relative">
        <h1 className="md:text-4xl font-bold mb-10 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl w-auto px-10 py-4 rounded-full">Sürdürülebilirlik Politikamız</h1>
        <img src="/images/iletisim.jpg" alt="Arabacılar Pansiyon Sürdürülebilirlik" className='w-full h-56 object-cover' />
      </div>
      
      <div className='max-w-6xl mx-auto container my-16 px-4 md:px-0'>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#383e42]">Sürdürülebilirlik Dokümanlarımız</h2>
          <p className="mb-8 text-gray-700">
            Arabacılar Pansiyon & Hotel olarak, çevreye ve topluma karşı sorumluluklarımızın bilincindeyiz. 
            Sürdürülebilirlik politikalarımız, doğal kaynakların korunması, enerji verimliliği, atık yönetimi ve 
            sosyal sorumluluk projelerimizi içermektedir. Aşağıda sürdürülebilirlik çalışmalarımızla ilgili 
            dokümanlarımızı bulabilirsiniz.
          </p>
          
          {/* Broşür Resimleri */}
          <div className="mt-8 mb-12">
            <h3 className="text-xl font-bold mb-6 text-[#383e42]">Görsel Broşürümüz</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/arabacilarpnasiyon_page-0001.jpg" 
                  alt="Arabacılar Pansiyon Broşür Sayfa 1" 
                  className="w-full h-auto object-contain max-h-[400px]"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/arabacilarpnasiyon_page-0002.jpg" 
                  alt="Arabacılar Pansiyon Broşür Sayfa 2" 
                  className="w-full h-auto object-contain max-h-[400px]"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow ">
                <div className="flex items-center justify-between h-16">
                  <h3 className="text-[#383e42] font-medium">{doc.title}</h3>
                  <a 
                    href={`/${doc.file}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FFD600] hover:text-[#383e42] transition-colors"
                    title="Dokümanı İndir"
                  >
                    <FaDownload />
                  </a>
                </div>
                <a 
                  href={`/${doc.file}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-4 text-sm text-center bg-[#383e42] text-white py-2 px-4 rounded-md hover:bg-[#FFD600] hover:text-[#383e42] transition-colors duration-300 font-medium"
                >
                  Görüntüle
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-br from-[#383e42] to-[#292d31] text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#FFD600]">Sürdürülebilirlik Taahhüdümüz</h3>
            <p className="mb-4">
              Arabacılar Pansiyon & Hotel olarak doğaya saygılı, çevre dostu ve sürdürülebilir bir konaklama 
              deneyimi sunmayı taahhüt ediyoruz. Bu kapsamda:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Enerji ve su tasarrufu sağlayan sistemler kullanıyoruz</li>
              <li>Atık yönetimi ve geri dönüşüm programları uyguluyoruz</li>
              <li>Yerel ekonomiyi destekliyoruz</li>
              <li>Kültürel ve doğal mirası koruyoruz</li>
              <li>Çevre dostu temizlik ürünleri kullanıyoruz</li>
              <li>Misafirlerimizi sürdürülebilirlik konusunda bilgilendiriyoruz</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
