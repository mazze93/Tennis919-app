import { Link } from "wouter";
import { MapPin, Clock, Mail, Phone, Heart } from "lucide-react";
import logoImg from "@assets/logo.jpg";

export default function Footer() {
  const quickLinks = [
    { label: "Private Lessons", href: "/lessons#private" },
    { label: "Duos Coaching", href: "/lessons#duos" },
    { label: "Group Clinics", href: "/lessons#clinics" },
    { label: "Shop Apparel", href: "/shop" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 md:py-16" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Tennis 919 Logo" className="h-12 w-12 rounded-full" />
              <span className="font-heading font-bold text-xl">TENNIS 919</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Durham's premiere inclusive tennis organization. Making tennis accessible and enjoyable for everyone.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/90">
              <Heart className="h-4 w-4 text-secondary fill-secondary" />
              <span>LGBTQ+ Owned & Operated</span>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-background/80 hover:text-background text-sm transition-colors hover-elevate px-1 py-0.5 rounded-sm inline-block" data-testid={`link-footer-${index}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Location</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-background/80" />
                <div>
                  <p className="text-background/90 font-medium">Rock Quarry Park</p>
                  <p className="text-background/70">701 Stadium Drive</p>
                  <p className="text-background/70">Durham, NC</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-background/80" />
                <div>
                  <p className="text-background/90">7 Days a Week</p>
                  <p className="text-background/70">Flexible scheduling available</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-background/80" />
                <a href="mailto:coach.tennis919@gmail.com" className="text-background/80 hover:text-background transition-colors" data-testid="link-email">
                  coach.tennis919@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-background/80" />
                <a href="tel:+19196676994" className="text-background/80 hover:text-background transition-colors" data-testid="link-phone">
                  919-667-6994
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} Tennis 919. All rights reserved.
            </p>
            <p className="text-background/70 text-sm">
              Founded by Matthew Frazer | Tennis Is For Everyone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
