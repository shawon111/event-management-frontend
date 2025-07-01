import { Calendar } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header>
            {/* navigation */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                EventLy
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</Link>
                            <Link to="/events/add-event" className="text-gray-700 hover:text-blue-600 transition-colors">Add Event</Link>
                            <Link to="/events/my-events" className="text-gray-700 hover:text-blue-600 transition-colors">My Events</Link>
                            <Link to='/auth/login'>
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;