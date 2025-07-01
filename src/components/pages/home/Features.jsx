import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Shield, Users, Zap } from "lucide-react";


const Features = () => {
    const features = [
        {
            icon: <Calendar className="h-8 w-8 text-blue-600" />,
            title: "Easy Event Creation",
            description: "Create and customize events in minutes with our intuitive event builder"
        },
        {
            icon: <Users className="h-8 w-8 text-purple-600" />,
            title: "Attendee Management",
            description: "Track registrations, send updates, and manage attendee communications"
        },
        {
            icon: <Zap className="h-8 w-8 text-orange-600" />,
            title: "Real-time Analytics",
            description: "Get insights into ticket sales, attendee engagement, and event performance"
        },
        {
            icon: <Shield className="h-8 w-8 text-green-600" />,
            title: "Secure Payments",
            description: "Process payments safely with our encrypted payment processing system"
        }
    ];
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Everything You Need to Succeed
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Powerful tools and features designed to make event management effortless and engaging
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/70 backdrop-blur-sm">
                            <CardHeader className="text-center pb-4">
                                <div className="flex justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center text-gray-600">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;