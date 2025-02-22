import { BookType } from "../../../../types/types"

export type ContextBookType = {
  books: BookType[],
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>,
  addBook: (book: BookType) => void,
  cleanBooks: () => void,
  deleteBook: (bookToDelete: BookType) => void
} 