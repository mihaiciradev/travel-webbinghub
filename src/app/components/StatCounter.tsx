"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  endNum: number;
  startNum?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function StatCounter({
  endNum,
  startNum = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(startNum);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const origin = performance.now();
          const range = endNum - startNum;

          const tick = (now: number) => {
            const elapsed = now - origin;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(startNum + eased * range));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [endNum, startNum, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
