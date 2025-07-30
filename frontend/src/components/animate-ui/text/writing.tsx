"use client";

import * as React from "react";
import {
  motion,
  useInView,
  type Transition,
  type UseInViewOptions,
} from "motion/react";

type WritingTextProps = Omit<
  React.ComponentProps<"span">,
  "children" | "ref"
> & {
  transition?: Transition;
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  inViewOnce?: boolean;
  spacing?: number | string;
  text: string;
};

const WritingText = React.forwardRef<HTMLSpanElement, WritingTextProps>(
  function WritingText(
    {
      inView = false,
      inViewMargin = "0px",
      inViewOnce = true,
      spacing = 5,
      text,
      transition = { type: "spring", bounce: 0, duration: 2, delay: 0.5 },
      ...props
    },
    ref,
  ) {
    const localRef = React.useRef<HTMLSpanElement>(null);

    // Combine the forwarded ref with our local ref
    React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

    const inViewResult = useInView(localRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });
    const isInView = !inView || inViewResult;

    const words = React.useMemo(() => text.split(" "), [text]);

    return (
      <span ref={localRef} data-slot="writing-text" {...props}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="will-change-opacity inline-block will-change-transform"
            style={{ marginRight: spacing }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              ...transition,
              delay: index * (transition?.delay ?? 0),
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </span>
    );
  },
);

export { WritingText, type WritingTextProps };
