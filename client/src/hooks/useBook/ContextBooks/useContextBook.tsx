import { useContext } from "react";
import { ContextBook } from "./ContextBook";
import { INITIAL_CONTEXT_BOOK } from "./consts/consts-books";

export function UseContextBook() {
  const context = useContext(ContextBook)

  if (context === INITIAL_CONTEXT_BOOK || !context) {
    throw new Error("Estás tratando de usar los libros fuera del proveedor")
  }

  return context;

}