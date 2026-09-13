"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pill } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Oral Liquids", "Tablets & Capsules", "Nutraceuticals", "API"];

const products = [
    {
        id: 1,
        name: "Tidocoff-LS Syrup",
        category: "Oral Liquids",
        image: "/images/Tidocoff-LS.JPG",
        description: "Contains Levosalbutamol, Ambroxol Hydrochloride, and Guaiphenesin. Used for productive cough, bronchitis, and asthma.",
    },
    {
        id: 2,
        name: "Tidocoff Syrup",
        category: "Oral Liquids",
        image: "/images/Tidocoff 1.jpg",
        description: "Combination: Dextromethorphan, Phenylephrine, and Chlorpheniramine. Relief from dry cough, sneezing, and throat irritation.",
    },
    {
        id: 3,
        name: "Tidocold Syrup",
        category: "Oral Liquids",
        image: "/images/Tidocold.JPG",
        description: "Effective formulation for cold symptoms including nasal congestion, runny nose, and body ache.",
    },
    {
        id: 4,
        name: "Tidocold Plus Syrup",
        category: "Oral Liquids",
        image: "/images/Tidocold Plus.JPG",
        description: "Enhanced cold relief formula with added ingredients for faster action against cold and flu symptoms.",
    },
    {
        id: 5,
        name: "Tidocoff AT Syrup",
        category: "Oral Liquids",
        image: "/images/Tidocoff-AT.JPG",
        description: "Specially formulated antitussive syrup for effective management of acute and chronic cough.",
    },
    {
        id: 6,
        name: "Tidocoff Junior Syrup",
        category: "Oral Liquids",
        image: "/images/Tidocoff Junior.JPG",
        description: "Paediatric cough syrup formulated specifically for children, providing gentle and effective cough relief.",
    },
    {
        id: 7,
        name: "Lpara-500 Suspension",
        category: "Oral Liquids",
        image: "/images/Lpara-500.JPG",
        description: "Contains Paracetamol 500 mg. Acts as an analgesic and antipyretic for relieving fever and mild to moderate pain.",
    },
    {
        id: 8,
        name: "Lpara-250 Suspension",
        category: "Oral Liquids",
        image: "/images/Lpara-250.JPG",
        description: "Contains Paracetamol Paediatric Oral Suspension I.P. (250 mg). Used in children for fever and pain relief.",
    },
    {
        id: 9,
        name: "Lpara-120 Suspension",
        category: "Oral Liquids",
        image: "/images/Lpara-120.JPG",
        description: "Paracetamol suspension 120 mg for infants and small children for gentle fever and pain management.",
    },
    {
        id: 10,
        name: "Multivitamin Capsules",
        category: "Tablets & Capsules",
        image: "/images/multivitamin capsule.png",
        description: "Complete nutritional supplement with essential vitamins and minerals for overall health and wellness.",
    },
    {
        id: 11,
        name: "Lafer-HB Syrup",
        category: "Nutraceuticals",
        image: "/images/Lafer-HB.JPG",
        description: "Haematinic and nutritional supplement. Helps in treating iron-deficiency anemia, improves hemoglobin levels.",
    },
    {
        id: 12,
        name: "Iron Syrup",
        category: "Nutraceuticals",
        image: "/images/iron syrup.png",
        description: "Iron supplementation syrup to support haemoglobin production and combat iron-deficiency conditions.",
    },
    {
        id: 13,
        name: "Vitamin Syrup",
        category: "Nutraceuticals",
        image: "/images/Vitamin syrup.png",
        description: "High-quality multivitamin syrup supporting daily health and overall well-being.",
    },
    {
        id: 14,
        name: "Calcium Suspension",
        category: "Nutraceuticals",
        image: "/images/Calcium suspension.png",
        description: "Calcium supplementation suspension for bone strength and overall skeletal health.",
    },
    {
        id: 15,
        name: "Enzyme Syrup",
        category: "Nutraceuticals",
        image: "/images/Enzymme syrup.png",
        description: "Digestive enzyme syrup to support healthy digestion and improve nutrient absorption.",
    },
    {
        id: 16,
        name: "API Compound",
        category: "API",
        image: "/images/currently-unavailable-sticker.jpg",
        description: "High-purity active pharmaceutical ingredient manufactured under strict quality controls.",
    },
];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = products.filter(
        (product) => activeCategory === "All" || product.category === activeCategory
    );

    return (
        <>
            <section className="bg-primary pt-32 pb-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    High-quality medicines and natural health supplements providing affordable healthcare solutions
                </p>
            </section>

            <section className="py-20 bg-gray-50 min-h-[60vh]">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                                    activeCategory === category
                                        ? "bg-accent text-white shadow-md"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group"
                                >
                                    <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
                                        <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wider">{product.category}</div>
                                        <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                            {product.description}
                                        </p>
                                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                                            <Link href={`/contact?subject=Inquiry regarding ${encodeURIComponent(product.name)}`}>
                                                Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <Pill className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                            <p className="text-xl font-medium">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
