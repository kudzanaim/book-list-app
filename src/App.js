import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { BooksList } from './components/BooksList/BooksList'
import { addBook, deleteBook, editBook } from './components/Actions/actions'
import './App.css'

const App = () => {
  const books = useSelector(state => state.books)
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'Book List App'
  }, [])

  return (
    <div className="p-10 font-primary">
      <div className='flex justify-center'>
        <BooksList 
          books={books}
          editBook={(data) => dispatch(editBook(data))}
          deleteBook={(data) => dispatch(deleteBook(data))}
          addBook={(data) => dispatch(addBook(data))}
        />
      </div>
    </div>
  )
}

export default App