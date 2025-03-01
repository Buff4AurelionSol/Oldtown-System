import './App.css';
import { useModalContext } from './Components/Modals/context/useModalContext';
import { BookTable } from './Components/BookTable/BookTable';
import { MainModal } from './Components/Modals/MainModal';
import { ModalToChange } from './Components/Modals/ModalToChange';
import { UseContextBook } from './hooks/useBook/ContextBooks/useContextBook';
import { useEffect } from 'react';

function App() {
  const { openModal } = useModalContext();
  const { books, setBooks } = UseContextBook();


  useEffect(() => {
    const storedBooks = localStorage.getItem('usuarios');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, [setBooks]);

  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem('usuarios', JSON.stringify(books));
    }
  }, [books]);


  useEffect(() => {
    if (books.length === 0) {
      localStorage.removeItem('usuarios')
    }
  },)

  return (
    <div className='app'>
      <div>
        <h1>Oldtown</h1>
        <button onClick={() => { openModal("modal-1") }}>Nuevo libro</button>
      </div>
      <BookTable />
      <MainModal />
      <ModalToChange />
    </div>
  );
}

export default App;