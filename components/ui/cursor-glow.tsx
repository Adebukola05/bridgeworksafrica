"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * A large, soft, multi-hue blurred blob that trails the cursor with a
 * smooth lag (lerp toward the pointer every frame, not an instant snap).
 * Pure CSS-variable/transform updates on a persistent rAF loop, no React
 * state, so it never triggers a re-render.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    // Skip on touch-only devices: a cursor glow has no meaning there.
    if (typeof window === "undefined" || !window.matchMedia("(hover: hover)").matches) return;

    const el = ref.current;
    if (!el) return;

    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let current = { ...target };
    let raf = 0;
    let visible = false;

    function handleMove(e: MouseEvent) {
      target = { x: e.clientX, y: e.clientY };
      if (!visible) {
        current = { ...target };
        el!.style.opacity = "1";
        visible = true;
      }
    }
    function handleLeave() {
      el!.style.opacity = "0";
      visible = false;
    }

    function tick() {
      // Lerp toward the pointer, this is what creates the trailing lag.
      current.x += (target.x - current.x) * 0.07;
      current.y += (target.y - current.y) * 0.07;
      el!.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[720px] w-[720px] opacity-0 mix-blend-screen transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle at 35% 35%, rgba(200,155,60,0.22), transparent 55%), radial-gradient(circle at 65% 45%, rgba(30,69,118,0.28), transparent 55%), radial-gradient(circle at 50% 65%, rgba(46,125,50,0.16), transparent 60%)",
        filter: "blur(90px)",
      }}
    />
  );
}
