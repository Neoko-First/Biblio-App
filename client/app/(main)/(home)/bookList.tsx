"use client";

import { getAllBooks } from "@/app/api/book/routes";
import { useEffect, useState } from "react";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book?.id}>
          <h2>{book?.name}</h2>
        </div>
      ))}
    </div>
  );
}
