"use client";

const stats = [
  {
    label: "Years of experience in front-end",
    number: "2+",
    className: "justify-start",
  },
  {
    label: "Successful projects delivered",
    number: "10+",
    className: "justify-start xs:justify-center",
  },
  {
    label: "Client satisfaction rate",
    number: "99%",
    className: "justify-start xs:justify-end",
  },
];

export function StatsSection() {
  return (
    <div className="max-w-screen-lg w-full mx-auto">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-y-12">
        {stats.map((stat, i) => (
          <li key={i} className={`flex ${stat.className}`}>
            <StatsCard {...stat} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StatsCard({ label, number }: { label: string; number: string }) {
  return (
    <div className="flex justify-center items-center gap-4 max-w-[250px]">
      <span className="text-5xl font-medium">{number}</span>
      <span className="text-base">{label}</span>
    </div>
  );
}
