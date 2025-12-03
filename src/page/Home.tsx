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
                <Technologies />
            </main>
            <ContactButton />
            <Footer />
        </div>
    );
}
