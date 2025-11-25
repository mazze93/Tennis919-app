import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { SERVICES_DATA } from "@/lib/constants";

export default function ServicesGrid() {

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the coaching style that fits your goals and schedule. All levels welcome!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="flex flex-col hover-elevate active-elevate-2 transition-all duration-300 border-card-border relative"
                data-testid={`card-service-${index}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground" data-testid="badge-popular">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="gap-2 pb-4">
                  <div className="bg-primary rounded-md w-12 h-12 flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-4">
                    <div className="font-heading font-bold text-3xl text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">{service.duration}</div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <div className="bg-primary/20 rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <LinkButton
                    href={service.calendlyLink}
                    className="w-full bg-accent hover:bg-accent text-accent-foreground"
                    data-testid={`button-book-${index}`}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </LinkButton>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
