import { Briefcase, CheckCircle2, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Career Opportunities | SAAR Pharma",
    description: "Join SAAR Pharma and Nutraceutics. Discover open positions and career opportunities.",
};

const jobs = [
    {
        title: "QC & QA Chemist",
        qualification: "B.Pharm / B.Sc. Chemistry",
        experience: "Fresher or experienced",
        skills: [
            "Analysis using HPLC, UV, and titration methods",
            "Handling of laboratory documentation",
            "Preparation and review of quality-related records",
            "Knowledge of GMP documentation will be an added advantage",
        ]
    },
    {
        title: "Microbiologist",
        qualification: "B.Sc. / M.Sc. Microbiology",
        experience: "Fresher or experienced",
        skills: [
            "Knowledge of microbiological analysis",
            "Understanding of aseptic practices and basic GMP requirements",
            "Environmental monitoring and testing awareness preferred",
        ]
    },
    {
        title: "Production Operator",
        experience: "Relevant machine operation experience preferred",
        skills: [
            "Bottle washing",
            "Liquid filling and ROPP sealing",
            "Labelling machines",
            "Tablet punching & Capsule filling",
            "Alu-Alu packing & Coating machines",
        ]
    }
];

export default function CareersPage() {
    return (
        <>
            <section className="bg-primary pt-32 pb-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Opportunities</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    Join our team and contribute to quality healthcare manufacturing.
                </p>
            </section>

            <section className="py-20 bg-gray-50 min-h-[60vh]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center gap-3">
                            <Briefcase className="w-8 h-8 text-accent" />
                            Grow With Us
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At SAAR Pharma and Nutraceutics, we believe our people are the foundation of our success. We offer a professional working environment with opportunities to learn, grow, and contribute to the healthcare industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {jobs.map((job, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                                <h3 className="text-2xl font-bold text-primary mb-4">{job.title}</h3>

                                <div className="space-y-2 mb-6 text-gray-600">
                                    {job.qualification && (
                                        <p><strong>Qualification:</strong> {job.qualification}</p>
                                    )}
                                    <p><strong>Experience:</strong> {job.experience}</p>
                                </div>

                                <div className="mb-8 flex-1">
                                    <h4 className="font-bold text-accent mb-3">Key Skills / Operations:</h4>
                                    <ul className="space-y-2">
                                        {job.skills.map((skill, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                                                <span className="text-sm text-gray-600">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                                    <a href={`mailto:career@saarpharma.co.in?subject=Application for ${encodeURIComponent(job.title)}`}>
                                        Apply Now
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
                        <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
                        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                            If you are interested in any of the above positions, please apply by attaching your updated resume and emailing us directly.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="mailto:career@saarpharma.co.in" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl transition-colors">
                                <Mail className="w-6 h-6 text-accent" />
                                <span className="text-lg font-medium">career@saarpharma.co.in</span>
                            </a>
                            <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl">
                                <MapPin className="w-6 h-6 text-accent shrink-0" />
                                <span className="text-lg font-medium text-left">Sengarai SIDCO Industrial Estate, TN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
