"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { NavItem } from "./nav-data";

interface MegaMenuProps {
  id: string;
  items: NavItem[];
  viewAllHref: string;
  viewAllLabel: string;
  onNavigate: () => void;
}

export function MegaMenu({ id, items, viewAllHref, viewAllLabel, onNavigate }: MegaMenuProps) {
  return (
    <AnimatePresence>
      <motion.div
        id={id}
        role="menu"
        className="absolute left-0 top-full w-full border-b border-navy/10 bg-surface shadow-elevated"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18, ease: [0, 0, 0.2, 1] }}
      >
        <div className="mx-auto grid max-w-content grid-cols-1 gap-2 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={href}
              href={href}
              role="menuitem"
              onClick={onNavigate}
              className="group flex flex-col rounded-md p-4 transition-colors hover:bg-background"
            >
              <Icon className="h-5 w-5 text-navy" strokeWidth={1.75} />
              <span className="mt-3 font-display text-h4 font-semibold text-navy">
                {title}
              </span>
              <span className="mt-1 text-small text-ink/70">{description}</span>
            </Link>
          ))}
        </div>
        <div className="border-t border-navy/10 bg-background px-6 py-4">
          <div className="mx-auto max-w-content">
            <Link
              href={viewAllHref}
              onClick={onNavigate}
              className="inline-flex items-center gap-1 text-small font-medium text-navy"
            >
              {viewAllLabel}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
