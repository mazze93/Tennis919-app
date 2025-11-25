import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import windbreaker from "@assets/generated_images/retro_forest_green_windbreaker.png";
import polo from "@assets/generated_images/terracotta_tennis_polo_shirt.png";
import sweatpants from "@assets/generated_images/coral_tennis_sweatpants.png";
import beanie from "@assets/generated_images/mint_tennis_beanie_hat.png";

export default function WinterCollection() {
  // TODO: Replace with real product data from backend
  const products = [
    {
      id: 1,
      name: "Forest Green Windbreaker",
      price: 89,
      image: windbreaker,
      category: "Winter Collection",
    },
    {
      id: 2,
      name: "Terracotta Polo Shirt",
      price: 45,
      image: polo,
      category: "Winter Collection",
    },
    {
      id: 3,
      name: "Coral Tennis Sweatpants",
      price: 65,
      image: sweatpants,
      category: "Winter Collection",
    },
    {
      id: 4,
      name: "Soft Mint Beanie",
      price: 28,
      image: beanie,
      category: "Winter Collection",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-winter-collection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-secondary text-secondary-foreground mb-4" data-testid="badge-new-collection">
            New Collection
          </Badge>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4" data-testid="text-collection-title">
            Winter Tennis Apparel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Retro-inspired, modern performance. Stay warm and stylish on the court with our exclusive winter collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <LinkButton href="/shop" variant="outline" size="lg" data-testid="button-view-all">
            View Full Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
