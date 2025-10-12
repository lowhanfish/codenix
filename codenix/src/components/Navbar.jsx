"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Sun, Moon } from "lucide-react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Sync theme with <html className="dark">
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const links = [
        { href: "/discover", label: "Discover" },
        { href: "/create", label: "Create Item" },
        { href: "/about", label: "About Us" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Codenix
                </Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* Search bar (hidden on small screens) */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 focus-within:ring-2 ring-blue-500 transition">
                        <Search size={18} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 w-32 sm:w-40"
                        />
                    </div>

                    {/* Theme toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? (
                            <Sun size={20} className="text-yellow-400" />
                        ) : (
                            <Moon size={20} className="text-gray-700 dark:text-gray-200" />
                        )}
                    </button>

                    {/* Profile photo */}
                    <button className="hidden sm:block rounded-full border-2 border-transparent hover:border-blue-500 transition">
                        <Image
                            src="https://i.pravatar.cc/40"
                            alt="Profile"
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                    </button>

                    {/* Hamburger menu (mobile only) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        {menuOpen ? (
                            <X size={24} className="text-gray-700 dark:text-gray-200" />
                        ) : (
                            <Menu size={24} className="text-gray-700 dark:text-gray-200" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <ul className="flex flex-col items-start gap-3 px-6 py-4">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="flex items-center gap-2 mt-3 w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <Search size={18} className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 flex-1"
                            />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
