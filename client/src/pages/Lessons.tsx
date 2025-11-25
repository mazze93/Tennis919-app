import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { LESSONS_DATA, EXTERNAL_LINKS } from "@/lib/constants";

export default function Lessons() {

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Our Lessons & Clinics
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the coaching style that fits your goals, schedule, and budget. All skill levels welcome!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {LESSONS_DATA.map((lesson) => {
                const Icon = lesson.icon;
                return (
                  <Card
                    key={lesson.id}
                    id={lesson.id}
                    className="flex flex-col hover-elevate active-elevate-2 transition-all duration-300 border-card-border overflow-hidden relative"
                    data-testid={`card-lesson-${lesson.id}`}
                  >
                    {lesson.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground z-10">
                        Most Popular
                      </Badge>
                    )}
                    <div className={`${lesson.color} h-1 w-full`} />
                    <CardHeader className="gap-3 pb-4">
                      <div className={`${lesson.color} rounded-lg w-12 h-12 flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="font-heading text-2xl">{lesson.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">{lesson.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="font-heading font-bold text-3xl text-primary">{lesson.price}</div>
                        <div className="text-sm text-muted-foreground">{lesson.duration}</div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground mb-3">What's Included:</p>
                        {lesson.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className={`${lesson.color} rounded-full w-2 h-2 mt-1.5 flex-shrink-0`} />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <LinkButton
                        href={lesson.calendlyLink}
                        className="w-full text-white"
                        style={{
                          backgroundColor: lesson.color === "bg-primary" ? "hsl(152 32% 28%)" : lesson.color === "bg-secondary" ? "hsl(27 87% 67%)" : "hsl(9 75% 61%)",
                        }}
                        data-testid={`button-book-${lesson.id}`}
                      >
                        Schedule Now →
                      </LinkButton>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-foreground rounded-lg p-8 md:p-12 text-background text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Can't Find the Right Fit?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-background/95">
                Contact us directly to discuss custom coaching packages, group rates, or special requests.
              </p>
              <LinkButton
                href={EXTERNAL_LINKS.calendly.main}
                variant="outline"
                className="border-background/50 text-background hover:bg-background/20"
              >
                Contact Us
              </LinkButton>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
