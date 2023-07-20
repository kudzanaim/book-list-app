import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from './actionTypes'

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    book
  }
}

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    id
  }
}

export const editBook = (book) => {
  return {
    type: EDIT_BOOK,
    book
  }
}