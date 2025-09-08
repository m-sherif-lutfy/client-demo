import WhatsAppCTA from "@/components/whatsapp-cta";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact",
  description: "Message us on WhatsApp or send a quick note via the form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="text-gray-600">
          Prefer WhatsApp? Reach us instantly or leave a message via the form.
        </p>
      </div>

      <WhatsAppCTA
        phone="+201221601033"
        label="Message us on WhatsApp"
        message="Hello! I have a quick question about your service."
      />

      <ContactForm />
    </section>
  );
}
