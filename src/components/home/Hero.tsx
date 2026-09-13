"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Slideshow/Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://saarpharma.co.in/wp-content/uploads/2026/01/image-7.jpeg')" }}
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-400 mb-6 max-w-4xl"
                    style={{ WebkitTextStroke: "1px #5cb85c" }}
                >
                    Your Trusted Partner in Oral Liquid, Tablet & Capsule Contract Manufacturing
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-200 mb-10 font-medium"
                >
                    GMP-Compliant. Quality-Driven. Patient-Focused.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button size="lg" className="rounded-full px-8 py-6 text-lg" asChild>
                        <Link href="/products">Explore Our Products</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Floating 3D Elements using Framer Motion (Optional abstract effect) */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl -z-0"
            />
            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-primary/30 blur-3xl -z-0"
            />
        </section>
    );
}
