"use client";

import { Button, ButtonProps } from "@/components/ui/button"; // Adjust import as needed
import { IconCheck, IconCopy } from "@tabler/icons-react";
import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";

interface CopyButtonProps extends ButtonProps {
  value: string; // Text to copy
  labelDefault?: string;
  labelCopied?: string;
  className?: string;
  withConfetti?: boolean;
}

export function CopyButton({
  value,
  labelCopied,
  labelDefault,
  withConfetti,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  // const [shouldBurst, setShouldBurst] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (copied && withConfetti && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      confetti({
        particleCount: 30, // fewer particles
        spread: 60, // narrow spread
        scalar: 0.6, // smaller size
        startVelocity: 16,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: rect.top / window.innerHeight, // above the button
        },
      });
    }
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <Button
      ref={buttonRef}
      onClick={handleCopy}
      {...props} // Spread additional props
    >
      {copied ? (
        <>
          <IconCheck className="w-4 h-4 text-primary" />
          {labelCopied}
        </>
      ) : (
        <>
          <IconCopy className="w-4 h-4" />
          {labelDefault}
        </>
      )}
    </Button>
  );
}
