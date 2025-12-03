import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from './sections/Services';
import { Advantages } from './sections/Advantages';
import { Process } from './sections/Process';
import { Pricing } from './sections/Pricing';
import { Portfolio } from './sections/Portfolio';
import { TechStack } from './sections/TechStack';
import { ContactButton } from '../components/ContactButton';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <Services />
                <Advantages />
                <Process />
                <Pricing />
                <Portfolio />
                <TechStack />
            </main>
            <ContactButton />
            <Footer />
        </div>
    );
}
