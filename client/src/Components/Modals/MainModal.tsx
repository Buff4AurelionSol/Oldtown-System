import { Modal } from './Modal';
import { BookType } from '../../types/types';
import { BaseInput } from '../Inputs/BaseInput';
import { UseContextBook } from '../../hooks/useBook/ContextBooks/useContextBook';


export function MainModal() {
  const { addBook } = UseContextBook()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { title, genre, author, pages, words } = Object.fromEntries(new FormData(e.currentTarget)) as BookType
    const uuid = crypto.randomUUID()
    const newBook: BookType = {
      uuid, title, genre,
      author, pages, words
    }

    addBook(newBook)
  }

  return (
    <Modal id='modal-1'>
      <form onSubmit={handleSubmit}>
        <h2>Añadir un nuevo libro.</h2>
        <BaseInput label='Titulo' type='text' name="title" />
        <BaseInput label='Género' type='text' name="genre" />
        <BaseInput label='Autor' type='text' name="author" />
        <BaseInput label='Numero Páginas' type='number' name='pages' />
        <BaseInput label='Numero Palabras' type='number' name='words' />
        <button type="submit">Ingresar</button>
      </form>
    </Modal>
  )
}