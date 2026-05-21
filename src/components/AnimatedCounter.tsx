import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ value, suffix = "", animate = false }: { value: number; suffix?: string; animate?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(value / 60));
    const interval = Math.floor(duration / (value / step));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [animate, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default AnimatedCounter;
