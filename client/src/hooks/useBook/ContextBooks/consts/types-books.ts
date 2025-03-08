import { BookType } from "../../../../types/types"

export type ContextBookType = {
  books: BookType[],
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>,
  addBook: (book: BookType) => void,
  cleanBooks: () => void,
  deleteBook: (bookToDelete: BookType) => void,
  changeBook: (e: React.FormEvent<HTMLFormElement>) => void,
  bookToChangeState: BookType,
  setBookToChangeState: React.Dispatch<React.SetStateAction<BookType>>,
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
} 