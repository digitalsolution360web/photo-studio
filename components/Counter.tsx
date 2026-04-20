"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({ from = 0, to, duration = 2, suffix = "", className = "" }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (node && isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = `${Math.floor(value)}${suffix}`;
        },
      });

      return () => controls.stop();
    }
  }, [from, to, duration, suffix, isInView]);

  return <span ref={nodeRef} className={className}>{from}{suffix}</span>;
}
