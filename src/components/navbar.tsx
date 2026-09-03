import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#visit", label: "Visit" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/prika_logo.png"
            alt="Pirka Canberra logo"
            width={40}
            height={52}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-2xl leading-none text-primary">
            PIRKA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-xs tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/menu"
          className="font-heading rounded-full bg-primary px-5 py-2.5 text-xs text-primary-foreground shadow-sm transition-transform hover:scale-105"
        >
          View Menu
        </Link>
      </div>
    </header>
  );
}
