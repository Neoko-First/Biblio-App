"use client";

import { ModeToggle } from "./mode-toggle";

export default function MainHeader() {
  return (
    <header className="bg-primary-foreground w-full px-5 py-3 flex items-center justify-between">
      <p className="text-primary font-bold">Biblio&apos;App</p>
      <ModeToggle />
    </header>
  );
}
