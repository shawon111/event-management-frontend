import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";


const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Event Director",
            company: "Tech Conferences Inc.",
            content: "EventPro transformed how we organize our annual tech summit. The platform is intuitive and our attendee engagement increased by 40%.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        },
        {
            name: "Michael Rodriguez",
            role: "Marketing Manager",
            company: "Creative Agency",
            content: "The analytics dashboard gives us incredible insights. We can track everything from registration patterns to post-event feedback seamlessly.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
            name: "Emily Johnson",
            role: "Nonprofit Coordinator",
            company: "Community Foundation",
            content: "As a nonprofit, we needed an affordable solution that didn't compromise on features. EventPro delivered exactly what we needed.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        }
    ];
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Trusted by Event Organizers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See what our customers have to say about their experience with EventPro
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/70 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        <p className="text-sm text-blue-600">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;