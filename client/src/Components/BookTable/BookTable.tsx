import { BookType } from "../../types/types"

interface PropsBookTable {
  books: BookType[]
}

export function BookTable({ books }: PropsBookTable) {
  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Género</th>
          <th>Autor</th>
          <th>Numero de Páginas</th>
          <th>Número de palabras</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) =>
          <tr key={book.title}>
            <td>{book.title}</td>
            <td>{book.genre}</td>
            <td>{book.author}</td>
            <td>{book.pages}</td>
            <td>{book.words}</td>
          </tr>
        )
        }
      </tbody>
    </table>
  )
}