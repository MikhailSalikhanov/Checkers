import white from './img/w.png'
import black from './img/b.png'
import blackKing from './img/bk.png'
import whiteKing from './img/wk.png'
import { useDispatch, useSelector } from 'react-redux'
import { take, put } from './store'

let colorsArray = ["w", "b", "w", "b", "w", "b", "w", "b", "b", "w","b", "w","b", "w","b", "w","w", "b", "w", "b", "w", "b", "w", "b", "b", "w","b", "w","b", "w","b", "w","w", "b", "w", "b", "w", "b", "w", "b", "b", "w","b", "w","b", "w","b", "w","w", "b", "w", "b", "w", "b", "w", "b", "b", "w","b", "w","b", "w","b", "w"]

export function BoardCell(props) {

    const dispatch = useDispatch()
    let takenFigure = useSelector(state => state.takenFigure)
    let takenId = useSelector(state => state.takenId)
    let charsArray = useSelector(state => state.charsArray)
    
    const handleClick = (id) => {
        if (!takenFigure && charsArray[id] != ".") {
            dispatch(take({id, figure: charsArray[id]}))
        } else if (takenFigure && charsArray[id] == ".") {
            dispatch(put({id, figure: takenFigure, takenId}))
        }
    }
    switch (props.figure) {
          case 'w':
            return (
                <div className={colorsArray[props.id] == "w" ? "cell white" : "cell black"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    <div className={(takenFigure && takenId == props.id) ? "red_border cell_inner" : "cell_inner"}>
                        <img src={white} />
                    </div>
                </div>
            )
          case 'W':
            return (
                <div className={colorsArray[props.id] == "w" ? "cell white" : "cell black"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    <div className={(takenFigure && takenId == props.id) ? "red_border cell_inner" : "cell_inner"}>
                        <img src={whiteKing} />
                    </div>
                </div>
            )
          case 'b':
            return (
                <div className={colorsArray[props.id] == "w" ? "cell white" : "cell black"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    <div className={(takenFigure && takenId == props.id) ? "red_border cell_inner" : "cell_inner"}>
                        <img src={black} />
                    </div>
                </div>
            )
          case 'B':
            return (
                <div className={colorsArray[props.id] == "w" ? "cell white" : "cell black"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    <div className={(takenFigure && takenId == props.id) ? "red_border cell_inner" : "cell_inner"}>
                        <img src={blackKing} />
                    </div>
                </div>
            )
          case '.':
            return (
                <div className={colorsArray[props.id] == "w" ? "cell white" : "cell black"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                </div>
            )
          default:
            return (
                <div className={colorsArray[props.id] == "w" ? "cell white" : "cell black"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    ???
                </div>
            )
    }
}
