import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = '';
        document.body.style.overflow = 'hidden';

        const timeout = setTimeout(() => {
            document.body.style.overflow = '';
            setLoading(false);
        }, 700);

        return () => {
            clearTimeout(timeout);
            document.body.style.overflow = '';
        };
    }, [pathname]);

    if (loading) {
        return (
            <div className="fixed inset-0 z-[9999] bg-white backdrop-blur-sm flex items-center justify-center">
                <div className="relative w-24 h-24">
                    {/* Outer ring - blue scheme */}
                    <div className="absolute inset-0 border-4 border-blue-300/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />

                    {/* Inner logo - blue gradient */}
                    <div className="absolute inset-4 flex items-center justify-center">
                        <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 shadow-md" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping delay-300" />
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping delay-150" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping delay-450" />
                        </div>
                    </div>

                    {/* Bouncing dots - blue theme */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300" />
                </div>
            </div>
        );
    }

    return null;
};

export default ScrollToTop;