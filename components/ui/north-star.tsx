"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef, RefObject, useCallback } from "react";

interface StarProps {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
  mass: number;
  velocityX: number;
  velocityY: number;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  gravitationalPull?: number;
  maxSpeed?: number;
  dampeningFactor?: number;
  className?: string;
}

export const NorthStarBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 1,
  maxTwinkleSpeed = 2,
  gravitationalPull = 100,
  maxSpeed = 2,
  dampeningFactor = 0.92,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  // Generate initial stars
  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);

      return Array.from({ length: numStars }, () => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,
          originalX: x,
          originalY: y,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          twinkleSpeed: shouldTwinkle ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) : null,
          mass: Math.random() * 0.8 + 0.2, // Random mass between 0.2 and 1.0
          velocityX: 0,
          velocityY: 0,
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed],
  );

  // Handle canvas sizing and initial star generation
  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();
    const resizeObserver = new ResizeObserver(updateStars);

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [generateStars]);

  // Mouse event handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      });
    };

    const handleMouseLeave = () => {
      setMousePosition((prev) => ({ ...prev, active: false }));
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;

    const render = (time: number) => {
      const deltaTime = Math.min(time - lastTime, 50); // Cap delta time
      lastTime = time;
      const deltaSeconds = deltaTime * 0.001;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const updatedStars = stars.map((star) => {
        // Create a copy of the star for updating
        const newStar = { ...star };

        // Update twinkle effect
        if (star.twinkleSpeed !== null) {
          newStar.opacity = 0.5 + Math.abs(Math.sin((time * 0.001) / star.twinkleSpeed) * 0.5);
        }

        // Apply gravitational pull if mouse is active
        if (mousePosition.active) {
          // Calculate distance between star and mouse
          const dx = mousePosition.x - star.x;
          const dy = mousePosition.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0) {
            // Inverse square law for gravity - stronger pull when closer
            const force = gravitationalPull / (distance * distance);
            // Normalize direction and apply force based on distance
            const accelerationX = (dx / distance) * force * (1 - star.mass);
            const accelerationY = (dy / distance) * force * (1 - star.mass);

            // Apply acceleration to velocity
            newStar.velocityX += accelerationX * deltaSeconds;
            newStar.velocityY += accelerationY * deltaSeconds;
          }
        } else {
          // If mouse is not active, gradually return to original position
          const dx = star.originalX - star.x;
          const dy = star.originalY - star.y;
          newStar.velocityX += dx * 0.5 * deltaSeconds;
          newStar.velocityY += dy * 0.5 * deltaSeconds;
        }

        // Apply dampening
        newStar.velocityX *= dampeningFactor;
        newStar.velocityY *= dampeningFactor;

        // Limit max speed
        const speed = Math.sqrt(newStar.velocityX * newStar.velocityX + newStar.velocityY * newStar.velocityY);
        if (speed > maxSpeed) {
          newStar.velocityX = (newStar.velocityX / speed) * maxSpeed;
          newStar.velocityY = (newStar.velocityY / speed) * maxSpeed;
        }

        // Update position
        newStar.x += newStar.velocityX;
        newStar.y += newStar.velocityY;

        // Draw the star
        ctx.beginPath();
        ctx.arc(newStar.x, newStar.y, newStar.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${newStar.opacity})`;
        ctx.fill();

        return newStar;
      });

      // Update stars state if needed
      if (JSON.stringify(stars) !== JSON.stringify(updatedStars)) {
        setStars(updatedStars);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars, mousePosition, gravitationalPull, maxSpeed, dampeningFactor]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};
