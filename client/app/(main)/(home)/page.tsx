import type { Metadata } from "next";
import BookList from "./bookList";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover the best books",
  openGraph: {
    title: "Home",
    description: "Discover the best books",
  },
};

export default function Home() {
  return (
    <div>
      <BookList />
    </div>
  );
}
