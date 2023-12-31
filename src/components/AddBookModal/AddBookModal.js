import React, { useState } from 'react'
import { Categories } from '../Categories/Categories'

export const AddBookModal = ({ books, addBook, setShowModal }) => {
  const [{ bookName, bookPrice, bookCategory, bookDescription }, updateValue] = useState({
    name: '', price: '', category: '', description: ''
  })
  
  const addNewBook = () => {
    addBook({ id: (books.length+1), name: bookName, price: bookPrice, 
      category: bookCategory, description: bookDescription })
    setShowModal(false)
  }

  const onValueChange = (e) => {
    const { name, value } = e.target
    updateValue(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'/>
        </div>
        <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <h3 className='text-[20px] font-[800] text-gray-700'>
                  Add Book</h3>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500 mb-2'>
                    <label className='text-[14px] font-[500]'>Book Name:</label>
                    <input type='text' placeholder='Book Name' 
                      name='bookName' onChange={onValueChange}
                      className='bookName border border-gray-400 rounded-sm p-2 w-full mt-1'/>
                  </p>
                  <p className='text-sm text-gray-500 mb-2'>
                    <label className='text-[14px font-[500]'>Book Price:</label>
                    <input type='number' placeholder='Book Price' 
                      name='bookPrice' onChange={onValueChange}
                      className='bookPrice border border-gray-400 rounded-sm p-2 w-full mt-1'/>
                  </p>
                  <p className='text-sm text-gray-500 mb-2'>
                    <label className='text-[14px font-[500]'>Book Category:</label>
                    <select className='bookCategory border border-gray-400 rounded-sm p-2 w-full mt-1' name='bookCategory' onChange={onValueChange}>
                      <option value=''>Select Category</option>
                      {Categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </p>
                  <p className='text-sm text-gray-500 mb-2'>
                    <label className='text-[14px font-[500]'>Description:</label>
                    <textarea type='text' placeholder='Add Description' 
                      className='bookDescription border border-gray-400 rounded-sm p-2 w-full mt-1' name='bookDescription' onChange={onValueChange}/>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
            <button type='button' 
              onClick={addNewBook}
              className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'>Add</button>
            <button onClick={() => setShowModal(false)}
             className='mt-3 w-full inline-flex justify-center 
              rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white 
              text-base font-medium text-gray-700 hover:bg-gray-50 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 
              sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}