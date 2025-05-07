// components/icons/MyIcon.tsx
import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  color?: string;
}

export const IconSparkle = React.forwardRef<SVGSVGElement, IconProps>(({ size = 24, ...props }, ref) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 183 183"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    width={size}
    height={size}
    {...props}
  >
    <path
      d="M91.5 0L96.6838 31.4709C101.32 59.6186 123.381 81.6799 151.529 86.3162L183 91.5L151.529 96.6838C123.381 101.32 101.32 123.381 96.6838 151.529L91.5 183L86.3162 151.529C81.6799 123.381 59.6185 101.32 31.4709 96.6838L0 91.5L31.4709 86.3162C59.6186 81.6799 81.6799 59.6185 86.3162 31.4709L91.5 0Z"
      fill="white"
    />
  </svg>
));

IconSparkle.displayName = "IconSparkle";
