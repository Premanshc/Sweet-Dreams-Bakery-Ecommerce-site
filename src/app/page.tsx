import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { AboutSection } from '@/components/home/AboutSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
