"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate slight delay for better UX
        setTimeout(() => {
            const mailtoLink = `mailto:info@saarpharma.co.in?subject=${encodeURIComponent(
                formData.subject
            )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;

            window.location.href = mailtoLink;
            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <section className="bg-primary pt-32 pb-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    We are here to answer your pharmaceutical and nutraceutical manufacturing inquiries
                </p>
            </section>

            <section className="py-20 bg-gray-50 min-h-[60vh]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

                        {/* Contact Details */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Fill out the form and our team will get back to you within 24 hours. Alternatively, reach out via phone or email for immediate assistance.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                                        <Phone className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-1">Phone / WhatsApp</h3>
                                        <a href="tel:+919941690113" className="text-gray-600 hover:text-accent transition-colors block">
                                            +91 99416 90113
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                                        <Mail className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-1">Email Address</h3>
                                        <a href="mailto:info@saarpharma.co.in" className="text-gray-600 hover:text-accent transition-colors block">
                                            info@saarpharma.co.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                                        <MapPin className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-1">Manufacturing Facility</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            M/s. SAAR PHARMA AND NUTRACEUTICS<br />
                                            472/3, Plot No.14, SIDCO Industrial Estate<br />
                                            Sengarai Village, Sengarai, 602026<br />
                                            Uthukottai Taluk, Tiruvallur District, Tamil Nadu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-gray-50/50"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-gray-50/50"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-gray-50/50"
                                            placeholder="Manufacturing Inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-gray-50/50 resize-y"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full text-lg h-14"
                                        disabled={isSubmitting}
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        {isSubmitting ? "Opening Email Client..." : "Send Message"}
                                    </Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section className="h-[400px] w-full bg-gray-200 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15533.25052309193!2d79.8829363!3d13.3105315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52e1b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sSAAR%20Pharma%20and%20Nutraceutics!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SAAR Pharma Location"
                    className="absolute inset-0"
                />
            </section>
        </>
    );
}
