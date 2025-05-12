// components/Timeline.tsx
"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pt-10 pb-10">
        {children}

        {/* Vertical Timeline Line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-accent to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

Timeline.Item = ({ children }: { children: React.ReactNode }) => {
  let heading: React.ReactNode;
  let content: React.ReactNode;

  // Extract heading and content from children
  React.Children.forEach(children, (child: any) => {
    if (child?.type === Timeline.Heading) heading = child;
    if (child?.type === Timeline.Content) content = child;
  });

  return (
    <div className="flex justify-start py-8 md:gap-12">
      {/* Sticky header */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* Dot */}
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-border border border-muted-hover p-2" />
        </div>
        <div className="hidden md:block md:pl-20 ">{heading}</div>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <div className="md:hidden block">{heading}</div>
        {content}
      </div>
    </div>
  );
};

Timeline.Heading = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn(className)}>{children}</div>;
};

Timeline.Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4">{children}</div>;
};
