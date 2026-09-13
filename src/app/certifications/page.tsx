import Image from "next/image";
import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Certifications | SAAR Pharma",
    description: "View SAAR Pharma's industry certifications including ISO, FSSAI, ZED, and MSME.",
};

const certifications = [
    {
        name: "FSSAI",
        desc: "Food Safety and Standards Authority of India Certified",
        logo: "/images/fssai logo.jpg",
    },
    {
        name: "ISO Certified",
        desc: "International Organization for Standardization",
        logo: "/images/ISO logo copie.png",
    },
    {
        name: "ZED Certified",
        desc: "Zero Defect Zero Effect",
        logo: "/images/zed logo.jpeg",
    },
    {
        name: "MSME Certified",
        desc: "Micro, Small, and Medium Enterprises",
        logo: "/images/msme logo.jpeg",
    },
];

export default function CertificationsPage() {
    return (
        <>
            <section className="bg-primary pt-32 pb-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Approvals</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    Committed to the highest standards of quality, safety, and operational excellence
                </p>
            </section>

            <section className="py-20 bg-gray-50 min-h-[60vh]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                            <Award className="w-8 h-8 text-accent" />
                            Our Credentials
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We adhere strictly to all regulatory norms and statutory guidelines ensuring our products are safe, efficacious, and of the highest quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {certifications.map((cert, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-shadow">
                                <div className="relative w-32 h-32 mb-6 bg-gray-50 flex items-center justify-center p-4 rounded-xl border border-gray-100">
                                    <Image
                                        src={cert.logo}
                                        alt={cert.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{cert.name}</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-1">{cert.desc}</p>
                                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                                    <a href={cert.logo} download target="_blank" rel="noopener noreferrer">
                                        <Download className="w-4 h-4 mr-2" /> View Certificate
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
