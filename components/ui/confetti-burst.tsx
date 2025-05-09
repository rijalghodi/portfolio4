import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";

export default function ConfettiButton() {
  const [shouldBurst, setShouldBurst] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (shouldBurst && buttonRef.current) {
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
      setShouldBurst(false);
    }
  }, [shouldBurst]);

  return (
    <div className="flex justify-center items-center h-screen">
      <button ref={buttonRef} className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setShouldBurst(true)}>
        Celebrate
      </button>
    </div>
  );
}
