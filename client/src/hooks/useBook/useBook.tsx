import { useState } from "react"
import { initialBooks } from "../../consts/const"
import { BookType, uuid } from "../../types/types"

export const INITIAL_BOOK = {
  uuid: `${""}-${""}-${""}-${""}-${""}` as uuid,
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

    books.find((bookToFind) => {
      if ((bookToFind.title === book.title) && (bookToFind.author === book.author)) {
        throw new Error("Ya se ha ingresado este libro")
      }
    })

    setBooks((prevState) => [...prevState, book])
  }

  function changeBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { title, genre, author, pages, words } = Object.fromEntries(new FormData(e.currentTarget)) as BookType
    const { uuid } = bookToChangeState

    const newBook: BookType = {
      uuid, title, genre,
      author, pages, words
    }

    const udpdateBooks = books.map((book) => {
      if (book.uuid === bookToChangeState.uuid) {
        return newBook
      }
      return book
    })

    setBooks(udpdateBooks)
  }


  function deleteBook(bookToDelete: BookType) {
    const newBook = books.filter((books) => {
      return books.uuid !== bookToDelete.uuid
    })

    setBooks(newBook)

  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setBookToChangeState((prev) => ({
      ...prev,
      [name]: value
    }));
  }


  function cleanBooks() {
    setBooks(initialBooks)
  }




  return { books, setBooks, addBook, cleanBooks, deleteBook, changeBook, bookToChangeState, setBookToChangeState, onChange }

}