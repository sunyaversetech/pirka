import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="visit" className="border-t border-border/70 bg-accent/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_1fr_1fr_1.2fr] md:px-10 md:py-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/prika_logo.png"
              alt="Pirka Canberra logo"
              width={40}
              height={52}
              className="h-10 w-auto"
            />
            <span className="font-display text-2xl leading-none text-primary">
              PIRKA
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Coffee, matcha, momo and good food, made for slow mornings and
            quick catch-ups in Canberra.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-xs tracking-wide text-primary">
            NAVIGATE
          </h3>
          <Link
            href="/"
            className="text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            Menu
          </Link>
          <Link
            href="/#about"
            className="text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/#visit"
            className="text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            Visit Us
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-xs tracking-wide text-primary">
            CONTACT
          </h3>
          <a
            href="tel:+61200000000"
            className="flex items-start gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            [Add phone number]
          </a>
          <div className="flex items-start gap-2 text-sm text-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>[Add street address], Canberra ACT</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-foreground/80">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>[Add opening hours]</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-xs tracking-wide text-primary">
            FIND US
          </h3>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Pirka Canberra location"
              src="https://www.google.com/maps?q=Canberra+ACT&output=embed"
              className="h-40 w-full grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 px-6 py-5 md:px-10">
        <p className="mx-auto max-w-6xl text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Pirka Canberra. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
