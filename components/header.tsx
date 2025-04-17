import React from 'react'
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
export default function Header() {
    const menu = [
        { name: 'Anasayfa', href: '/' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'Lokasyon', href: '/lokasyon' },
        { name: 'SSS', href: '/sikca-sorulan-sorular' },
        { name: 'Sürdürülebilirlik', href: '/surdurulebilirlik-politikamiz' },
        { name: 'Odalar', href: '/odalarimiz' },
        { name: 'İletişim', href: '/iletisim' },
    ]
    return (
        <header className="relative w-full min-h-[120px] flex flex-col justify-end bg-white" style={{ minHeight: '120px' }}>
            <div className="relative z-10 flex flex-row justify-between items-center px-8 pt-6 pb-2 w-full  container mx-auto max-w-6xl">
                <div className="flex flex-col items-start">
                    <img src="/arabacılarpansiyon.svg" alt="Arabacılar Pansiyon & Hotel Logo" className="w-60 " />
                </div>
                <div>
                    <div className="flex flex-row items-end justify-end gap-2 border-b border-[#383e42] pb-4">
                        <a href="tel:05331625539" className="text-[#383e42] text-base font-semibold drop-shadow flex flex-row items-center gap-2"><FaPhoneAlt size={16}/> <span className="font-bold">0533 162 55 39</span></a>
                        <div className="flex flex-row gap-3 mt-1 justify-end">
                            <a href="https://wa.me/05331625539" aria-label="WhatsApp" className="bg-[#383e42]/90 rounded-full p-2 flex items-center justify-center hover:bg-red-700 transition">
                                <FaWhatsapp size={12} />
                            </a>
                            <a href="https://www.instagram.com/arabacilar.pansiyon/" aria-label="Instagram" className="bg-[#383e42]/90 rounded-full p-2 flex items-center justify-center hover:bg-red-700 transition">
                                <FaInstagram size={12} />
                            </a>
                        </div>
                    </div>
                    <nav className="relative z-10 w-full flex justify-center border-t border-white/30">
                        <ul className="flex flex-wrap gap-8 py-3 text-[#383e42] text-base font-medium">
                            {menu.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="group opacity-90 hover:opacity-100 transition">
                                        {item.name}
                                        <div className="h-1 w-0 group-hover:w-full bg-[#383e42] origin-left transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    )
}
