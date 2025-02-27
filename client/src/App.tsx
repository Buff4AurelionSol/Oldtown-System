import './App.css'
import { useModalContext } from './Components/Modals/context/useModalContext'
import { BookTable } from './Components/BookTable/BookTable'
import { MainModal } from './Components/Modals/MainModal'
import { ModalToChange } from './Components/Modals/ModalToChange'
function App() {

  const { setModalState } = useModalContext()
  const { openModal } = useModalContext()


  return (
    <div className='app'>
      <div>
        <h1>Oldtown</h1>
        <button onClick={() => { openModal("modal-1") }}>Nuevo libro</button>
      </div>
      <BookTable />
      <MainModal />
      <ModalToChange />

    </div>
  )
}

export default App
