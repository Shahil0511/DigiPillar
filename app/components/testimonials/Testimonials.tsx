"use client";
import { motion } from "framer-motion";
import { Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
    const testimonials = [
        {
            quote: "This marketing team transformed our lead generation. We went from 50 to 500+ qualified leads per month in just 90 days.",
            author: "Sarah K., CMO at TechScale",
            company: "Enterprise SaaS",
        },
        {
            quote: "The most data-driven agency we've worked with. They tripled our organic traffic while reducing our CAC by 40%.",
            author: "Michael T., Founder at Bloom",
            company: "E-commerce",
        },
        {
            quote: "Exceptional strategic thinking combined with flawless execution. Our revenue grew 5x without increasing our budget.",
            author: "David L., CEO at Nexa",
            company: "Fintech Startup",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground"
                    >
                        Trusted by Innovative Brands
                    </motion.h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Don't just take our word for it
                    </p>
                </div>

                {/* Testimonial Timeline */}
                <div className="relative">
                    {/* Decorative line */}
                    <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-16 md:space-y-24">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Decorative dot */}
                                <div className="hidden md:block absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 z-10" />

                                {/* Quote */}
                                <div className={`flex-1 p-8 rounded-lg bg-muted/50 backdrop-blur-sm border ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                                    <Quote className="h-6 w-6 text-primary mb-4 opacity-70" />
                                    <p className="text-lg italic text-foreground mb-6">
                                        {testimonial.quote}
                                    </p>
                                    <div>
                                        <p className="font-medium text-foreground">{testimonial.author}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Logo Cloud */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <p className="text-center text-muted-foreground mb-8">
                        Trusted by teams at
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-80">
                        {["Forbes", "Google", "Microsoft", "Stripe", "Shopify", "Amazon"].map((logo, index) => (
                            <div key={index} className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors">
                                {logo}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}