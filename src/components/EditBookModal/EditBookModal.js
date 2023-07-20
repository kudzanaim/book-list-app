import React, { useState } from 'react'
import { Categories } from '../Categories/Categories'

export const EditBookModal = ({ book, updateBook, setShowModal }) => {
  const [{ bookName, bookPrice, bookCategory, bookDescription }, updateValue] = useState({
    bookName: book.name, bookPrice: book.price, 
    bookCategory: book.category, 
    bookDescription: book.description })
  
  const updateBookHandler = () => {
    const bookName = document.querySelector('.bookName').value
    const bookPrice = document.querySelector('.bookPrice').value
    const bookCategory = document.querySelector('.bookCategory').value
    const bookDescription = document.querySelector('.bookDescription').textContent
    updateBook({ name: bookName, price: bookPrice, category: bookCategory, description: bookDescription })
    setShowModal(false)
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
              <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                <h1 className='text-[20px] font-[800] text-gray-700'>
                  Edit Book</h1>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500 mb-3'>
                    <label className='text-[14px] font-[500]'>Name:</label>
                    <input type='text' defaultValue={bookName} 
                      className='mt-1 border border-gray-400 rounded-sm p-2 w-full'/>
                  </p>
                  <p className='text-sm text-gray-500 mb-3'>
                    <label className='text-[14px font-[500]'>Price:</label>
                    <input type='text' defaultValue={bookPrice} 
                      className=' mt-1 border border-gray-400 rounded-sm p-2 w-full'/>
                  </p>
                  <p className='text-sm text-gray-500 mb-3'>
                    <label className='text-[14px font-[500]'>Category:</label>
                    <select className='mt-1 bookCategory border border-gray-400 rounded-sm p-2 w-full'>
                      <option defaultValue={bookCategory}>{bookCategory}</option>
                      {Categories.map((category, key) => (
                        <option key={key} defaultValue={category} 
                          value={category}>{category}</option>
                      ))}
                    </select>
                  </p>
                  <p className='text-sm text-gray-500'>
                    <label className='bookDescription text-[14px font-[500]'>Description:</label>
                    <textarea type='text' className='mt-1 border border-gray-400 rounded-sm p-2 w-full' defaultValue={bookDescription}/>
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 py-3 sm:flex sm:flex-row-reverse'>
              <button onClick={updateBookHandler}
                className='mt-3 w-full inline-flex justify-center
                  rounded-md shadow-sm px-4 py-2 bg-blue-600
                  text-base font-medium text-white focus:outline-none hover:ring-offset-2 
                  sm:mt-0 sm:ml-1 sm:w-auto sm:text-sm'>
                Update
              </button>
              <button onClick={() => setShowModal(false)}
                className='mt-3 w-full inline-flex justify-center
                  rounded-md shadow-sm px-4 py-2 bg-red-600
                  text-base font-medium text-white focus:outline-none hover:ring-offset-2
                  sm:mt-0 sm:ml-1 sm:w-auto sm:text-sm'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
