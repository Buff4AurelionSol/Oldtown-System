import { ReactNode, useRef } from "react"
import { useModalContext } from "./context/useModalContext"
import { createPortal } from "react-dom";
import "./styles-modal.css"

interface PropsModal {
  children: ReactNode,
  id: string
}

export function Modal({ children, id }: PropsModal) {
  const { modalState, setModalState } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null)

  const modalRoot = document.getElementById("modals");

  function closeModal(id: string) {
    setModalState((prevState) => ({
      ...prevState,
      [id]: false
    }))
  }


  function stopPropagation(e: React.MouseEvent<HTMLDivElement>) { e.stopPropagation() }
  const isOpen = modalState[id] || false

  if (!modalRoot || !isOpen) {
    return null;
  }



  return createPortal(
    <div className="overlay" onClick={() => closeModal(id)}>
      <div className="modal" onClick={stopPropagation} ref={modalRef} id={id}>
        {children}
      </div>
    </div>, modalRoot
  )
}