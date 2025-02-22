import './App.css'
import { useModalContext } from './Components/Modals/context/useModalContext'
import { useBook } from './hooks/useBook'
import { BookTable } from './Components/BookTable/BookTable'
import { MainModal } from './Components/Modals/MainModal'



function App() {

  const { setModalState } = useModalContext()
  const { books, addBook } = useBook()

  function openModal(id: string) {
    setModalState((prevState) => ({
      ...prevState,
      [id]: true
    }))
  }

  return (
    <div className='app'>
      <div>
        <h1>Oldtown</h1>
        <button onClick={() => { openModal("modal-1") }}>Nuevo libro</button>
      </div>
      <BookTable books={books} />
      <MainModal addBook={addBook} />
    </div>
  )
}

export default App
