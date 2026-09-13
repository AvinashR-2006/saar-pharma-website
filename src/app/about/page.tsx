import Image from "next/image";
import { CheckCircle2, Target, Lightbulb } from "lucide-react";

export const metadata = {
    title: "About Us | SAAR Pharma and Nutraceuticals",
    description: "Learn about SAAR Pharma's commitment to delivering high-quality, safe, and effective healthcare products.",
};

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary pt-32 pb-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    Delivering high-quality, safe, and effective healthcare and wellness products
                </p>
            </section>

            {/* Introduction */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-primary mb-6">SAAR Pharma and Nutraceutics</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                SAAR Pharma and Nutraceutics is a professionally managed manufacturing company engaged in the production of pharmaceutical oral liquid formulations and nutraceutical products. We are committed to delivering high-quality, safe, and effective healthcare and wellness products in compliance with applicable regulatory and quality standards.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 pt-4">
                                <div>
                                    <h3 className="text-xl font-bold text-accent mb-4">Pharmaceuticals</h3>
                                    <ul className="space-y-3">
                                        {["Oral liquids: syrups, suspensions & solutions", "Paediatric and adult formulations", "GMP-oriented manufacturing practices"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-accent mb-4">Nutraceuticals</h3>
                                    <ul className="space-y-3">
                                        {["Tablets", "Capsules", "Liquid supplements", "Protein powders"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Contract Manufacturing</h3>
                                <p className="text-gray-600">
                                    We provide third-party (contract) manufacturing services for pharmaceutical and nutraceutical brands, ensuring confidentiality, consistency, and regulatory compliance.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://saarpharma.co.in/wp-content/uploads/2026/01/SAAR-FRONTAGE.png"
                                alt="SAAR Pharma Facility"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision and Mission */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Vision & Mission</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
                            <Lightbulb className="w-12 h-12 text-accent mb-6 relative z-10" />
                            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                                To be a trusted pharmaceutical company by manufacturing safe and good quality oral liquid medicines.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
                            <Target className="w-12 h-12 text-accent mb-6 relative z-10" />
                            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Our Mission</h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Manufacture safe and quality oral liquid medicines",
                                    "Follow Good Manufacturing Practices (GMP) and all regulatory requirements",
                                    "Check and control quality at every stage of manufacturing",
                                    "Ensure patient safety at all times",
                                    "Provide proper training to employees",
                                    "Continuously improve our systems and processes",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
