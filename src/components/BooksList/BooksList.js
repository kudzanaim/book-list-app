import React, { useState } from 'react'
import { AddBookModal } from '../AddBookModal/AddBookModal'
import { EditBookModal } from '../EditBookModal/EditBookModal'

export const BooksList = ({ books, editBook, deleteBook, addBook }) => {
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [book, setBook] = useState({})

  const AddbookButton = () => (
    <button onClick={() => setShowModal(true)}
      className='bg-green-600 hover:bg-green-800
     text-white font-bold py-2 px-4 rounded'>
      Add Book
    </button>
  )

  const BooksTableLegend = () => (
    <tr className='flex justify-between font-bold
      border-y-[2px] border-black py-2'>
      <td className='w-[20%]'>Name</td>
      <td className='w-[20%]'>Price</td>
      <td className='w-[20%]'>Category</td>
      <td className='w-[20%]'/>
    </tr>
  )

  const openEditModal = (book) => {
    setBook(book)
    setShowEditModal(true)
  }

  const BooksTableRow = ({ book }) => (
    <tr className='flex justify-between py-2 border-b-[1px] 
      border-black font-[500] text-[13px]'>
      <td className='w-[20%] relative top-2'>{book.name}</td>
      <td className='w-[20%] relative top-2'>${book.price}</td>
      <td className='w-[20%] relative top-2'>{book.category}</td>
      <td className='w-[20%] grid grid-cols-2 gap-1 text-[12px2'>
        <button onClick={() => openEditModal(book)}
          className='bg-yellow-400 hover:bg-yellow-500
          text-black font-[500] py-2 px-4 rounded'>
          Edit
        </button>
        <button onClick={() => deleteBook(book.id)}
          className='bg-red-600 hover:bg-red-700
          text-white font-[500] py-2 px-4 rounded'>
          Delete
        </button>
      </td>
    </tr>
  )

  return (
    <div className='w-[80%]'>
      <div>
        <h1 className='font-[800] pb-4 mb-[100px]
          border-b-[1px] border-black text-[40px]'>Book List</h1>
        <AddbookButton />
        <table className='w-full mt-5'>
          <thead>
            <BooksTableLegend />
          </thead>
          <tbody>
            {books.map((book) => (  
              <BooksTableRow key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      </div>
      {showModal && <AddBookModal
        books={books}
        addBook={addBook} 
        setShowModal={setShowModal}/>}
      {showEditModal && <EditBookModal 
        editBook={editBook}
        book={book}
        setShowModal={setShowEditModal}/>}
    </div>
  )
}
