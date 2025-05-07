// components/icons/MyIcon.tsx
import * as React from "react";
import { orionLines, orionStars } from "./orion";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  color?: string;
}

export const IconOrion = React.forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...props }, ref) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    width={size}
    height={size}
    {...props}
  >
    <defs>
      {/* <!-- Star template --> */}
      <g id="star-template">
        <path d="M0 0L2.59176 15.7355C5.08979 29.8093 20.1906 44.9102 34.2645 47.4082L50 50L34.2645 52.5918C20.1906 55.0898 5.08979 70.1907 2.59176 84.2645L0 100L-2.59176 84.2645C-5.08979 70.1907 -20.1906 55.0898 -34.2645 52.5918L-50 50L-34.2645 47.4082C-20.1906 44.9102 -5.08979 29.8093 -2.59176 15.7355L0 0Z" />
      </g>
    </defs>

    {/* <!-- Constellation lines -->
  <!-- Lines are drawn with a soft gray color and with slight padding from the stars --> */}
    <g stroke="#ffffff" stroke-width="3" opacity="0.2">
      {orionLines.map((line) => (
        <line
          key={`${line.start}-${line.end}`}
          x1={orionStars[line.start as keyof typeof orionStars]?.x * 1000}
          y1={(1 - orionStars[line.start as keyof typeof orionStars]?.y) * 1000}
          x2={orionStars[line.end as keyof typeof orionStars]?.x * 1000}
          y2={(1 - orionStars[line.end as keyof typeof orionStars]?.y) * 1000}
        />
      ))}
    </g>

    {/* <!-- Stars with appropriate sizes, colors and sparkling animations -->
  <!-- left_leg --> */}
    {Object.entries(orionStars).map(([key, star]) => (
      <g transform={`translate(${star.x * 1000}, ${(1 - star.y) * 1000})`} key={key}>
        <use href="#star-template" transform={`scale(${star.size * 2 * 0.2})`} fill="#FFFFFF" opacity="0.9">
          <animate
            attributeName="opacity"
            values="0.9;0.2;0.5;0.9"
            dur={`${Math.random() * 2 + 2}s`}
            repeatCount="indefinite"
          />
        </use>
      </g>
    ))}
  </svg>
));

IconOrion.displayName = "IconOrion";
