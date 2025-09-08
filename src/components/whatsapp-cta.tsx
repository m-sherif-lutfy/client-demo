"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

type Props = {
  /** E.164 digits only (e.g. "201234567890") */
  phone: string;
  /** Optional prefilled message */
  message?: string;
  /** Optional button text override */
  label?: string;
};

export default function WhatsAppCTA({ phone, message, label }: Props) {
  // normalize to digits only, wa.me needs numbers (no +, spaces)
  const digits = phone.replace(/\D/g, "");
  const text = encodeURIComponent(message ?? "Hello! I’m interested in your services.");
  const href = `https://wa.me/${digits}?text=${text}`;

  return (
    <Button asChild className="gap-2">
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
        <MessageCircle className="h-4 w-4" />
        {label ?? "WhatsApp Us"}
      </a>
    </Button>
  );
}
