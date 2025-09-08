import WhatsAppCTA from "@/components/whatsapp-cta";
import Image from "next/image";

const PHONE = "+201221601033"; // ← replace with real digits only (no +, spaces)

const products = [
  { id: "p-1", name: "Starter Site",     desc: "5-page informative site, responsive & accessible.", price: "$399",  image: "/products/starter.png",        alt: "Starter Site mockup" },
  { id: "p-2", name: "Polished Demo",    desc: "Refined visuals, micro-animations, on-page SEO.",   price: "$749",  image: "/products/polished.png",       alt: "Polished Demo mockup" },
  { id: "p-3", name: "Showcase",         desc: "Bespoke components, CMS-ready structure.",          price: "$1299", image: "/products/showcase.png",       alt: "Showcase mockup" },
  { id: "p-4", name: "Brand Refresh",    desc: "Typography, color tokens, basic guidelines.",       price: "$299",  image: "/products/brand-refresh.png",   alt: "Brand refresh style tiles" },
  { id: "p-5", name: "Content Pass",     desc: "Copy edit for clarity, tone, and conversions.",     price: "$199",  image: "/products/content-pass.png",    alt: "Content editing highlights" },
  { id: "p-6", name: "Performance Pass", desc: "Perf/a11y audit with fixes to hit 90+.",            price: "$249",  image: "/products/performance-pass.png",alt: "Performance and a11y gauges" },
];

export const metadata = {
  title: "Products",
  description: "Starter, Polished Demo, Showcase, and service add-ons.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <section className="grid gap-10">
      <div className="grid gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Products & Packages</h1>
        <p className="text-gray-600 max-w-2xl">
          Choose a package to match your needs. We can mix & match or start small, then upgrade.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <article key={p.id} className="rounded-2xl border p-6 grid gap-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-gray-50">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                priority={i === 0} // only the first card loads eagerly
              />
            </div>


            <div className="grid gap-1">
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">{p.price}</span>
              <WhatsAppCTA
                phone={PHONE}
                label="Ask on WhatsApp"
                message={`Hello! I'm interested in "${p.name}". Could you share details and timeline?`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
