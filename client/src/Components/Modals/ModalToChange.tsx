import { Modal } from "./Modal"
import { BaseInput } from "../Inputs/BaseInput"
import { UseContextBook } from "../../hooks/useBook/ContextBooks/useContextBook"

export function ModalToChange() {
  const { bookToChangeState, changeBook } = UseContextBook()


  return (
    <Modal id='modal-2'>
      <h2>Modificar Modal</h2>
      <form onSubmit={changeBook}>
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