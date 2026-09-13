import Image from "next/image";
import { CheckCircle2, ShieldCheck, Factory, Microscope } from "lucide-react";

export const metadata = {
    title: "Infrastructure & Facility | SAAR Pharma",
    description: "Explore our dedicated, GMP-compliant pharmaceutical manufacturing facility in Tamil Nadu, India.",
};

const galleryImages = [
    "/images/image 1.jpeg",
    "/images/image 2.jpeg",
    "/images/image 3.jpeg",
    "/images/image 4.jpeg",
    "/images/image 5.jpeg",
    "/images/image 6 .jpeg",
    "/images/image 7.jpeg",
    "/images/image 8.jpeg",
    "/images/image 9.jpeg",
    "/images/Openning.jpeg",
    "/images/Grand opening.jpeg",
];

export default function InfrastructurePage() {
    return (
        <>
            <section className="bg-primary pt-32 pb-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure & Facility</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    State-of-the-art GMP-compliant manufacturing at Sengarai, Tamil Nadu
                </p>
            </section>

            {/* Facility Description */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-20 relative overflow-hidden">

                        <Factory className="absolute -top-10 -right-10 w-64 h-64 text-gray-50 opacity-50 pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl font-bold text-primary mb-6 border-b pb-4">Our Manufacturing Plant</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                SAAR Pharma and Nutraceutics operates a dedicated pharmaceutical oral liquid manufacturing facility located at Plot No. 14, SIDCO Industrial Estate, Sengarai, Tamil Nadu, India.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                The manufacturing unit is established on a total plot area of 1000 square meters, with approximately 557.42 square meters of constructed area utilized for manufacturing operations, quality control laboratories, utilities, and administrative functions. The facility is situated within a clean industrial zone, free from contamination, offering excellent road connectivity.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                The plant is housed in a G+2 RCC structure, designed and developed in compliance with Schedule M and current Good Manufacturing Practices (cGMP). The building incorporates cleanroom-compatible finishes, including epoxy-coated floors, smooth washable walls with coving, and controlled access systems.
                            </p>

                            <div className="mt-10 pt-8 border-t border-gray-100">
                                <h3 className="text-2xl font-bold text-accent mb-6 flex items-center gap-3">
                                    <ShieldCheck className="w-8 h-8" />
                                    Facility Highlights
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Dedicated unit for oral liquid dosage forms",
                                        "ISO 8 / Class D HVAC-controlled areas",
                                        "Segregated storage areas for raw & finished goods",
                                        "In-house Effluent Treatment Plant (ETP)",
                                        "Well-equipped Quality Control laboratories",
                                        "Unidirectional flow of personnel and materials",
                                    ].map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                            <Microscope className="w-8 h-8 text-accent" />
                            Facility Gallery
                        </h2>
                        <p className="text-xl text-gray-600">A glimpse into our controlled manufacturing environment</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {galleryImages.map((src, index) => (
                            <div
                                key={index}
                                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50"
                            >
                                <Image
                                    src={src}
                                    alt={`Facility Area ${index + 1}`}
                                    fill
                                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
