import { useSelector } from 'react-redux';
import { createStore } from 'redux';

let fen = ".w.w.w....w......W.b.W.............B..........b....b....b......."
const charsArray = fen.split('');

const defaultState = {
  charsArray,
  takenFigure: "",
  takenId: 100
}

export const take = payload => ({type: "take", payload})
export const put = payload => ({type: "put", payload})
  
function fenReducer(state = defaultState, action) {
  switch (action.type) {
    case 'take':
      document.getElementById(action.payload.id).classList.add("red_border")
      return {
        ...state, takenFigure: action.payload.figure, takenId: action.payload.id}
    case 'put':
      document.getElementById(action.payload.takenId).classList.remove("red_border")
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