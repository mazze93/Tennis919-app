import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Zap, ExternalLink, Heart } from "lucide-react";
import windbreaker from "@assets/generated_images/retro_forest_green_windbreaker.png";
import polo from "@assets/generated_images/terracotta_tennis_polo_shirt.png";
import sweatpants from "@assets/generated_images/coral_tennis_sweatpants.png";
import beanie from "@assets/generated_images/mint_tennis_beanie_hat.png";

export default function Shop() {
  const premiumProducts = [
    {
      id: 1,
      name: "Teal Performance Windbreaker",
      price: 99,
      image: windbreaker,
      category: "Outerwear",
      color: "Teal",
      description: "Water-resistant windbreaker with navy colorblock. Professional tournament-ready.",
      specs: ["Water-resistant shell", "Breathable lining", "Reflective trim"],
    },
    {
      id: 2,
      name: "Navy Premium Polo",
      price: 55,
      image: polo,
      category: "Tops",
      color: "Navy",
      description: "Moisture-wicking performance polo with cream trim.",
      specs: ["Moisture-wicking", "UV protection", "Stretchy fit"],
    },
    {
      id: 3,
      name: "Cream Tennis Sweatpants",
      price: 75,
      image: sweatpants,
      category: "Bottoms",
      color: "Cream",
      description: "Warm sweatpants with navy side stripe. Perfect for warmups.",
      specs: ["Warm fleece lining", "Tapered fit", "Tech pockets"],
    },
  ];

  const fundraisingProducts = [
    {
      id: 101,
      name: "Tennis 919 Branded Beanie",
      price: 18,
      category: "Accessories",
      color: "Teal",
      description: "Cozy winter beanie with embroidered Tennis 919 logo. Perfect for fundraising!",
      specs: ["Thermal knit", "Embroidered logo", "Affordable"],
      fundraiser: true,
      markup: "40% of proceeds support junior programs",
    },
    {
      id: 102,
      name: "Canvas Tote with Logo",
      price: 22,
      category: "Accessories",
      color: "Natural Canvas",
      description: "Durable canvas tote with screen-printed Tennis 919 branding.",
      specs: ["100% cotton canvas", "Screen-printed", "Spacious"],
      fundraiser: true,
      markup: "35% of proceeds support community clinics",
    },
    {
      id: 103,
      name: "Performance Headband",
      price: 12,
      category: "Accessories",
      color: "Teal",
      description: "Lightweight moisture-wicking headband. Great for bulk fundraising orders.",
      specs: ["Moisture-wicking", "Minimal cost", "Bulk discounts"],
      fundraiser: true,
      markup: "50% margin available for fundraising",
    },
  ];

  const manufacturers = [
    {
      name: "Amazon Merch on Demand",
      description: "Print-on-demand platform integrated with Amazon. No setup costs, automatic fulfillment.",
      url: "https://merch.amazon.com",
      features: ["Zero upfront cost", "Automatic fulfillment", "Access to Amazon market", "T-shirts, hoodies, accessories"],
      icon: "🛍️",
    },
    {
      name: "Printful",
      description: "Premium print-on-demand with real-time inventory. White-label products with your branding.",
      url: "https://www.printful.com",
      features: ["High quality prints", "Mockup generator", "Wide product range", "Integrates with Shopify"],
      icon: "🎨",
    },
    {
      name: "Bonfire",
      description: "Campaign-based fundraising platform. Perfect for club fundraisers and group sales.",
      url: "https://www.bonfire.com",
      features: ["Easy fundraising campaigns", "No inventory needed", "Built-in social sharing", "Direct deposit payouts"],
      icon: "🔥",
    },
    {
      name: "CustomInk",
      description: "Bulk custom apparel orders with designer tools. Great for team uniforms and merchandise.",
      url: "https://www.customink.com",
      features: ["Team uniforms", "Bulk pricing", "Professional design help", "Fast shipping"],
      icon: "🧵",
    },
    {
      name: "Teespring (Spring)",
      description: "Creator platform with global fulfillment. Launch collections, connect with audiences.",
      url: "https://www.spring.com",
      features: ["Creator-friendly", "Global shipping", "Analytics dashboard", "Built-in marketing"],
      icon: "🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Winter Hero Section */}
        <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden flex items-center justify-center" data-testid="section-winter-hero">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-blue-900 to-slate-800" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white">
                <Badge className="bg-teal-400/80 text-slate-900 mb-6 text-sm font-semibold" data-testid="badge-season">
                  Winter 2025 Collection
                </Badge>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                  Winter Tennis Performance
                </h1>
                <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed">
                  Stay warm, comfortable, and competitive. Our collection combines retro aesthetics with modern performance technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-400" />
                    <span className="text-sm text-blue-100">Premium fabrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-400" />
                    <span className="text-sm text-blue-100">Tournament-ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-400" />
                    <span className="text-sm text-blue-100">Inclusive sizing</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
                <div className="space-y-4">
                  {[
                    { icon: "🧊", title: "Cold Weather Tech", description: "Moisture-wicking & insulated" },
                    { icon: "✨", title: "Modern Design", description: "Retro vibes with contemporary style" },
                    { icon: "🎾", title: "Performance Tested", description: "Designed for serious players" },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                      <div>
                        <h3 className="font-semibold text-white">{feature.title}</h3>
                        <p className="text-blue-100 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Products Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">Premium Collection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Professional-grade apparel designed for serious players. Build your complete winter tennis wardrobe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {premiumProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover-elevate border-card-border flex flex-col" data-testid={`card-product-${product.id}`}>
                  <CardContent className="p-0 relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-teal-500 text-white font-semibold">{product.category}</Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                      <p className="font-heading font-bold text-lg text-foreground">${product.price}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4 p-5 flex-1 justify-between">
                    <div className="w-full">
                      <h3 className="font-heading font-bold text-base text-foreground mb-2">{product.name}</h3>
                      <p className="text-xs text-muted-foreground font-medium mb-3">{product.color}</p>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                      <div className="space-y-1">
                        {product.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-teal-500" />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" size="sm" data-testid="button-add-to-cart">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fundraising Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50 border-t-4 border-emerald-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-start gap-3">
              <Heart className="h-8 w-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-heading font-bold text-4xl text-emerald-900 mb-2">Community Fundraising Products</h2>
                <p className="text-lg text-emerald-800 max-w-2xl">
                  Support Tennis 919's junior programs and community clinics. Low-cost, high-impact fundraising items.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundraisingProducts.map((product) => (
                <Card key={product.id} className="border-emerald-200 hover-elevate flex flex-col" data-testid={`card-fundraiser-${product.id}`}>
                  <CardHeader className="bg-emerald-50 border-b border-emerald-100">
                    <Badge className="w-fit bg-emerald-600 text-white">Fundraiser</Badge>
                    <CardTitle className="font-heading text-lg text-emerald-900 mt-3">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 flex-1">
                    <div className="mb-4">
                      <p className="font-heading font-bold text-2xl text-emerald-700">${product.price}</p>
                      <p className="text-sm text-emerald-600 font-semibold mt-2">{product.markup}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="space-y-2">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" size="sm" data-testid="button-fundraiser">
                      Order for Fundraiser
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg border-2 border-emerald-200">
              <h3 className="font-heading font-bold text-lg text-emerald-900 mb-3">Why Fundraising Works</h3>
              <ul className="grid md:grid-cols-3 gap-6">
                {[
                  "50-60% profit margins on low-cost items like beanies and headbands",
                  "Easy bulk ordering through print-on-demand platforms with no upfront cost",
                  "Perfect for club members, parents, and community to support junior programs",
                ].map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Zap className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Manufacturing Partners Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Manufacturing Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              Design and sell custom Tennis 919 apparel with zero upfront costs. These platforms handle everything from design to fulfillment.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manufacturers.map((mfg, idx) => (
                <Card key={idx} className="hover-elevate border-card-border flex flex-col" data-testid={`card-manufacturer-${idx}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-4xl">{mfg.icon}</div>
                      <Badge className="bg-blue-100 text-blue-900" variant="secondary">
                        Partner
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-lg mt-3">{mfg.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-4">{mfg.description}</p>
                    <div className="space-y-2 mb-6">
                      {mfg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(mfg.url, "_blank")}
                      data-testid={`button-visit-${idx}`}
                    >
                      Visit <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-12 text-center">How to Launch Custom Apparel</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Choose a Platform",
                  description:
                    "Select from Amazon Merch, Printful, Bonfire, or CustomInk based on your needs (print-on-demand vs. bulk campaigns).",
                },
                {
                  step: "2",
                  title: "Design Your Products",
                  description:
                    "Use free design tools to create your Tennis 919 branding. All platforms include mockup generators so you can preview before launch.",
                },
                {
                  step: "3",
                  title: "Set Pricing & Launch",
                  description: "Most platforms require zero upfront cost. You only pay when someone orders. Set your markup and start selling.",
                },
                {
                  step: "4",
                  title: "Get Paid",
                  description:
                    "Platform handles fulfillment and shipping. You get paid the profit margin automatically. Ideal for fundraising and community builds.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="border-card-border hover-elevate">
                  <CardContent className="p-6 flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Design Custom Apparel?</h2>
            <p className="text-lg mb-8 text-teal-50">
              Start with a platform above and launch your first design today. No inventory, no risk, no upfront cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("https://merch.amazon.com", "_blank")}
                className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-8"
                data-testid="button-amazon-start"
              >
                Start with Amazon Merch →
              </Button>
              <Button
                onClick={() => window.open("https://www.bonfire.com", "_blank")}
                variant="outline"
                className="border-white text-white hover:bg-white/20 font-semibold px-8"
                data-testid="button-bonfire-start"
              >
                Bonfire Fundraiser →
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
