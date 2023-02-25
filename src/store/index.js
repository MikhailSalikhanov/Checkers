import { useSelector } from 'react-redux';
import { createStore } from 'redux';

let fen = ".w.w.w....w......W.b.W.............B..........b....b....b......."
const charsArray = fen.split('');

const defaultState = {
  charsArray,
  takenFigure: "",
  takenId: 100
}

export const changeFen = payload => ({type: "changeFen", payload})
export const untake = payload => ({type: "untake", payload})
export const take = payload => ({type: "take", payload})
export const put = payload => ({type: "put", payload})
  
function fenReducer(state = defaultState, action) {
  switch (action.type) {
    case 'changeFen':
      return {
        ...state, charsArray: action.payload.fen.split('')}
    case 'untake':
      return {
        ...state, takenFigure: "", takenId: 100}
    case 'take':
      return {
        ...state, takenFigure: action.payload.figure, takenId: action.payload.id}
    case 'put':
      return {
        ...state, takenFigure: "", charsArray: state.charsArray.map((element, index) => {        
          if (index == action.payload.id) {       
            element = action.payload.figure
          } else if (index == action.payload.takenId) {
             element = '.'
          }
          return element
       })}
    default:
      return state
  }
}

let store = createStore(fenReducer)

export { store }