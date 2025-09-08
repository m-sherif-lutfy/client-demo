export const metadata = {
  title: "About",
  description: "Who we are and how we ship reliable, fast, and accessible sites.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="grid gap-10">
      {/* Hero */}
      <div className="grid gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About Blue Fields</h1>
        <p className="text-gray-600 max-w-2xl">
          We help brands present their story clearly through thoughtful design and reliable delivery.
          Our focus is simple: make your offering easy to understand and effortless to choose.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { t: "Clarity", d: "Straightforward structure and copy that reduce decision friction." },
          { t: "Speed", d: "From brief to launch in days, not weeks." },
          { t: "Consistency", d: "Reusable components and patterns for future growth." },
        ].map((x) => (
          <div key={x.t} className="rounded-2xl border p-6">
            <h3 className="mb-2 text-lg font-medium">{x.t}</h3>
            <p className="text-gray-600 text-sm">{x.d}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid gap-6 rounded-2xl border p-6 sm:grid-cols-3">
        {[
          { n: "48h", l: "Typical demo turnaround" },
          { n: "90+", l: "Lighthouse scores target" },
          { n: "5", l: "Core pages out of the box" },
        ].map((s) => (
          <div key={s.l} className="text-center sm:text-left">
            <div className="text-3xl font-semibold">{s.n}</div>
            <div className="text-gray-600">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="grid gap-3">
        <h2 className="text-xl font-semibold">Our values</h2>
        <ul className="grid gap-2 text-gray-700">
          <li>• Accessibility-first, mobile-perfect.</li>
          <li>• Honest timelines and transparent communication.</li>
          <li>• Design that serves content, not the other way around.</li>
        </ul>
      </div>
    </section>
  );
}
