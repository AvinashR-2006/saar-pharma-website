import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FlaskConical, Pill, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">About SAAR Pharma</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SAAR Pharma and Nutraceutics is a professionally managed manufacturing company engaged in the production of pharmaceutical oral liquid formulations and nutraceutical products. We are committed to delivering high-quality, safe, and effective healthcare and wellness products complying with regulatory standards.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "GMP-oriented manufacturing practices",
                  "In-process & finished product testing",
                  "Complete batch documentation & traceability",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8" variant="outline">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Products Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Product Portfolio</h2>
            <p className="text-gray-600 text-lg">
              High-quality medicines and natural health supplements providing affordable healthcare solutions for various therapeutic areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pharmaceuticals",
                icon: Pill,
                desc: "High-quality medicines providing affordable healthcare solutions.",
              },
              {
                title: "Nutraceuticals",
                icon: FlaskConical,
                desc: "Natural health supplements combining nutrition and pharmaceutical benefits.",
              },
              {
                title: "API",
                icon: ShieldCheck,
                desc: "Reliable Supply of Quality-assured Active Pharmaceutical Ingredients.",
              },
            ].map((prod, i) => (
              <div key={i} className="bg-white border rounded-2xl p-8 hover:shadow-xl transition-shadow border-gray-100 group">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <prod.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{prod.title}</h3>
                <p className="text-gray-600 mb-6">{prod.desc}</p>
                <Link href="/products" className="text-accent font-semibold inline-flex items-center hover:text-green-600 transition-colors">
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Contact us today to discuss your contract manufacturing needs or to learn more about our comprehensive product portfolio.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 bg-accent text-white hover:bg-green-600" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
