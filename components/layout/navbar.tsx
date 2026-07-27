"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { ScheduleBriefingButton } from "@/components/lead-gen/schedule-briefing-button";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "./logo";
import { whatWeDoItems, insightsItems, primaryLinks } from "./nav-data";

type MenuKey = "what-we-do" | "insights" | null;

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  // Close on Escape, and on click outside the nav
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the mega menu on route change intent (any in-panel link click)
  const about = primaryLinks.find((link) => link.label === "About")!;
  const contact = primaryLinks.find((link) => link.label === "Contact")!;

  const triggerClass = (key: MenuKey) =>
    `flex items-center gap-1 font-body text-[15px] transition-colors ${
      openMenu === key ? "text-navy" : "text-ink/80 hover:text-navy"
    }`;

  return (
    <header
      ref={navRef as RefObject<HTMLElement>}
      className="sticky top-0 z-50 border-b border-navy/10 bg-surface/95 backdrop-blur"
    >
      <div className="mx-auto flex h-header max-w-content items-center justify-between px-6">
        <Logo tone="light" onClick={closeAll} />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          <Link href={about.href} className="font-body text-[15px] text-ink/80 hover:text-navy">
            {about.label}
          </Link>

          <button
            className={triggerClass("what-we-do")}
            aria-haspopup="true"
            aria-expanded={openMenu === "what-we-do"}
            aria-controls="mega-menu-what-we-do"
            onClick={() => setOpenMenu((v) => (v === "what-we-do" ? null : "what-we-do"))}
            onMouseEnter={() => setOpenMenu("what-we-do")}
          >
            What We Do
            <ChevronDown
              className={`h-4 w-4 transition-transform ${openMenu === "what-we-do" ? "rotate-180" : ""}`}
              strokeWidth={2}
            />
          </button>

          <button
            className={triggerClass("insights")}
            aria-haspopup="true"
            aria-expanded={openMenu === "insights"}
            aria-controls="mega-menu-insights"
            onClick={() => setOpenMenu((v) => (v === "insights" ? null : "insights"))}
            onMouseEnter={() => setOpenMenu("insights")}
          >
            Insights
            <ChevronDown
              className={`h-4 w-4 transition-transform ${openMenu === "insights" ? "rotate-180" : ""}`}
              strokeWidth={2}
            />
          </button>

          <Link href={contact.href} className="font-body text-[15px] text-ink/80 hover:text-navy">
            {contact.label}
          </Link>
        </nav>

        <div className="hidden lg:block">
          <ScheduleBriefingButton variant="secondary" size="sm">
            Schedule Briefing
          </ScheduleBriefingButton>
        </div>

        <button
          className="text-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop mega menus, one open at a time, hover or click to open */}
      <div onMouseLeave={() => setOpenMenu(null)}>
        <AnimatePresence>
          {openMenu === "what-we-do" && (
            <MegaMenu
              id="mega-menu-what-we-do"
              items={whatWeDoItems}
              viewAllHref="/what-we-do"
              viewAllLabel="View all services"
              onNavigate={closeAll}
            />
          )}
          {openMenu === "insights" && (
            <MegaMenu
              id="mega-menu-insights"
              items={insightsItems}
              viewAllHref="/insights"
              viewAllLabel="Visit the Insights hub"
              onNavigate={closeAll}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Mobile off-canvas menu */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onNavigate={closeAll} />}
      </AnimatePresence>
    </header>
  );
}
