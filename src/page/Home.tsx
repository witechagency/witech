import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from './sections/Services';
import { Advantages } from './sections/Advantages';
import { Process } from './sections/Process';
import { Pricing } from './sections/Pricing';
import { Portfolio } from './sections/Portfolio';
import { ContactButton } from '../components/ContactButton';
import { Footer } from '../components/Footer';
import { Technologies } from './sections/Technologies';
import { SmoothScroll } from '../components/SmoothScroll';

export function Home() {
    return (
        <SmoothScroll>
            <div className="min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <Services />
                    <Advantages />
                    <Process />
                    <Pricing />
                    <Portfolio />
                    <Technologies />
                </main>
                <ContactButton />
                <Footer />
            </div>
        </SmoothScroll>
    );
}
