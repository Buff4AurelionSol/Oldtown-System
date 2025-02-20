import './App.css'
import { Modal } from './Components/Modals/Modal'
import { useModalContext } from './Components/Modals/context/useModalContext'
import { BaseInput } from './Components/Inputs/BaseInput'

function App() {

  const { modalState, setModalState } = useModalContext()

  function openModal(id: string) {
    setModalState({
      id,
      isOpen: true
    })
  }

  return (
    <div className='app'>
      <h1>Oldtown</h1>
      <button onClick={() => { openModal("modal-1") }}>Abrir modal</button>
      <button onClick={() => { openModal("modal-2") }}>Abrir modal</button>

      <Modal id='modal-1'>
        <form>
          <BaseInput label='Titulo' type='text' />
          <BaseInput label='Género' type='text' />
          <button>Ingresasr</button>
        </form>
      </Modal>
      <Modal id='modal-2'>
        Soy un segundo modal
      </Modal>
    </div>
  )
}

export default App
