"use client";

import * as React from "react";
import {
  HTMLMotionProps,
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "motion/react";

type MagneticProps = {
  children: React.ReactElement;
  strength?: number;
  range?: number;
  springOptions?: SpringOptions;
  onlyOnHover?: boolean;
  disableOnTouch?: boolean;
} & HTMLMotionProps<"div">;

const Magnetic = React.forwardRef<HTMLDivElement, MagneticProps>(
  (
    {
      children,
      strength = 0.5,
      range = 120,
      springOptions = { stiffness: 100, damping: 10, mass: 0.5 },
      onlyOnHover = false,
      disableOnTouch = true,
      style,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    const isTouchDevice = React.useMemo(() => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(pointer:coarse)").matches;
    }, []);

    const [active, setActive] = React.useState(!onlyOnHover);

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, springOptions);
    const y = useSpring(rawY, springOptions);

    const compute = React.useCallback(
      (e: MouseEvent | React.MouseEvent) => {
        if (!localRef.current) return;
        const { left, top, width, height } =
          localRef.current.getBoundingClientRect();
        const cx = left + width / 2;
        const cy = top + height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);

        if ((active || !onlyOnHover) && dist <= range) {
          const factor = (1 - dist / range) * strength;
          rawX.set(dx * factor);
          rawY.set(dy * factor);
        } else {
          rawX.set(0);
          rawY.set(0);
        }
      },
      [active, onlyOnHover, range, strength, rawX, rawY],
    );

    React.useEffect(() => {
      if (disableOnTouch && isTouchDevice) return;
      const handle = (e: MouseEvent) => compute(e);
      window.addEventListener("mousemove", handle);
      return () => window.removeEventListener("mousemove", handle);
    }, [compute, disableOnTouch, isTouchDevice]);

    return (
      <motion.div
        ref={localRef}
        style={{ display: "inline-block", ...style, x, y }}
        onMouseEnter={(e) => {
          if (onlyOnHover) setActive(true);
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (onlyOnHover) setActive(false);
          rawX.set(0);
          rawY.set(0);
          onMouseLeave?.(e);
        }}
        onMouseMove={(e) => {
          if (onlyOnHover) compute(e);
          onMouseMove?.(e);
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export { Magnetic, type MagneticProps };
