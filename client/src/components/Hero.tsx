import { LinkButton } from "@/components/ui/link-button";
import { Calendar, ShoppingBag } from "lucide-react";
import heroImg from "@assets/IMG_1748_1764042857651.jpeg";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[500px] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImg})` }} />
      
      {/* Dark wash gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[500px]">
        <div className="max-w-2xl">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg" data-testid="text-hero-title">
            Tennis Is For Everyone
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 font-medium drop-shadow-md leading-relaxed" data-testid="text-hero-subtitle">
            Personalized, inclusive tennis coaching in Durham, NC. Group clinics, private lessons, and winter-ready apparel.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <LinkButton
            href={EXTERNAL_LINKS.calendly.main}
            size="lg"
            className="bg-accent hover:bg-accent text-accent-foreground w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl"
            data-testid="button-book-lesson-hero"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Lesson
          </LinkButton>
          <LinkButton
            href="/shop"
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/15 w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl"
            data-testid="button-shop-hero"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop Collection
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
