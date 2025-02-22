import { Modal } from './Modal';
import { BookType } from '../../types/types';
import { BaseInput } from '../Inputs/BaseInput';

interface PropsMainModal {
  addBook: (book: BookType) => void
}

export function MainModal({ addBook }: PropsMainModal) {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { title, genre, author, pages, words } = Object.fromEntries(new FormData(e.currentTarget)) as BookType

    const newBook: BookType = {
      title, genre, author,
      pages, words
    }
    addBook(newBook)


  }

  return (
    <Modal id='modal-1'>
      <form onSubmit={handleSubmit}>
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