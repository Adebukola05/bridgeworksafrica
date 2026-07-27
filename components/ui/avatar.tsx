import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarProps {
  name: string;
  photo?: string;
  size?: number;
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 1 || /[A-Z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Avatar({ name, photo, size = 96, className }: AvatarProps) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt={name}
        width={size}
        height={size}
        className={cn("rounded-full object-cover", className)}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-navy text-gold",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="font-display font-semibold" style={{ fontSize: size * 0.36 }}>
        {getInitials(name)}
      </span>
    </div>
  );
}
