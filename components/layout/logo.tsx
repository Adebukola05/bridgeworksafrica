import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /** "light" = navy text, for the white/light navbar. "dark" = gold text, for the navy footer. */
  tone?: "light" | "dark";
  className?: string;
  onClick?: () => void;
}

export function Logo({ tone = "light", className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="BridgeWorks Africa, home"
      className={cn("flex items-center gap-2.5", className)}
    >
      <Image
        src="/brand/logo-icon.png"
        alt=""
        width={36}
        height={36}
        priority
        className="h-8 w-8 shrink-0 object-contain"
      />
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight",
          tone === "light" ? "text-navy" : "text-background"
        )}
      >
        BridgeWorks{" "}
        <span className={tone === "light" ? "text-gold-dark" : "text-gold"}>Africa</span>
      </span>
    </Link>
  );
}
