import { useSelector } from 'react-redux';
import { createStore } from 'redux';

let fen = ".w.w.w....w......W.b.W.............B..........b....b....b......."
const charsArray = fen.split('');

const defaultState = {
  colorsArray: ["w", "b", "w", "b", "w", "b", "w", "b", "b", "w","b", "w","b", "w","b", "w","w", "b", "w", "b", "w", "b", "w", "b", "b", "w","b", "w","b", "w","b", "w","w", "b", "w", "b", "w", "b", "w", "b", "b", "w","b", "w","b", "w","b", "w","w", "b", "w", "b", "w", "b", "w", "b", "b", "w","b", "w","b", "w","b", "w"],
  charsArray,
  takenFigure: "",
  takenId: 100
}

export const changeFen = payload => ({type: "changeFen", payload})
// export const changeColors = payload => ({type: "changeColors", payload})
export const take = payload => ({type: "take", payload})
export const put = payload => ({type: "put", payload})
  
function fenReducer(state = defaultState, action) {
  switch (action.type) {
    case 'changeFen':
      return {
        ...state, charsArray: action.payload.fen.split('')}
    // case 'changeColors':
    //   return {
    //     ...state, colorsArray: []}
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