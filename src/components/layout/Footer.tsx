import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block bg-white/10 p-2 rounded-lg">
                            <div className="relative w-32 h-12">
                                <Image
                                    src="https://saarpharma.co.in/wp-content/uploads/2026/01/logo_final.png"
                                    alt="SAAR Pharma Logo"
                                    fill
                                    sizes="128px"
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 max-w-xs leading-relaxed">
                            GMP-Compliant. Quality-Driven. Patient-Focused. Your trusted partner in pharmaceutical and nutraceutical contract manufacturing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-accent font-semibold text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Products", href: "/products" },
                                { name: "Infrastructure", href: "/infrastructure" },
                                { name: "Certifications", href: "/certifications" },
                                { name: "Careers", href: "/careers" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6 lg:col-span-2">
                        <h4 className="text-accent font-semibold text-lg">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                                <span>
                                    M/s. SAAR PHARMA AND NUTRACEUTICS, 472/3, Plot No.14, SIDCO
                                    Industrial Estate, Sengarai Village, Sengarai, 602026,
                                    Uthukottai Taluk, Tiruvallur District, Tamil Nadu
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a href="tel:+919941690113" className="hover:text-white transition-colors">
                                    +91 99416 90113
                                </a>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href="mailto:info@saarpharma.co.in" className="hover:text-white transition-colors">
                                    info@saarpharma.co.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} SAAR Pharma and Nutraceuticals. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
