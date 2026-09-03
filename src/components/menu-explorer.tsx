"use client";

import { useState } from "react";
import { menuData } from "@/lib/menu-data";

export function MenuExplorer() {
  const [active, setActive] = useState<string>("all");

  const categories =
    active === "all"
      ? menuData
      : menuData.filter((category) => category.id === active);

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`font-heading rounded-full px-5 py-2.5 text-[11px] tracking-wide transition-colors ${
            active === "all"
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-foreground/70 hover:border-primary hover:text-primary"
          }`}
        >
          All
        </button>
        {menuData.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            className={`font-heading rounded-full px-5 py-2.5 text-[11px] tracking-wide transition-colors ${
              active === category.id
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground/70 hover:border-primary hover:text-primary"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-14">
        {categories.map((category) => (
          <section key={category.id} className="flex flex-col gap-5">
            <div className="flex items-baseline justify-between border-b border-primary/30 pb-3">
              <h2 className="font-heading text-lg text-primary">
                {category.label}
              </h2>
              {category.priceHeading && (
                <span className="font-heading text-[11px] text-muted-foreground">
                  {category.priceHeading}
                </span>
              )}
            </div>

            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {category.items.map((item) => (
                <div key={item.name} className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="flex-1 border-b border-dotted border-border" />
                    <span className="font-heading text-xs text-primary">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                  {item.note && (
                    <p className="text-xs italic text-muted-foreground/80">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
