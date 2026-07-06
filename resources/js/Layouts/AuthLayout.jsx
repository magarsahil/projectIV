export default function AuthLayout({ children, image }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl">
                {/* Left - Form Side */}
                <div className="w-full md:w-1/2 p-8 md:p-10">
                    {children}
                </div>

                {/* Right - Image Side */}
                <div className="hidden md:block w-1/2 relative min-h-[500px]">
                    <img 
                        src={image} 
                        alt="Decoration" 
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                </div>
            </div>

            {/* Bottom Terms */}
            <div className="fixed bottom-6 left-0 right-0 text-center">
                <p className="text-gray-500 text-sm">
                    By clicking continue, you agree to our{' '}
                    <a href="/terms" className="underline hover:text-gray-700 transition-colors">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="underline hover:text-gray-700 transition-colors">
                        Privacy Policy
                    </a>.
                </p>
            </div>
        </div>
    );
}