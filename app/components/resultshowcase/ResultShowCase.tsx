"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart2, Globe, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ResultsShowcase() {
    const stats = [
        { value: "3.2x", label: "Average ROI", icon: <BarChart2 className="h-6 w-6" /> },
        { value: "+245%", label: "Lead Growth", icon: <Zap className="h-6 w-6" /> },
        { value: "1.4M", label: "Traffic Generated", icon: <Globe className="h-6 w-6" /> },
    ];

    const caseHighlights = [
        {
            title: "E-commerce Brand Scaling",
            result: "12x Revenue Growth in 6 Months",
            highlightColor: "border-l-indigo-500", // Left accent border
        },
        {
            title: "SaaS Startup Launch",
            result: "5,000+ Beta Signups in 30 Days",
            highlightColor: "border-l-amber-500",
        },
        {
            title: "Local Business Expansion",
            result: "From $10k to $150k/mo in Ad Revenue",
            highlightColor: "border-l-emerald-500",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-primary bg-primary/10 border-primary/20">
                        Real Impact
                    </Badge>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground"
                    >
                        Results That Speak for Themselves
                    </motion.h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We don’t just promise growth—we deliver measurable, scalable success.
                    </p>
                </div>

                {/* Animated Stats */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-lg border bg-card hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                                    <p className="text-muted-foreground">{stat.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Professional Case Study Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {caseHighlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group border-l-4 ${item.highlightColor} bg-card rounded-lg p-6 border hover:shadow-md transition-all`}
                        >
                            <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                            <p className="mb-4 text-muted-foreground">{item.result}</p>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-primary hover:bg-primary/10 transition-colors group-hover:translate-x-1"
                            >
                                View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Button size="lg" className="rounded-full">
                        See All Success Stories
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}