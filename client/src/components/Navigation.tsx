import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import logoImg from "@assets/logo.jpg";
import { NAV_LINKS, EXTERNAL_LINKS } from "@/lib/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path || (path !== "/" && location.startsWith(path));

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md p-2 -ml-2" data-testid="link-home">
              <img src={logoImg} alt="Tennis 919 Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
              <span className="font-heading font-bold text-base md:text-lg text-foreground">TENNIS 919</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md ${
                    isActive(link.href) ? "text-accent font-semibold" : "text-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/shop">
              <a>
                <Button variant="ghost" size="icon" data-testid="button-cart">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </a>
            </Link>
            <Link href="/playbook">
              <a>
                <Button variant="ghost" size="icon" data-testid="button-account">
                  <User className="h-5 w-5" />
                </Button>
              </a>
            </Link>
            <LinkButton
              href={EXTERNAL_LINKS.calendly.main}
              variant="default"
              className="bg-accent hover:bg-accent text-accent-foreground"
              data-testid="button-book-lesson"
            >
              Book Now
            </LinkButton>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2" data-testid="menu-mobile">
            <div className="flex flex-col gap-2 pt-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium rounded-md hover-elevate active-elevate-2 ${
                      isActive(link.href) ? "bg-muted text-accent font-semibold" : "text-foreground"
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="flex items-center gap-2 px-4 pt-3 border-t border-border">
                <Link href="/shop">
                  <a className="flex-1">
                    <Button variant="ghost" size="sm" className="w-full" data-testid="button-mobile-cart">
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </a>
                </Link>
                <Link href="/playbook">
                  <a className="flex-1">
                    <Button variant="ghost" size="sm" className="w-full" data-testid="button-mobile-account">
                      <User className="h-5 w-5" />
                    </Button>
                  </a>
                </Link>
              </div>
              <LinkButton
                href={EXTERNAL_LINKS.calendly.main}
                variant="default"
                className="mx-4 mt-3 bg-accent hover:bg-accent text-accent-foreground w-[calc(100%-2rem)]"
                data-testid="button-mobile-book"
              >
                Book a Lesson
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
