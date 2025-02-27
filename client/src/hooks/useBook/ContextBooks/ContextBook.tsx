import { ReactNode, createContext } from "react";
import { useBook } from "../useBook";
import { INITIAL_CONTEXT_BOOK } from "./consts/consts-books";
import { ContextBookType } from "./consts/types-books";

export const ContextBook = createContext<ContextBookType>(INITIAL_CONTEXT_BOOK)

interface PropsBookProvider {
  children: ReactNode
}

export function BookProvider({ children }: PropsBookProvider) {
  const { books, setBooks, addBook, cleanBooks, deleteBook, bookToChangeState, setBookToChangeState, changeBook } = useBook()
  return <ContextBook.Provider value={{ books, setBooks, addBook, cleanBooks, deleteBook, bookToChangeState, setBookToChangeState, changeBook }}>{children}</ContextBook.Provider>
}