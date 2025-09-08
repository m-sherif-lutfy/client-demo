export default function HistoryPage() {
  const milestones = [
    { year: "2019", title: "Founding", body: "Started with small brochure sites for local businesses." },
    { year: "2021", title: "Component Library", body: "Standardized UI patterns for faster, consistent delivery." },
    { year: "2023", title: "Performance First", body: "Adopted strict Lighthouse targets across all projects." },
    { year: "2025", title: "Demo to Production", body: "Refined a flow to turn demos into live sites in days." },
  ];

  return (
    <section className="grid gap-10">
      <div className="grid gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Our History</h1>
        <p className="text-gray-600 max-w-2xl">
          A brief timeline of how we shaped our process to deliver reliable, fast, and accessible websites.
        </p>
      </div>

      <ol className="relative border-l pl-6">
        {milestones.map((m, i) => (
          <li key={i} className="mb-8 ml-2">
            <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border bg-white" />
            <div className="text-sm text-gray-500">{m.year}</div>
            <h3 className="text-lg font-medium">{m.title}</h3>
            <p className="text-gray-600">{m.body}</p>
          </li>
        ))}
      </ol>

      <div className="rounded-2xl border p-6 text-gray-700">
        Today, our approach is simple: ship a clear, credible demo quickly, then iterate with real content.
      </div>
    </section>
  );
}
