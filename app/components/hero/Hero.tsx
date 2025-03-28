import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    {/* Tagline */}
                    <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 dark:bg-primary/5 dark:ring-primary/30">
                        Transforming brands in the digital age
                    </span>

                    {/* Main heading */}
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        Elevate Your Brand With{" "}
                        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            Data-Driven
                        </span>{" "}
                        Marketing
                    </h1>

                    {/* Subheading */}
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                        We craft tailored marketing strategies that drive growth, engagement,
                        and measurable results for your business.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/contact">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full"
                        >
                            <Link href="#services">
                                Explore Services
                            </Link>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className="flex flex-col items-center">
                            <p className="text-4xl font-bold text-primary">250+</p>
                            <p className="text-muted-foreground">Happy Clients</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-4xl font-bold text-primary">98%</p>
                            <p className="text-muted-foreground">Retention Rate</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-4xl font-bold text-primary">5x</p>
                            <p className="text-muted-foreground">Average ROI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}