import { useDispatch, useSelector } from 'react-redux'
import { changeFen } from './store'

export function FenField(props) {

    const dispatch = useDispatch()
    const charsArray = useSelector(state => state.charsArray)

    const handleChange = (e) => {
        let fen = e.target.value.length >= 64
            ? e.target.value.slice(0,64)
            : e.target.value.padEnd(64, ".")        
        dispatch(changeFen({fen})) 
    }

    return (
        <input type="text" className="fen"
            value={charsArray.join('')} onChange={handleChange}>
        </input>
            )
}
