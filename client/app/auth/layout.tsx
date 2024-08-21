import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentification | Biblio",
  description: "Connectez-vous à Biblio",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {children}
    </div>
  );
}
