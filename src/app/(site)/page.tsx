import { Card, CardContent } from "@/components/ui/card";
import WhatsAppCTA from "@/components/whatsapp-cta";

export default function HomePage() {
  return (
    <section className="grid gap-10">
      {/* Hero */}
      <div className="grid gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Blue Fields — Informative Site Demo
        </h1>
        <p className="text-gray-600 max-w-2xl">
          A crisp 5-page structure showcasing your brand story, offerings, and contact.
          Built with Next.js + Tailwind and ready to deploy.
        </p>

        {/* ✅ Set the real business number here (digits only) */}
        <div>
          <WhatsAppCTA
            phone="+201221601033"
            message="Hello! I’d like to know more about your service."
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { t: "Reliable", d: "Clean code and fast performance." },
          { t: "Responsive", d: "Looks great on mobile and desktop." },
          { t: "Ready", d: "Deployable in minutes on Vercel." },
        ].map((item) => (
          <Card key={item.t}>
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-medium">{item.t}</h3>
              <p className="text-sm text-gray-600">{item.d}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
