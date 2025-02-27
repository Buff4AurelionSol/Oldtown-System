import { useState } from "react"
import { initialBooks } from "../../consts/const"
import { BookType } from "../../types/types"

export const INITIAL_BOOK = {
  title: "",
  genre: "",
  author: "",
  pages: "",
  words: ""
}


export function useBook() {
  const [books, setBooks] = useState<BookType[]>(initialBooks)
  const [bookToChangeState, setBookToChangeState] = useState<BookType>(INITIAL_BOOK)


  function addBook(book: BookType) {
    setBooks((prevState) => [...prevState, book])
  }

  function changeBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { title, genre, author, pages, words } = Object.fromEntries(new FormData(e.currentTarget)) as BookType
    const newBook: BookType = {
      title, genre, author,
      pages, words
    }

    const udpdateBooks = books.map((book) => {
      if (book.title === bookToChangeState.title) {
        return newBook
      }
      return book
    })

    setBooks(udpdateBooks)


    console.log(books)
  }

  function deleteBook(bookToDelete: BookType) {
    const newBook = books.filter((books) => {
      return books.title !== bookToDelete.title
    })

    setBooks(newBook)

  }


  function cleanBooks() {
    setBooks(initialBooks)
  }




  return { books, setBooks, addBook, cleanBooks, deleteBook, changeBook, bookToChangeState, setBookToChangeState }

}