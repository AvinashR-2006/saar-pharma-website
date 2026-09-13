"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Certifications", href: "/certifications" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                        : "bg-white py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                            <Image
                                src="https://saarpharma.co.in/wp-content/uploads/2026/01/logo_final.png"
                                alt="SAAR Pharma Logo"
                                fill
                                sizes="48px"
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-bold text-lg md:text-xl text-primary whitespace-nowrap sr-only lg:not-sr-only">
                            SAAR Pharma and Nutraceuticals
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-semibold transition-colors hover:text-accent",
                                    pathname === link.href ? "text-accent" : "text-primary"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="sm" asChild className="ml-2 font-semibold">
                            <Link href="/contact">Inquire Now</Link>
                        </Button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden z-50 text-primary p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            className="fixed inset-0 bg-black/60 z-40 xl:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl xl:hidden overflow-y-auto"
                        >
                            <div className="flex flex-col pt-24 px-6 pb-8 gap-6 min-h-full">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className={cn(
                                                "block text-xl font-semibold border-b border-gray-100 pb-4",
                                                pathname === link.href ? "text-accent" : "text-primary"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.1 }}
                                    className="mt-auto pt-8"
                                >
                                    <Button size="lg" className="w-full" asChild onClick={closeMenu}>
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
