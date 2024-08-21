"use client";

import MainHeader from "@/components/ui/mainHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
}
