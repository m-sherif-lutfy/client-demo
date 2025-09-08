"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import WhatsAppCTA from "@/components/whatsapp-cta";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // DEMO: fake send (simulate latency)
    await new Promise((r) => setTimeout(r, 900));

    setOk(true);
    setLoading(false);
  }

  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="text-gray-600">
          Prefer WhatsApp? Reach us instantly or leave a message via the form.
        </p>
      </div>

      {/* WhatsApp quick action */}
      <WhatsAppCTA phone="+201221601033" label="Message us on WhatsApp" message="Hello! I have a quick question about your service." />

      {/* Form */}
      {ok ? (
        <div className="rounded-lg border bg-green-50 p-4 text-green-800">
          Thanks! We’ll get back to you shortly.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="name">Your name</label>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </div>

          <div className="grid gap-2">
            <label className="text-sm" htmlFor="email">Your email</label>
            <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
          </div>

          <div className="grid gap-2">
            <label className="text-sm" htmlFor="message">How can we help?</label>
            <Textarea id="message" name="message" rows={5} placeholder="Tell us a bit about your needs…" required />
          </div>

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send message"}
            </Button>
            <span className="text-xs text-gray-500">Demo only — no email is sent yet.</span>
          </div>
        </form>
      )}
    </section>
  );
}
