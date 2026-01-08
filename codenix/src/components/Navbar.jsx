"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Sun, Moon, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    // 🧩 Struktur menu — nested & fleksibel
    const links = [
        { href: "/", label: "Home" },
        { href: "/discover", label: "Discover" },
        {
            label: "Create Item",
            submenu: [
                {
                    label: "Single Item",
                    submenu: [
                        { label: "NFT", href: "/create/single/nft" },
                        { label: "Image", href: "/create/single/image" },
                        { label: "Audio", href: "/create/single/audio" },
                    ],
                },
                { label: "Multiple Items", href: "/create/multiple" },
            ],
        },
        { href: "/about", label: "About Us" },
    ];

    return (
        <nav className="shadow-md px-1 sm:px-10 lg:px-40 fixed top-0 left-0 w-full z-50 border-b border-border bg-surface/70 backdrop-blur-lg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400 transition-colors duration-300">
                    <span className="dark:brightness-110" style={{ filter: darkMode ? 'brightness(1.2)' : 'none' }}>
                        <Image src="/icon2.png" alt="Logo" width={60} height={60} />
                    </span>
                </Link>

                {/* 🌐 Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li
                            key={link.label}
                            className="relative group"
                            onMouseEnter={() => setActiveMenu(link.label)}
                            onMouseLeave={() => {
                                setActiveMenu(null);
                                setActiveSubMenu(null);
                            }}
                        >
                            {/* Main Link / Button */}
                            {link.submenu ? (
                                <button
                                    className="inline-flex items-center gap-1 text-sm font-light transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-secondary-500 text-text-secondary"
                                >
                                    {link.label}
                                    <ChevronDown
                                        size={14}
                                        className="group-hover:text-secondary-400 transition-colors duration-300"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="inline-block text-sm font-light transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-secondary-500 text-text-secondary"
                                >
                                    {link.label}
                                </Link>
                            )}

                            {/* Submenu Level 1 */}
                            {link.submenu && (
                                <div
                                    className={`absolute left-0 top-5 mt-2 min-w-[200px] rounded-xl border shadow-lg transition-all duration-300 ease-out ${activeMenu === link.label
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 -translate-y-3 invisible"
                                        }`}
                                    style={{
                                        backgroundColor: 'var(--color-surface)',
                                        borderColor: 'var(--color-border)'
                                    }}
                                >
                                    <ul className="py-2">
                                        {link.submenu.map((sub) => (
                                            <li
                                                key={sub.label}
                                                className="relative group/item"
                                                onMouseEnter={() => setActiveSubMenu(sub.label)}
                                                onMouseLeave={() => setActiveSubMenu(null)}
                                            >
                                                {/* Submenu Item */}
                                                {sub.submenu ? (
                                                    <button
                                                        className="flex items-center justify-between w-full px-4 py-2 text-sm transition-colors hover:text-secondary-500 hover:bg-surface-hover text-text-secondary"
                                                    >
                                                        {sub.label}
                                                        <ChevronDown size={12} className="rotate-[-90deg]" style={{ color: 'var(--color-text-muted)' }} />
                                                    </button>
                                                ) : (
                                                    <Link
                                                        href={sub.href}
                                                        className="block px-4 py-2 text-sm transition-colors hover:text-secondary-500 hover:bg-surface-hover text-text-secondary"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                )}

                                                {/* Submenu Level 2 */}
                                                {sub.submenu && (
                                                    <div
                                                        className={`absolute left-full top-0 ml-1 min-w-[180px] rounded-xl border shadow-lg transition-all duration-300 ease-out ${activeSubMenu === sub.label
                                                            ? "opacity-100 translate-x-0 visible"
                                                            : "opacity-0 -translate-x-2 invisible"
                                                            }`}
                                                        style={{
                                                            backgroundColor: 'var(--color-surface)',
                                                            borderColor: 'var(--color-border)'
                                                        }}
                                                    >
                                                        <ul className="py-2">
                                                            {sub.submenu.map((deep) => (
                                                                <li key={deep.label}>
                                                                    <Link
                                                                        href={deep.href}
                                                                        className="block px-4 py-2 text-sm transition-colors hover:text-secondary-500 hover:bg-surface-hover text-text-secondary"
                                                                    >
                                                                        {deep.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* 🔧 Kanan: Search + Theme + Profile + Menu */}
                <div className="flex items-center gap-3">
                    {/* Search */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-hover focus-within:ring-2 focus-within:ring-primary-500 transition">
                        <Search size={18} style={{ color: 'var(--color-text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm w-32 sm:w-40 text-text placeholder-text-muted"
                        />
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full transition hover:bg-surface-hover"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? (
                            <Sun size={20} style={{ color: 'var(--color-warning-500)' }} />
                        ) : (
                            <Moon size={20} className="text-text-secondary" />
                        )}
                    </button>

                    {/* Profile */}
                    <button className="hidden sm:block rounded-full border-2 hover:border-primary-500 transition border-transparent">
                        <Image
                            src="/icon1.png"
                            alt="Profile"
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-md transition hover:bg-surface-hover"
                        style={{ backgroundColor: 'var(--color-surface-hover)' }}
                    >
                        {menuOpen ? (
                            <X size={24} className="text-text" />
                        ) : (
                            <Menu size={24} className="text-text" />
                        )}
                    </button>
                </div>
            </div>

            {/* 📱 Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t transition-colors duration-300 bg-surface"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <ul className="flex flex-col px-6 py-4 gap-4">
                        {links.map((link) => (
                            <li key={link.label}>
                                {link.submenu ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setActiveMenu(activeMenu === link.label ? null : link.label)
                                            }
                                            className="flex justify-between items-center w-full font-medium transition-colors hover:text-secondary-500 text-text"
                                        >
                                            {link.label}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-300 ${activeMenu === link.label ? "rotate-180" : ""}`}
                                                style={{ color: 'var(--color-text)' }}
                                            />
                                        </button>

                                        {/* Submenu Level 1 */}
                                        {activeMenu === link.label && (
                                            <ul className="pl-4 mt-2 border-l transition-colors border-border">
                                                {link.submenu.map((sub) => (
                                                    <li key={sub.label}>
                                                        {sub.submenu ? (
                                                            <>
                                                                <button
                                                                    onClick={() =>
                                                                        setActiveSubMenu(
                                                                            activeSubMenu === sub.label ? null : sub.label
                                                                        )
                                                                    }
                                                                    className="flex justify-between w-full text-sm transition-colors hover:text-secondary-500 text-text-secondary"
                                                                >
                                                                    {sub.label}
                                                                    <ChevronDown
                                                                        size={14}
                                                                        className={`transition-transform ${activeSubMenu === sub.label ? "rotate-180" : ""}`}
                                                                        style={{ color: 'var(--color-text-tertiary)' }}
                                                                    />
                                                                </button>
                                                                {activeSubMenu === sub.label && (
                                                                    <ul className="pl-4 mt-1 border-l border-border">
                                                                        {sub.submenu.map((deep) => (
                                                                            <li key={deep.label}>
                                                                                <Link
                                                                                    href={deep.href}
                                                                                    onClick={() => setMenuOpen(false)}
                                                                                    className="block py-1 text-sm transition-colors hover:text-secondary-500 text-text-secondary"
                                                                                >
                                                                                    {deep.label}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={sub.href}
                                                                onClick={() => setMenuOpen(false)}
                                                                className="block py-1 text-sm transition-colors hover:text-secondary-500 text-text-secondary"
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block font-medium transition-colors hover:text-secondary-500 text-text"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

