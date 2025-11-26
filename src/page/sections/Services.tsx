import { ServiceCard } from '../../components/ServiceCard';
import { services } from '../../lib/constant';

export function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Expertises</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Des solutions digitales sur mesure pour propulser votre activité.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            className="hover:-translate-y-2"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
