const services = [
    {
        title: 'Frequently Asked Questions',
        description: 'Updates on safe Shopping in our Stores',
        image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop',
        bgColor: 'bg-pink-100',
    },
    {
        title: 'Online Payment Process',
        description: 'Updates on safe Shopping in our Stores',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        bgColor: 'bg-emerald-100',
    },
    {
        title: 'Home Delivery Options',
        description: 'Updates on safe Shopping in our Stores',
        image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
        bgColor: 'bg-amber-100',
    },
];

export default function ServicesToHelp() {
    return (
        <section className="bg-white py-12 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Services To Help You Shop
                </h2>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-[#f5f5f5] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                        >
                            {/* Text Area */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {service.description}
                                </p>
                            </div>

                            {/* Image Area */}
                            <div className={`w-full h-48 ${service.bgColor} overflow-hidden`}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
