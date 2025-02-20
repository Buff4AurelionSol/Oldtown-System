export type ModalState = {
  isOpen: boolean;
  id: string;
}

export type TypeContextModal = {
  modalState: ModalState,
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>
}





