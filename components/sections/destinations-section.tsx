"use client"

import ScrollAnimatedSection from "@/components/common/scroll-animated-section"
import SectionHeading from "@/components/ui/section-heading"
import DestinationCard from "@/components/ui/destination-card"

export default function DestinationsSection() {
  return (
    <ScrollAnimatedSection id="destinations" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Where Will You Go Next?"
          subtitle="Discover our handpicked destinations and start dreaming about your next adventure"
        />

        {/* Destination 1 */}
        <DestinationCard
          image="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2574&auto=format&fit=crop"
          location="Greece"
          title="Santorini: Luxury Coastal Escape"
          description="Immerse yourself in the breathtaking beauty of Santorini's white-washed buildings, crystal-clear
            waters, and legendary sunsets. Our curated experience includes private villa stays, yacht excursions,
            and exclusive wine tastings."
          reverse={false}
        />

        {/* Destination 2 */}
        <DestinationCard
          image="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop"
          location="Argentina & Chile"
          title="Patagonia: Adventure in the Wild"
          description="Discover the untamed beauty of Patagonia with its towering mountains, pristine lakes, and vast
            wilderness. Our adventure packages include guided hikes, luxury glamping, and wildlife encounters
            you'll never forget."
          reverse={true}
        />

        {/* Destination 3 */}
        <DestinationCard
          image="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2940&auto=format&fit=crop"
          location="Morocco"
          title="Morocco: Cultural Immersion Journey"
          description="Lose yourself in the vibrant colors, exotic scents, and rich traditions of Morocco. From the bustling
            souks of Marrakech to the serene Sahara Desert, our cultural journeys offer authentic experiences with
            local guides."
          reverse={false}
        />

        {/* Destination 4 */}
        <DestinationCard
          image="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2940&auto=format&fit=crop"
          location="Japan"
          title="Japan: Zen & Neon City Life"
          description="Experience the perfect harmony of ancient traditions and futuristic innovation in Japan. Our carefully
            crafted itineraries include private tea ceremonies, exclusive ryokan stays, and insider access to
            Tokyo's vibrant neighborhoods."
          reverse={true}
        />
      </div>
    </ScrollAnimatedSection>
  )
}
