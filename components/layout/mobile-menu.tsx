"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScheduleBriefingButton } from "@/components/lead-gen/schedule-briefing-button";
import { whatWeDoItems, insightsItems, primaryLinks, type NavItem } from "./nav-data";

interface MobileMenuProps {
  onNavigate: () => void;
}

function MobileAccordion({
  label,
  items,
  viewAllHref,
  onNavigate,
}: {
  label: string;
  items: NavItem[];
  viewAllHref: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `mobile-accordion-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="border-b border-navy/10">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-body text-body font-medium text-navy"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-1 pb-4">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block py-2 text-small text-ink/80 hover:text-navy"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={viewAllHref}
                  onClick={onNavigate}
                  className="block py-2 text-small font-medium text-gold-dark"
                >
                  View all
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  const about = primaryLinks.find((link) => link.label === "About")!;
  const contact = primaryLinks.find((link) => link.label === "Contact")!;

  return (
    <motion.nav
      className="flex flex-col border-t border-navy/10 bg-surface px-6 lg:hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      aria-label="Primary mobile"
    >
      <Link
        href={about.href}
        onClick={onNavigate}
        className="border-b border-navy/10 py-4 font-body text-body font-medium text-navy"
      >
        {about.label}
      </Link>

      <MobileAccordion
        label="What We Do"
        items={whatWeDoItems}
        viewAllHref="/what-we-do"
        onNavigate={onNavigate}
      />
      <MobileAccordion
        label="Insights"
        items={insightsItems}
        viewAllHref="/insights"
        onNavigate={onNavigate}
      />

      <Link
        href={contact.href}
        onClick={onNavigate}
        className="border-b border-navy/10 py-4 font-body text-body font-medium text-navy"
      >
        {contact.label}
      </Link>

      <div className="py-6">
        <ScheduleBriefingButton size="lg" className="w-full" onClick={onNavigate} />
      </div>
    </motion.nav>
  );
}
