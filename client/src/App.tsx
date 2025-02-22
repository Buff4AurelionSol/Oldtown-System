import './App.css'
import { Modal } from './Components/Modals/Modal'
import { useModalContext } from './Components/Modals/context/useModalContext'
import { BaseInput } from './Components/Inputs/BaseInput'
import { useBook } from './hooks/useBook'
import { BookType } from './types/types'
import { BookTable } from './Components/BookTable/BookTable'




function App() {

  const { setModalState } = useModalContext()
  const { books, setBooks, addBook } = useBook()

  function openModal(id: string) {
    setModalState((prevState) => ({
      ...prevState,
      [id]: true
    }))
  }

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
    <div className='app'>
      <div>
        <h1>Oldtown</h1>
        <button onClick={() => { openModal("modal-1") }}>Nuevo libro</button>
      </div>

      <BookTable books={books} />

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
    </div>
  )
}

export default App
