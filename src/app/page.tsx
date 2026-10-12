import Image from "next/image";
import Link from "next/link";
import { Coffee, Hamburger, Soup, Sparkles, Clock3 } from "lucide-react";

const categories = [
  {
    title: "Coffee & Matcha",
    description: "Espresso, iced coffee, matcha, hot choc and chai.",
    icon: Coffee,
    tone: "bg-primary text-primary-foreground",
  },
  {
    title: "Momo & Mains",
    description: "Momo dumplings, fish & chips, schnitzel and Pirka meals.",
    icon: Soup,
    tone: "bg-accent text-accent-foreground",
  },
  {
    title: "Burgers & Sides",
    description: "Smash burgers, loaded fries and morning croissants.",
    icon: Hamburger,
    tone: "bg-secondary text-secondary-foreground border border-border",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="font-heading text-xs tracking-widest text-primary">
            PIRKA · CANBERRA
          </span>
          <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            Great Brews,
            <br />
            Good Vibes.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            From espresso and matcha to momo and burgers — Pirka is your spot for
            slow mornings, quick catch-ups and everything in between, right in
            the heart of Canberra.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/menu"
              className="font-heading rounded-full bg-primary px-7 py-3.5 text-xs text-primary-foreground shadow-sm transition-transform hover:scale-105">
              View Menu
            </Link>
            <Link
              href="/#visit"
              className="font-heading rounded-full border border-primary px-7 py-3.5 text-xs text-primary transition-colors hover:bg-primary/10">
              Get Directions
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-accent" />
          <Image
            src="/prika_logo.png"
            alt="Pirka Canberra tower illustration"
            width={420}
            height={552}
            className="relative h-auto w-2/3 drop-shadow-sm"
            priority
          />

          {/* <div className="absolute -left-4 bottom-6 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm sm:-left-8">
            <Clock3 className="h-5 w-5 text-primary" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[10px] text-primary">
                OPEN DAILY
              </span>
              <span className="text-xs text-muted-foreground">[Add hours]</span>
            </div>
          </div> */}

          <div className="absolute -right-4 top-6 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm sm:-right-8">
            <Sparkles className="h-5 w-5 text-primary" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[10px] text-primary">
                MADE FRESH
              </span>
              <span className="text-xs text-muted-foreground">Every day</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map(({ title, description, icon: Icon, tone }) => (
            <Link
              key={title}
              href="/menu"
              className={`group flex flex-col gap-4 rounded-3xl p-7 transition-transform hover:-translate-y-1 ${tone}`}>
              <Icon className="h-8 w-8" />
              <h3 className="font-heading text-sm">{title}</h3>
              <p className="text-sm leading-relaxed opacity-80">
                {description}
              </p>
              <span className="mt-2 font-heading text-[10px] tracking-wide opacity-70 transition-opacity group-hover:opacity-100">
                SEE MENU →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div className="relative mx-auto flex w-full max-w-xs items-center justify-center md:order-2">
          <div className="absolute inset-0 rounded-full bg-primary/10" />
          <Image
            src="/prika_logo.png"
            alt="Pirka Canberra logo"
            width={420}
            height={552}
            className="relative h-auto w-2/3"
          />
        </div>

        <div className="flex flex-col items-start gap-5 md:order-1">
          <span className="font-heading text-xs tracking-widest text-primary">
            ABOUT US
          </span>
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            More Than Just Coffee.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Pirka brings together the ritual of good coffee and the comfort of
            momo, all under one roof in Canberra. Whether you&apos;re grabbing a
            quick flat white before work or settling in for burgers and dumplings
            with friends, we&apos;ve built a menu — and a space — for every part
            of your day.
          </p>
          <Link
            href="/menu"
            className="font-heading rounded-full bg-primary px-7 py-3.5 text-xs text-primary-foreground shadow-sm transition-transform hover:scale-105">
            Explore The Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
