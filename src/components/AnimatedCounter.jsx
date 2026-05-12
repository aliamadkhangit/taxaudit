import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({
  end = 100,
  suffix = "",
  duration = 1.3,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, end, isInView]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </motion.span>
  );
}
