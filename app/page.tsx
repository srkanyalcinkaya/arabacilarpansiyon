'use client'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { FaSnowflake, FaTv, FaWifi, FaKey, FaCoffee, FaTrash, FaWind, FaParking, FaWater, FaShoppingBag, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Link from "next/link";
import { ImSpoonKnife } from "react-icons/im";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { GiCctvCamera, GiCoffeePot } from "react-icons/gi";
import { VscCoffee } from "react-icons/vsc";
import { IoIosSnow } from "react-icons/io";
import { IoKeyOutline, IoTvOutline } from "react-icons/io5";
import { CiWifiOn } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { PiHairDryerThin } from "react-icons/pi";
import { MdFamilyRestroom, MdCleaningServices } from "react-icons/md";
import { BsImageFill, BsShieldCheck, BsFillHeartFill } from "react-icons/bs";
import { FaCouch } from "react-icons/fa";
import { useState } from "react";
import { Metadata } from "next";

// 'use client' kullanıldığı için metadata tanımını export const olarak yapamayız
// Ana sayfanın SEO bilgileri layout.tsx'de tanımlandı

const mainColor = "#FFD600";
const darkColor = "#383e42";

const hotelFeatures = [
  {
    icon: <IoIosSnow size={28} />,
    title: "Klima",
    description: "Konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu bir konaklama.",
  },
  {
    icon: <IoTvOutline size={28} />,
    title: "TV",
    description: "Konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu bir konaklama.",
  },
  {
    icon: <CiWifiOn size={28} />,
    title: "Wifi internet",
    description: "Konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu bir konaklama.",
  },
  {
    icon: <IoKeyOutline size={28} />,
    title: "Kapı Anahtarı",
    description: "Konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu bir konaklama.",
  },
  {
    icon: <VscCoffee size={28} />,
    title: "Kahve",
    description: "Konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu bir konaklama.",
  },
  {
    icon: <GoTrash size={28} />,
    title: "Çöp Kutusu",
    description: "Konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu bir konaklama.",
  },
  {
    icon: <PiHairDryerThin size={28} />,
    title: "Saç Kurutma",
    description: "Konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu bir konaklama.",
  },
  {
    icon: <GiCctvCamera size={28} />,
    title: "Güvenlik",
    description: "Konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu bir konaklama.",
  },
]

const faqItems = [
  {
    icon: <MdFamilyRestroom size={28} />,
    title: "Yaş sınırlaması var mı?",
    description: "18 yaş altı misafirler ebeveyn refakatinde konaklayabilir."
  },
  {
    icon: <BsImageFill size={28} />,
    title: "Resimler gerçek mi?",
    description: "Sitemizdeki tüm görseller gerçek dairelerimize aittir."
  },
  {
    icon: <BsShieldCheck size={28} />,
    title: "Daireler güvenli mi?",
    description: "Tüm dairelerimiz güvenli ve konforludur."
  },
  {
    icon: <BsFillHeartFill size={28} />,
    title: "Kaç kişi konaklayabilir?",
    description: "Kişi sayısı oda tipine göre değişmektedir."
  },
  {
    icon: <FaCouch size={28} />,
    title: "Eşya durumu nedir?",
    description: "Tüm temel ev eşyaları dairelerimizde mevcuttur."
  },
  {
    icon: <MdCleaningServices size={28} />,
    title: "Temizlik nasıl?",
    description: "Her misafir sonrası detaylı temizlik yapılır."
  },
  {
    icon: <FaWifi size={28} />,
    title: "İnternet var mı?",
    description: "Tüm dairelerimizde ücretsiz yüksek hızlı WiFi bulunmaktadır."
  },
  {
    icon: <FaTv size={28} />,
    title: "TV var mı?",
    description: "Dairelerimizde modern TV'ler bulunmaktadır."
  },
  {
    icon: <FaKey size={28} />,
    title: "Giriş çıkış saatleri nedir?",
    description: "Giriş saat 14:00, çıkış saat 11:00'dir."
  },
  {
    icon: <FaCoffee size={28} />,
    title: "Odalarımızda balkon var mı?",
    description: "Her odamızda balkon bulunmaktadır."
  },
  {
    icon: <FaParking size={28} />,
    title: "Otopark var mı?",
    description: "Misafirlerimiz için belediyeye ait ücretli otopark vardır.."
  },
  {
    icon: <FaSnowflake size={28} />,
    title: "Klima var mı?",
    description: "Tüm odalarımızda klima bulunmaktadır."
  },
  {
    icon: <FaWater size={28} />,
    title: "Sıcak su kesintisi oluyor mu?",
    description: "24 saat kesintisiz sıcak su sağlanmaktadır."
  },
  {
    icon: <FaShoppingBag size={28} />,
    title: "Çevrede alışveriş imkanı var mı?",
    description: "Pansiyonumuzun yakınında birçok market ve alışveriş merkezi bulunmaktadır."
  },
  {
    icon: <FaPersonWalkingLuggage size={28} />,
    title: "Bagaj emanet edebilir miyiz?",
    description: "Giriş ve çıkış saatlerinizde bagajınızı güvenle emanet edebilirsiniz."
  },
  {
    icon: <GiCctvCamera size={28} />,
    title: "Güvenlik kamerası var mı?",
    description: "Ortak alanlarda 24 saat güvenlik kameraları bulunmaktadır."
  },
  {
    icon: <PiHairDryerThin size={28} />,
    title: "Saç kurutma makinesi var mı?",
    description: "Tüm odalarımızda saç kurutma makinesi bulunmaktadır."
  },
  {
    icon: <GoTrash size={28} />,
    title: "Oda temizliği ne sıklıkla yapılır?",
    description: "İsteğe bağlı olarak günlük oda temizliği hizmeti sunulmaktadır."
  },
  {
    icon: <VscCoffee size={28} />,
    title: "Mini bar var mı?",
    description: "Bazı odalarımızda mini bar mevcuttur."
  }, 
  {
    icon: <GiCoffeePot size={28} />,
    title: "Ketil kullanımı var mı?",
    description: "Ketil kullanımı vardır."
  }
];

export default function Home() {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f6f6f6] font-sans">
      {/* Kapak ve Hoş Geldiniz */}
      <section className="max-w-6xl relative flex flex-col items-start py-12 px-4  min-h-[600px]">
        {/* <Image src="/cover.jpg" alt="Kapak" fill className="object-cover object-center absolute inset-0 opacity-30 -z-10" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl sm:text-4xl font-extrabold mb-6 tracking-tight text-start drop-shadow-lg text-[#383e42]">Arabacılar Pansiyon & Hotel</h1>
            <p className="text-sm sm:text-base max-w-xl text-start drop-shadow-lg text-[#383e42]/80 mb-4">İzmir'in kalbinde, güvenli ve konforlu konaklama deneyimi. Rahat odalar, güler yüzlü personel ve uygun fiyatlar sunan tesisimiz, evinizden uzakta, ev konforu arayanlar için ideal bir seçenektir.</p>
          </div>
          <div className="flex flex-col gap-4 items-center md:mb-0 mb-10">
            <Link href="/odalarımız" className="max-w-sm w-full px-4 py-2 bg-white text-[#383e42] font-semibold rounded-full shadow hover:bg-[#FFD600] hover:text-[#383e42] transition text-center">Odalarımıza Göz At</Link>
            <Link href="/iletisim" className="max-w-sm w-full px-4 py-2 bg-[#FFD600] text-[#383e42] font-semibold rounded-full shadow hover:bg-white hover:text-[#383e42] transition text-center">İletişime Geç</Link>
          </div>
        </div>
        {/* <div className="text-xl sm:text-2xl max-w-2xl text-center mb-8 drop-shadow">
          <TypeAnimation
            sequence={[
              'İzmir\'in kalbinde, güvenli ve konforlu konaklama deneyimi',
              2000,
              'Rahat odalar, güler yüzlü personel ve uygun fiyatlar',
              2000,
              'Evinizden uzakta, ev konforu arayanlar için ideal',
              2000
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="min-h-[64px] flex items-center justify-center"
          />
        </div> */}
        {/* <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="#odalar" className="px-8 py-3 bg-white text-[#383e42] font-semibold rounded-full shadow hover:bg-[#FFD600] hover:text-[#383e42] transition text-center">Odalarımıza Göz At</a>
          <a href="#iletisim" className="px-8 py-3 bg-[#FFD600] text-[#383e42] font-semibold rounded-full shadow hover:bg-white hover:text-[#383e42] transition text-center">İletişime Geç</a>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="flex flex-col gap-4 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-6 rounded-lg bg-white/50">
            <Link href="/odalarımız" className="max-w-md w-full px-4 py-2 bg-white text-[#383e42] font-semibold rounded-full shadow hover:bg-[#FFD600] hover:text-[#383e42] transition text-center">Odalarımıza Göz At</Link>
            <Link href="/iletisim" className="max-w-md w-full px-4 py-2 bg-[#FFD600] text-[#383e42] font-semibold rounded-full shadow hover:bg-white hover:text-[#383e42] transition text-center">İletişime Geç</Link>
          </div>
          <div>
            <img src="/images/izmir-2.jpg" alt="Kapak" className="object-cover object-center w-full h-full" />
          </div>
          <div>
            <img src="/images/izmir-1.jpg" alt="Kapak" className="object-cover object-center w-full h-full" />
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="w-full max-w-6xl mt-16 px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* <div className="  text-start w-full flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4 text-[#383e42]">Hakkımızda</h2>
          <p className="text-gray-700 text-base  max-w-2xl">
            10 yılı aşkın tecrübemizle, İzmir'in merkezinde ev konforunda, güvenli ve hijyenik bir ortam sunuyoruz. Modern odalarımız, güler yüzlü ekibimiz ve merkezi konumumuz ile huzurlu bir konaklama deneyimi için sizi bekliyoruz. Arabacılar Pansiyon olarak, İzmir'in tarihi ve kültürel dokusuna yakın konumumuzla misafirlerimize benzersiz bir deneyim yaşatıyoruz. Her biri özenle tasarlanmış odalarımızda kaliteli malzemeler kullanarak rahatınızı ön planda tutuyoruz. Misafirlerimizin memnuniyeti bizim için en önemli öncelik olup, sizlere aile sıcaklığında bir konaklama sunmayı hedefliyoruz. Şehrin gürültüsünden uzak, sakin ve huzurlu bir ortamda dinlenirken aynı zamanda şehrin tüm olanaklarına kolayca ulaşabilirsiniz. Profesyonel ekibimiz 7/24 hizmetinizde olup, her türlü ihtiyacınıza anında çözüm üretmek için hazır beklemektedir.
          </p>
        </div>
        <div className="w-full h-full">
          <img src="/arabacılarpansiyon.svg" alt="Kapak" className="object-cover w-full h-full" />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10  py-4 bg-white rounded-xl">
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-3xl font-bold mb-4 text-[#383e42]">Hakkımızda</h2>
            <p className="text-gray-700 text-base  max-w-2xl">
              10 yılı aşkın tecrübemizle, İzmir'in merkezinde ev konforunda, güvenli ve hijyenik bir ortam sunuyoruz. Modern odalarımız, güler yüzlü ekibimiz ve merkezi konumumuz ile huzurlu bir konaklama deneyimi için sizi bekliyoruz. Arabacılar Pansiyon olarak, İzmir'in tarihi ve kültürel dokusuna yakın konumumuzla misafirlerimize benzersiz bir deneyim yaşatıyoruz. Her biri özenle tasarlanmış odalarımızda kaliteli malzemeler kullanarak rahatınızı ön planda tutuyoruz. Misafirlerimizin memnuniyeti bizim için en önemli öncelik olup, sizlere aile sıcaklığında bir konaklama sunmayı hedefliyoruz. Şehrin gürültüsünden uzak, sakin ve huzurlu bir ortamda dinlenirken aynı zamanda şehrin tüm olanaklarına kolayca ulaşabilirsiniz. Profesyonel ekibimiz 7/24 hizmetinizde olup, her türlü ihtiyacınıza anında çözüm üretmek için hazır beklemektedir.
            </p>
          </div>
          <div className="  w-full h-full flex flex-col items-center">
            <img src="/arabacılarpansiyon.svg" alt="Kapak" className="w-full h-full" />
          </div>
        </div>
      </section>


      {/* Odalarımız */}

      <section className="w-full max-w-6xl mt-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#383e42] text-center">Odalarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-4 bg-white rounded-xl">
          <div className="  w-full h-full flex flex-col items-center">
            <img src="/images/room-1.jpeg" alt="Standart Oda" className="rounded-lg  w-full h-full" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-xl md:text-3xl font-semibold mb-2 text-[#383e42]">Standart Oda</h3>
            <p className="text-gray-600 text-start">Tüm Dünya'nın akın ettiği İzmir Karşıyaka'nın tam ortasında, Karşıyaka iskeleye 2 dakika mesafede ve konforlu yatak, klima, ücretsiz Wi-Fi ve özel banyo ile huzurlu odalarımızla hizmet veriyoruz. Odalarımız 1+1 şeklinde dizayn edilmiş olup, konfor ve kullanışlılık ön planda tutulmuştur.</p>
          </div>
        </div>
      </section>

      {/* Otel Özellikleri */}
      <section id="ozellikler" className="w-full max-w-6xl mt-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#383e42] text-center">Pansiyonumuz</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-10" >
          <div className="flex flex-row items-center justify-center gap-3 hover:bg-white/70 transition-all duration-300 px-4 py-2 rounded-xl">
            <FaWater size={40} color="skyblue" />
            <div className="h-12 w-[1px] bg-[#383e42]" />
            <div className="flex flex-col items-start justify-center">
              <span className="font text-lg mb-1 text-center text-[#383e42]">Deniz Havası</span>
              <span className="text-gray-500 text-sm mb-4">Tertemiz</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 hover:bg-white/70 transition-all duration-300 px-4 py-2 rounded-xl">
            <ImSpoonKnife size={40} color="gray" />
            <div className="h-12 w-[1px] bg-[#383e42]" />
            <div className="flex flex-col items-start justify-center">
              <span className="font text-lg mb-1 text-center text-[#383e42]">Restoranlara Yakın</span>
              <span className="text-gray-500 text-sm mb-4">Erişim Kolaylığı</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 hover:bg-white/70 transition-all duration-300 px-4 py-2 rounded-xl">
            <FaShoppingBag size={40} color="green" />
            <div className="h-12 w-[1px] bg-[#383e42]" />
            <div className="flex flex-col items-start justify-center">
              <span className="font text-lg mb-1 text-center text-[#383e42]">Alışveriş İmkanı</span>
              <span className="text-gray-500 text-sm mb-4">Aradığınız Herşey</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 hover:bg-white/70 transition-all duration-300 px-4 py-2 rounded-xl">
            <FaPersonWalkingLuggage size={40} color="black" />
            <div className="h-12 w-[1px] bg-[#383e42]" />
            <div className="flex flex-col items-start justify-center">
              <span className="font text-lg mb-1 text-center text-[#383e42]">Ulaşım Kolaylığı</span>
              <span className="text-gray-500 text-sm mb-4">Aradığınız Herşey</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {hotelFeatures.map((item, index) => (
            <div key={index} className="rounded-xl hover:shadow hover:translate-y-[-5px] transition-all duration-300 p-2 max-w-sm w-full flex flex-col items-center">
              <div className="text-[#383e42] mb-3 flex justify-center">
                {item.icon}
              </div>
              <span className="font text-lg mb-1 text-center text-[#383e42]">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SSS Bölümü */}
      <section id="sss" className="w-full max-w-6xl mt-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#383e42] text-center">Sıkça Sorulan Sorular</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqItems.slice(0, showAllFaqs ? faqItems.length : 6).map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 flex flex-col h-full border-l-4 border-[#383e42]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#383e42]">{item.icon}</div>
                <span className="font-bold text-lg text-[#383e42]">{item.title}</span>
              </div>
              <span className="text-gray-500 text-sm">{item.description}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAllFaqs(!showAllFaqs)}
            className="px-6 py-2 bg-[#383e42] text-white font-medium rounded-full hover:bg-[#FFD600] hover:text-[#383e42] transition-all duration-300"
          >
            {showAllFaqs ? "Daha Az Göster" : "Daha Fazla Göster"}
          </button>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="w-full max-w-5xl mt-20 px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#383e42] text-center">İletişim</h2>
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
                  <a href="https://wa.me/05331625539" className="text-white hover:text-[#FFD600] transition-colors">
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
      </section>
    </div>
  );
}
