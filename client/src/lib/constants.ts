import { LucideIcon, User, Users, Heart, Zap } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  calendlyLink: string;
  popular?: boolean;
}

export interface LessonData extends ServiceData {
  id: string;
  color: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Private Lessons", href: "/lessons#privates" },
  { label: "Duos Coaching", href: "/lessons#duos" },
  { label: "Group Clinics", href: "/lessons#beginner" },
  { label: "Shop Apparel", href: "/shop" },
  { label: "About Us", href: "/about" },
];

export const EXTERNAL_LINKS = {
  calendly: {
    main: "https://calendly.com/tennis919",
    privates: "https://calendly.com/tennis919/privates",
    duos: "https://calendly.com/tennis919/duos",
    beginnerClinic: "https://calendly.com/tennis919/beginner-clinic",
    intermediate: "https://calendly.com/tennis919/intermediate",
  },
  contact: {
    email: "coach.tennis919@gmail.com",
    phone: "+19196676994",
    phoneFormatted: "919-667-6994",
  },
  location: {
    name: "Rock Quarry Park",
    address: "701 Stadium Drive",
    city: "Durham, NC",
  },
};

export const SERVICES_DATA: ServiceData[] = [
  {
    icon: User,
    title: "Private Lessons",
    description: "Personalized one-on-one coaching tailored to your needs for focused skill development and rapid improvement.",
    price: "$60-$80",
    duration: "per hour",
    features: ["Singles coaching", "Personalized drills", "Video analysis", "Flexible scheduling"],
    calendlyLink: EXTERNAL_LINKS.calendly.privates,
  },
  {
    icon: Users,
    title: "Duos Coaching",
    description: "Improve your tennis skills together with a partner, friend, family member, or significant other in a supportive environment.",
    price: "$40-$50",
    duration: "per person/hour",
    features: ["Partner training", "Doubles strategies", "Team building", "Shared progress"],
    calendlyLink: EXTERNAL_LINKS.calendly.duos,
    popular: true,
  },
  {
    icon: Users,
    title: "Group Clinics",
    description: "Fun and interactive sessions for players of all levels to improve their skills in a social, community-focused setting.",
    price: "$20",
    duration: "per session",
    features: ["Beginner to Advanced", "Weekly sessions", "Social atmosphere", "Rock Quarry Park"],
    calendlyLink: EXTERNAL_LINKS.calendly.beginnerClinic,
  },
];

export const LESSONS_DATA: LessonData[] = [
  {
    id: "privates",
    icon: User,
    title: "Private Lessons",
    description: "One-on-one personalized coaching tailored to your specific goals and skill level.",
    price: "$60-$80",
    duration: "per hour",
    features: [
      "Customized training plan",
      "Video analysis of your technique",
      "Flexible scheduling (7 days/week)",
      "All skill levels welcome",
      "Focus on your weak areas",
    ],
    calendlyLink: EXTERNAL_LINKS.calendly.privates,
    color: "bg-primary",
  },
  {
    id: "duos",
    icon: Users,
    title: "Duos Coaching",
    description: "Perfect for partners, friends, or family members who want to improve together.",
    price: "$40-$50",
    duration: "per person/hour",
    features: [
      "Train with a partner",
      "Doubles strategy coaching",
      "Team building focus",
      "Shared progress tracking",
      "Social, supportive environment",
    ],
    calendlyLink: EXTERNAL_LINKS.calendly.duos,
    popular: true,
    color: "bg-secondary",
  },
  {
    id: "beginner",
    icon: Heart,
    title: "Beginner Clinic",
    description: "Group sessions perfect for those starting their tennis journey.",
    price: "$20",
    duration: "per session",
    features: [
      "Fundamentals & footwork",
      "Racket grip & stance",
      "Basic forehand/backhand",
      "Fun, welcoming group",
      "Every week at Rock Quarry Park",
    ],
    calendlyLink: EXTERNAL_LINKS.calendly.beginnerClinic,
    color: "bg-accent",
  },
  {
    id: "intermediate",
    icon: Zap,
    title: "Intermediate Clinic",
    description: "Build on your fundamentals with stroke refinement and strategy.",
    price: "$20",
    duration: "per session",
    features: [
      "Stroke refinement",
      "Serve & volley technique",
      "Game strategy & tactics",
      "Competitive drills",
      "Weekly group sessions",
    ],
    calendlyLink: EXTERNAL_LINKS.calendly.intermediate,
    color: "bg-secondary",
  },
];
