import { ReactNode, createContext, useState } from "react";
import { INTIAL_STATE_MODAL, INITIAL_MODAL_CONTEXT } from "./const/const";
import { TypeContextModal, ModalState } from "./const/types";

export const ContextModal = createContext<TypeContextModal>(INITIAL_MODAL_CONTEXT)

interface PropsProvider {
  children: ReactNode
}

export function ContextProvider({ children }: PropsProvider) {

  const [modalState, setModalState] = useState<ModalState>(INTIAL_STATE_MODAL)

  function openModal(id: string) {
    setModalState((prevState) => ({
      ...prevState,
      [id]: true
    }))
  }

  return <ContextModal.Provider value={{ modalState, setModalState, openModal }}>{children}</ContextModal.Provider>
}