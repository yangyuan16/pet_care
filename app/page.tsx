import { BookingSection } from "@/components/booking-section";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { SpaceSection } from "@/components/space-section";

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Features />
        <SpaceSection />
        <Reviews />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

