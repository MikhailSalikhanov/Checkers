import white from './img/w.png'
import black from './img/b.png'
import blackKing from './img/bk.png'
import whiteKing from './img/wk.png'
import { useDispatch, useSelector } from 'react-redux'
import { take, put, untake} from './store'


export function BoardCell(props) {
    
    const dispatch = useDispatch()
    let takenFigure = useSelector(state => state.takenFigure)
    let takenId = useSelector(state => state.takenId)
    let charsArray = useSelector(state => state.charsArray)
    
    const handleClick = (id) => {       
        if (!takenFigure && charsArray[id] != ".") {
            dispatch(take({id, figure: charsArray[id]}))
        } else if (takenFigure && charsArray[id] == "." && (id + ~~(id/8))%2
            && (!((id - takenId) % 7) || !((id - takenId) % 9))
            && (((takenFigure == "w" || takenFigure == "b") && Math.abs(id - takenId) < 10)
                ||(takenFigure == "W" || takenFigure == "B") )
        ) {
            dispatch(put({ id, figure: takenFigure, takenId }))
        } else if (id == takenId) {
            dispatch(untake())
        }
    }

    switch (props.figure) {
        case 'w':
            return (
                <div className={(props.id + ~~(props.id/8))%2 ? "cell black" : "cell white"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    <div className={(takenFigure && takenId == props.id) ? "red_border cell_inner" : "cell_inner"}>
                        <img src={white} />
                    </div>
                </div>
            )
          case 'W':
            return (
                <div className={(props.id + ~~(props.id/8))%2 ? "cell black" : "cell white"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    <div className={(takenFigure && takenId == props.id) ? "red_border cell_inner" : "cell_inner"}>
                        <img src={whiteKing} />
                    </div>
                </div>
            )
          case 'b':
            return (
                <div className={(props.id + ~~(props.id/8))%2 ? "cell black" : "cell white"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    <div className={(takenFigure && takenId == props.id) ? "red_border cell_inner" : "cell_inner"}>
                        <img src={black} />
                    </div>
                </div>
            )
          case 'B':
            return (
                <div className={(props.id + ~~(props.id/8))%2 ? "cell black" : "cell white"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    <div className={(takenFigure && takenId == props.id) ? "red_border cell_inner" : "cell_inner"}>
                        <img src={blackKing} />
                    </div>
                </div>
            )
          case '.':
            return (
                <div className={(props.id + ~~(props.id/8))%2 ? "cell black" : "cell white"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                </div>
            )
          default:
            return (
                <div className={(props.id + ~~(props.id/8))%2 ? "cell black" : "cell white"}
                    id={props.id} onClick={() => handleClick(props.id)}>
                    ???
                </div>
            )
    }
}
