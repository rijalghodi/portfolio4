import React from 'react';

// Timeline Component
type TimelineProps = {
  children: React.ReactNode;
};
export function Timeline({ children }: TimelineProps) {
  return <ol className="relative border-s border-border">{children}</ol>;
}

// Timeline.Item Component
type TimelineItemProps = {
  children: React.ReactNode;
};
Timeline.Item = function TimelineItem({ children }: TimelineItemProps) {
  return <li className="mb-10 ms-4">{children}</li>;
};

// Timeline.Head Component
type TimelineHeadProps = {
  children: string | React.ReactNode;
};
Timeline.Head = function TimelineHead({ children }: TimelineHeadProps) {
  return (
    <div>
      <div className="absolute w-3 h-3 bg-border rounded-full mt-1.5 -start-1.5 border border-secondary"></div>
      {children}
    </div>
  );
};

// Timeline.Body Component
type TimelineBodyProps = {
  children: React.ReactNode;
};
Timeline.Body = function TimelineBody({ children }: TimelineBodyProps) {
  return <div className="py-2">{children}</div>;
};
