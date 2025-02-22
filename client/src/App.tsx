import './App.css'
import { useModalContext } from './Components/Modals/context/useModalContext'
import { BookTable } from './Components/BookTable/BookTable'
import { MainModal } from './Components/Modals/MainModal'

function App() {

  const { setModalState } = useModalContext()

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
      <BookTable />
      <MainModal />
    </div>
  )
}

export default App
