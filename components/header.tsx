"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            // Menü açıldığında scrollu engelle
            document.body.style.overflow = 'hidden';
        } else {
            // Menü kapandığında scrollu geri aç
            document.body.style.overflow = 'auto';
        }

        // Component unmount olduğunda scrollu geri aç
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
            <div className="relative z-10 flex flex-row justify-between items-center px-8 pt-6 pb-2 w-full container mx-auto max-w-6xl">
                <Link href={"/"} className="flex flex-col items-start">
                    <img src="/arabacılarpansiyon.svg" alt="Arabacılar Pansiyon & Hotel Logo" className="w-60 md:w-60 w-40" />
                </Link>

                {isMobile ? (
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-[#383e42] p-2"
                            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-row items-end justify-end gap-2 border-b border-[#383e42] pb-4">
                            <a href="tel:05331625539" className="text-[#383e42] text-base font-semibold drop-shadow flex flex-row items-center gap-2"><FaPhoneAlt size={16} /> <span className="font-bold">0533 162 55 39</span></a>
                            <div className="flex flex-row gap-3 mt-1 justify-end">
                                <a href={`https://api.whatsapp.com/send?phone=+905331625539&text=${encodeURIComponent("Merhaba, Boş odanız var mı?")}`} aria-label="WhatsApp" className="bg-[#383e42]/90 rounded-full p-2 flex items-center justify-center hover:bg-red-700 transition">
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
                )}
            </div>

            {/* Mobil Menü */}
            {isMobile && (
                <div
                    className={`fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out pt-8`}
                    style={{ top: '126px' }}
                >
                    <div className="px-8 pb-6 flex flex-col">
                        <div className="border-b border-[#383e42] pb-4 mb-4">
                            <a href="tel:05331625539" className="text-[#383e42] text-base font-semibold drop-shadow flex flex-row items-center gap-2 mb-3">
                                <FaPhoneAlt size={16} /> <span className="font-bold">0533 162 55 39</span>
                            </a>
                            <div className="flex flex-row gap-3 mt-1">
                                <a href={`https://api.whatsapp.com/send?phone=+905331625539&text=${encodeURIComponent("Merhaba, Boş odanız var mı?")}`} aria-label="WhatsApp" className="bg-[#383e42]/90 rounded-full p-2 flex items-center justify-center hover:bg-red-700 transition">
                                    <FaWhatsapp size={12} />
                                </a>
                                <a href="https://www.instagram.com/arabacilar.pansiyon/" aria-label="Instagram" className="bg-[#383e42]/90 rounded-full p-2 flex items-center justify-center hover:bg-red-700 transition">
                                    <FaInstagram size={12} />
                                </a>
                            </div>
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-5 text-[#383e42] text-lg font-medium">
                                {menu.map((item) => (
                                    <li key={item.name} onClick={() => setIsMenuOpen(false)}>
                                        <a href={item.href} className="block py-2 opacity-90 hover:opacity-100 transition border-b border-[#383e42]/20">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
