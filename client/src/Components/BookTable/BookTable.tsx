import { UseContextBook } from "../../hooks/useBook/ContextBooks/useContextBook"
import { useModalContext } from "../Modals/context/useModalContext"

export function BookTable() {
  const { books, deleteBook, setBookToChangeState } = UseContextBook()
  const { openModal } = useModalContext()

  if (books.length === 0) {
    return <div>No hay libros aún</div>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Género</th>
          <th>Autor</th>
          <th>Numero de Páginas</th>
          <th>Número de palabras</th>
          <th>Modificar</th>
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
            <td>{book && <button onClick={() => {
              setBookToChangeState(book)
              openModal("modal-2")
            }}>Modificar</button>}</td>
            <td>{book && <button onClick={() => deleteBook(book)}>X</button>}</td>
          </tr>
        )
        }
      </tbody>
    </table>
  )
}