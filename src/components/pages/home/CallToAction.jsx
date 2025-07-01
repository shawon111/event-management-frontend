import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";


const CallToAction = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <Heart className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Create Your Next Event?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Join thousands of event organizers who trust EventPro to bring their vision to life
                </p>
                <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                >
                    Get Started Free
                </Button>
            </div>
        </section>
    );
};

export default CallToAction;