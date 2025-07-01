import { Button } from "@/components/ui/button";
import { Link } from "react-router";


const HomeHero = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <div className="animate-fade-in">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        Create Amazing{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Events
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        The ultimate platform for event management. From small meetups to large conferences,
                        we help you create memorable experiences that bring people together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/auth/login">
                            <Button
                                size="lg"
                                className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                            >
                                Start Creating Events
                            </Button>
                        </Link>
                        <Link to="/events">
                            <Button
                                variant="outline"
                                size="lg"
                                className="cursor-pointer text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all duration-300"
                            >
                                Browse Events
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;