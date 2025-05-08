"use client";

const stats = [
  {
    title: "Years of experience in front-end",
    value: "2+",
  },
  {
    title: "Successful projects delivered",
    value: "10+",
  },
  {
    title: "Client satisfaction rate",
    value: "99%",
  },
];

export function StatsSection() {
  return (
    <div className="max-w-screen-lg w-full mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <li key={i}>
            <StatsCard {...stat} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <p className="flex justify-center items-center gap-2 max-w-[250px]">
      <span className="text-5xl font-semibold">{value}</span>
      <span className="text-base">{title}</span>
    </p>
  );
}
