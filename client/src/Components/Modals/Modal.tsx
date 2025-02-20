import { ReactNode, useRef } from "react"
import { useModalContext } from "./context/useModalContext"
import { createPortal } from "react-dom";

interface PropsModal {
  children: ReactNode,
  id: string
}

export function Modal({ children, id }: PropsModal) {
  const { modalState, setModalState } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null)

  const modalRoot = document.getElementById("modals");

  function closeModal(id: string) {
    if (id !== modalState.id) {
      console.log("No hay ningún modal con el id: ", id)
      return
    }

    setModalState({
      id,
      isOpen: false
    })

  }


  function stopPropagation(e: React.MouseEvent<HTMLDivElement>) { e.stopPropagation() }
  const isOpen = modalState.isOpen && modalState.id === id;

  if (!modalRoot || !isOpen) {
    return null;
  }



  return createPortal(
    <div className="overlay" onClick={() => closeModal(id)}>
      <div className="modal" onClick={stopPropagation} ref={modalRef} id={id}>
        {children}
        {modalRef.current && modalRef.current.id}
      </div>
    </div>, modalRoot
  )
}