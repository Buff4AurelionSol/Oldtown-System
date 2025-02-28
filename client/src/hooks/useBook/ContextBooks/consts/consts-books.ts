import { initialBooks } from "../../../../consts/const"
import { INITIAL_BOOK } from "../../useBook"

export const INITIAL_CONTEXT_BOOK = {
  books: initialBooks,
  setBooks: () => null,
  addBook: () => null,
  cleanBooks: () => null,
  deleteBook: () => null,
  changeBook: () => null,
  bookToChangeState: INITIAL_BOOK,
  setBookToChangeState: () => null,
  onChange: () => null

}