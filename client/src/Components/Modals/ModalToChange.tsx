import { Modal } from "./Modal"
import { BaseInput } from "../Inputs/BaseInput"
import { UseContextBook } from "../../hooks/useBook/ContextBooks/useContextBook"

export function ModalToChange() {
  const { bookToChangeState, changeBook, onChange } = UseContextBook()



  return (
    <Modal id='modal-2'>
      <h2>Modificar Modal</h2>
      <form onSubmit={changeBook}>
        <BaseInput label='Titulo' type='text' name="title" value={bookToChangeState.title} onChange={onChange} />
        <BaseInput label='Género' type='text' name="genre" value={bookToChangeState.genre} onChange={onChange} />
        <BaseInput label='Autor' type='text' name="author" value={bookToChangeState.author} onChange={onChange} />
        <BaseInput label='Numero Páginas' type='number' name='pages' value={bookToChangeState.pages} onChange={onChange} />
        <BaseInput label='Numero Palabras' type='number' name='words' value={bookToChangeState.words} onChange={onChange} />
        <button type="submit">Ingresar</button>
      </form>
    </Modal>
  )
}