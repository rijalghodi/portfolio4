import React from 'react';

type AccessibleDivProps = React.HTMLAttributes<HTMLDivElement> & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
};

const AccessibleDiv: React.FC<AccessibleDivProps> = ({
  tag = 'div',
  children,
  ...props
}) => {
  const Component = tag; // Dynamically select the tag
  return <Component {...props}>{children}</Component>;
};

export default AccessibleDiv;
