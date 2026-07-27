import {
  Search,
  Users,
  Compass,
  Handshake,
  Newspaper,
  BarChart3,
  BookOpen,
  Folder,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription?: string;
  href: string;
}

export const whatWeDoItems: NavItem[] = [
  {
    icon: Search,
    title: "Research & Intelligence",
    description: "Continuous mapping and analysis of informal businesses.",
    longDescription:
      "We map informal businesses sector by sector and market by market, then maintain that intelligence over time rather than treating it as a one-off study. The output is a working picture of who is operating, where, and how, built to support decisions, not just describe a market.",
    href: "/what-we-do/research-and-intelligence",
  },
  {
    icon: Users,
    title: "Strategic Connections",
    description: "Structured introductions to the right institutions.",
    longDescription:
      "We introduce informal businesses to the governments, corporations, financial institutions and development partners positioned to work with them, matched deliberately, not distributed broadly. Every connection is grounded in the research that precedes it.",
    href: "/what-we-do/strategic-connections",
  },
  {
    icon: Compass,
    title: "Advisory Services",
    description: "Guidance for institutions designing programmes or policy.",
    longDescription:
      "We advise institutions designing programmes, financial products or policy intended to reach informal businesses, helping translate evidence about how the informal economy actually operates into decisions that hold up in the field.",
    href: "/what-we-do/advisory-services",
  },
  {
    icon: Handshake,
    title: "Partnership Support",
    description: "Coordination and reporting once partnerships are underway.",
    longDescription:
      "Once a partnership is underway, we provide the coordination, monitoring and reporting infrastructure that keeps it accountable, so institutions can see what a programme is actually achieving, not only what it set out to do.",
    href: "/what-we-do/partnership-support",
  },
];

export const insightsItems: NavItem[] = [
  {
    icon: Newspaper,
    title: "Articles",
    description: "Shorter analysis on policy and partnership models.",
    longDescription:
      "Shorter, ongoing analysis on policy questions, partnership models and how the informal economy is evolving, written for readers who need to stay current, not commission a full report.",
    href: "/insights/articles",
  },
  {
    icon: BarChart3,
    title: "Research Reports",
    description: "Flagship publications and sector deep dives.",
    longDescription:
      "In-depth, data-led reports on specific sectors, markets or questions within the informal economy, published periodically and intended to inform decisions rather than simply describe a market.",
    href: "/insights/research-reports",
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description: "Documented partnerships and their outcomes.",
    longDescription:
      "Documented accounts of completed partnerships and programmes, what was done, what changed, and what other institutions can take from it.",
    href: "/insights/case-studies",
  },
  {
    icon: Folder,
    title: "Resources",
    description: "Frameworks, templates and reference materials.",
    longDescription:
      "Frameworks, templates and reference materials that institutions can use directly in their own work with informal businesses.",
    href: "/insights/resources",
  },
];

export const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
