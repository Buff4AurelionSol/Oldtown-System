import { UseContextBook } from "../../hooks/useBook/ContextBooks/useContextBook"

export function BookTable() {
  const { books, deleteBook } = UseContextBook()
  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Género</th>
          <th>Autor</th>
          <th>Numero de Páginas</th>
          <th>Número de palabras</th>
          <th>Eliminar</th>
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
            <td><button onClick={() => deleteBook(book)}>X</button></td>
          </tr>
        )
        }
      </tbody>
    </table>
  )
}