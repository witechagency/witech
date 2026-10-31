import { staticSeo, useSeo } from '../lib/seo';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from './sections/Services';
import { Vision } from './sections/Vision';
import { Advantages } from './sections/Advantages';
import { Process } from './sections/Process';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { ContactButton } from '../components/ContactButton';
import { Footer } from '../components/Footer';
import { Technologies } from './sections/Technologies';
import { SmoothScroll } from '../components/SmoothScroll';

export function Home() {
    useSeo(staticSeo('/'));
    return (
        <SmoothScroll>
            <div className="min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <Services />
                    <Vision />
                    <Advantages />
                    <Process />
                    <Pricing />
                    <Testimonials />
                    <Technologies />
                </main>
                <ContactButton />
                <Footer />
            </div>
        </SmoothScroll>
    );
}
