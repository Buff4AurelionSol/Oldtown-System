import { useContext } from "react";
import { ContextModal } from "./ContextModal";
import { INITIAL_MODAL_CONTEXT } from "./const/const";


export function useModalContext() {
  const context = useContext(ContextModal)

  if (context === INITIAL_MODAL_CONTEXT || !context) {
    throw new Error("Se estáusando el modal fuera del proveedor");
  }

  return context;

}