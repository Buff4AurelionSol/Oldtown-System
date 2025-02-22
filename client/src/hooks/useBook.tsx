import { useState } from "react"
import { initialBooks } from "../consts/const"
import { BookType } from "../types/types"

export function useBook() {
  const [books, setBooks] = useState<BookType[]>(initialBooks)

  function addBook(book: BookType) {
    setBooks((prevState) => [...prevState, book])
  }

  function deleteBook(bookToDelete: BookType) {
    const newBook = books.filter((books) => {
      return books != bookToDelete;
    })

    setBooks(newBook)
  }

  function cleanBooks() {
    setBooks(initialBooks)
  }




  return { books, setBooks, addBook, cleanBooks, deleteBook }

}