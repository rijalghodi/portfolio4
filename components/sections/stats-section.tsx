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
    <section className="z-0 pt-16 pb-16" id="stats">
      <div className="max-w-screen-lg w-full mx-auto">
        <h2 className="sr-only">Stats</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <li key={i}>
              <StatsCard {...stat} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <p className="flex justify-center items-center gap-2 max-w-[300px]">
      <span className="text-6xl font-semibold">{value}</span>
      <span className="text-lg font-medium">{title}</span>
    </p>
  );
}
