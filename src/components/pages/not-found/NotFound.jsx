import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import React from 'react';
import { useLocation } from 'react-router';

const NotFound = () => {
    const location = useLocation();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="mt-20 animate-fade-in text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        404
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                </div>

                {/* error message */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600 mb-2">
                        The page you're looking for seems to have vanished into thin air.
                    </p>
                    <p className="text-sm text-gray-500">
                        Route: <code className="bg-gray-100 px-2 py-1 rounded text-red-600">{location.pathname}</code>
                    </p>
                </div>
                <div className="space-y-4">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                        onClick={() => window.history.back()}
                    >
                        <Home className="h-5 w-5 mr-2" />
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;