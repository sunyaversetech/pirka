import Image from "next/image";
import type { Metadata } from "next";
import { MenuExplorer } from "@/components/menu-explorer";

export const metadata: Metadata = {
  title: "Menu | Pirka Canberra",
  description:
    "The full Pirka Canberra menu — coffee, matcha, gelato, momo, burgers and more.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 py-16 md:px-10 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="font-heading text-xs tracking-widest text-primary">
          PIRKA · CANBERRA
        </span>
        <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
          Our Menu
        </h1>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          Coffee, matcha, gelato, momo and more — everything Pirka serves, in
          one place.
        </p>
      </div>

      <MenuExplorer />

      <div className="flex flex-col items-center gap-2 pt-6 text-center">
        <span className="font-heading text-xs tracking-widest text-primary">
          PRINTED MENU
        </span>
        <h2 className="font-display text-2xl text-foreground">
          Prefer To Read It As A Card?
        </h2>
      </div>

      <div className="grid w-full gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <Image
            src="/menu/menu_1.png"
            alt="Pirka Canberra drinks menu — coffee, iced coffee, matcha and gelato"
            width={1425}
            height={2013}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <Image
            src="/menu/menu_2.png"
            alt="Pirka Canberra food menu — momo, burgers, sides and Pirka specials"
            width={1425}
            height={2013}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>

      <div className="flex w-full max-w-55 flex-col items-center gap-3 pt-4 text-center">
        <div className="relative h-32 w-full overflow-hidden">
          <Image
            src="/menu/menu_3.png"
            alt="Pirka Canberra"
            fill
            className="object-cover object-[center_58%]"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Please let the server know of any food allergens.
        </p>
      </div>
    </div>
  );
}
