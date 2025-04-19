import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const menu = [
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Odalarımız", href: "/odalarimiz" },
        { name: "Lokasyon", href: "/lokasyon" },
        { name: "SSS", href: "/sss" },
        { name: "Sürdürülebilirlik Politikamız", href: "/sürdürülebilirlik-politikamız" },
        { name: "İletişim", href: "/iletisim" },
    ];
    const year = new Date().getFullYear()
    return (
        <footer className="w-full bg-[#ededed] text-[#383e42] ">
            <div className="flex flex-col md:flex-row justify-between items-center  gap-8">
                <div className="w-full md:w-1/2 flex justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.2782255026323!2d27.1198081!3d38.4581376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9075734dd81%3A0x10bddd7881e2cc94!2sArabac%C4%B1lar%20Pansiyon%20%26%20Otel!5e0!3m2!1str!2str!4v1744756420094!5m2!1str!2str" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 px-20">
                    <h2 className="text-xl font-bold tracking-widest">İLETİŞİM BİLGİLERİ</h2>
                    <h3 className="text-lg font-semibold tracking-wide">HADİ KONUŞALIM</h3>
                    <a href="mailto:arabacilarpansiyon@gmail.com" className="text-gray-600 hover:underline">arabacilarpansiyon@gmail.com</a>
                    <div className="flex flex-col gap-1">
                        <a href="tel:+905331625539" className="hover:underline">0533 162 55 39</a>
                    </div>
                    <h3 className="text-lg font-semibold tracking-wide mt-4">BİZİ ZİYARET ET</h3>
                    <p className="text-gray-700">Tuna Mah. 1690 Sk. No:71, Karşıyaka / İZMİR</p>
                    <div className="flex flex-row gap-4 mt-2">
                        <a href={`https://api.whatsapp.com/send?phone=+905331625539&text=${encodeURIComponent("Merhaba, Boş odanız var mı?")}`} aria-label="WhatsApp" className="hover:scale-110 transition">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/arabacilar.pansiyon/" aria-label="Instagram" className="hover:scale-110 transition">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            {/* Menü Barı */}
            <div className="w-full bg-[#383e42] text-white py-3 mt-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
                    {menu.map((item) => (
                        <a key={item.name} href={item.href} className="hover:underline opacity-90 hover:opacity-100 transition">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-full text-[#383e42] py-3 mt-6">
                <div className="max-w-7xl mx-auto w-full items-center flex flex-col justify-center text-sm">
                    <div className="flex flex-col items-center mb-10">
                        <img src="/arabacılarpansiyon.svg" alt="Arabacılar Pansiyon & Hotel" className="w-44 text-[#383e42]" />
                        <p>© {year} Arabacılar Pansiyon & Hotel. Tüm hakları saklıdır.</p>
                    </div>
                    <div>
                        <Link href={"https://theoctopuslabs.com"} target="_blank" className="hover:underline opacity-90 hover:opacity-100 transition text-rose-500 font-bold text-xs ">
                            <p>The Octopus Labs</p>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}
