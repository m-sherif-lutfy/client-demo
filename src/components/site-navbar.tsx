"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/history", label: "History" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "text-sm transition-colors",
        active
          ? "text-gray-900"
          : "text-gray-600 hover:text-gray-900",
        // subtle underline on hover
        "relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full",
        active ? "after:w-full" : "",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-8 py-3">
        {/* Brand */}
        <Link href="/" className="text-base font-semibold tracking-tight text-gray-900">
          Client Demo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] sm:w-[380px] px-6 pt-8"
            >
              {/* a11y title, visually hidden */}
              <SheetHeader>
                <SheetTitle className="sr-only">Main navigation</SheetTitle>
              </SheetHeader>

              <nav className="mt-4 grid gap-3">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <Link
                      href={l.href}
                      className="text-lg text-gray-800 py-2"
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
