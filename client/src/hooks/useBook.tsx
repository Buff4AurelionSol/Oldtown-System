import { useState } from "react"
import { initialBooks } from "../consts/const"
import { BookType } from "../types/types"

export function useBook() {
  const [books, setBooks] = useState<BookType[]>(initialBooks)

  function addBook(book: BookType) {
    setBooks((prevState) => [...prevState, book])
  }

  function cleanBooks() {
    setBooks(initialBooks)
  }

  return { books, setBooks, addBook, cleanBooks }

}