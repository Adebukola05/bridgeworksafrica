import Link from "next/link";
import { Logo } from "./logo";
import { whatWeDoItems, insightsItems, primaryLinks } from "./nav-data";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-background">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-3 max-w-xs text-small text-background/70">
              Building better business communities. Research, intelligence
              and strategic connections for Africa&apos;s informal economy.
            </p>
            <p className="mt-6 text-small text-background/70">
              Ibadan, Oyo State, Nigeria
            </p>
          </div>

          <div>
            <p className="text-label uppercase text-gold">What We Do</p>
            <ul className="mt-4 space-y-3">
              {whatWeDoItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-background/80 transition-colors hover:text-background"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label uppercase text-gold">Insights</p>
            <ul className="mt-4 space-y-3">
              {insightsItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-background/80 transition-colors hover:text-background"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label uppercase text-gold">Company</p>
            <ul className="mt-4 space-y-3">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-background/80 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-background/10 pt-8 text-caption text-background/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BridgeWorks Africa. All rights reserved.</p>
          <p>Building Better Business Communities</p>
        </div>
      </div>
    </footer>
  );
}
