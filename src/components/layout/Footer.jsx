import { Calendar } from "lucide-react";
import { Link } from "react-router";


const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            {/* logo */}
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <Calendar className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">EventLy</span>
                            </div>
                            <p className="text-gray-400">
                                Creating memorable events, one experience at a time.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link to="#" className="hover:text-white transition-colors">Features</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Pricing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link to="#" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 EventLy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;