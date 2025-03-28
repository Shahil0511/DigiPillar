import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, BarChart2, Settings, Monitor, Mail, Users } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Digital Strategy",
            description: "Comprehensive digital roadmaps tailored to your business goals and market position.",
            icon: <Rocket className="h-8 w-8 text-primary" />,
            badge: "Popular"
        },
        {
            title: "Performance Marketing",
            description: "Data-driven campaigns that maximize ROI across all digital channels.",
            icon: <BarChart2 className="h-8 w-8 text-primary" />,
            badge: null
        },
        {
            title: "SEO Optimization",
            description: "Sustainable organic growth through technical and content excellence.",
            icon: <Settings className="h-8 w-8 text-primary" />,
            badge: null
        },
        {
            title: "Web Design & Development",
            description: "High-converting websites built for speed, usability, and search visibility.",
            icon: <Monitor className="h-8 w-8 text-primary" />,
            badge: null
        },
        {
            title: "Email Marketing",
            description: "Automated campaigns that nurture leads and drive repeat business.",
            icon: <Mail className="h-8 w-8 text-primary" />,
            badge: null
        },
        {
            title: "Social Media Management",
            description: "Brand-building content strategies for organic and paid social success.",
            icon: <Users className="h-8 w-8 text-primary" />,
            badge: null
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-primary bg-primary/10 border-primary/20">
                        Our Services
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Full-Service Digital Marketing Solutions
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We offer end-to-end marketing services designed to scale with your business.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                            <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-foreground">{service.title}</CardTitle>
                                </div>
                                {service.badge && (
                                    <Badge variant="secondary" className="ml-auto">
                                        {service.badge}
                                    </Badge>
                                )}
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{service.description}</p>
                                <div className="mt-4">
                                    <button className="text-sm font-medium text-primary hover:underline">
                                        Learn more →
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}