import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '../Actions/actionTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book]
    case DELETE_BOOK:
      return state
        .filter(book => book.id !== action.id)
    case EDIT_BOOK:
      return state
        .map(book => book.id === action.book.id ? action.book : book)
    default:
      return []
  }
}