export type ModalState = Record<string, boolean>


export type TypeContextModal = {
  modalState: ModalState,
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>,
  openModal(id: string): void
}





