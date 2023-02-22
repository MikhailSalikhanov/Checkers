import { useSelector } from 'react-redux';
import './App.css';
import { BoardCell } from './Board';


function App() {
  const charsArray = useSelector(state=>state.charsArray)
  let renderBoard = []
  for (let i = 0; i < charsArray.length; i++) {
    renderBoard[i] = <BoardCell id={i} figure={charsArray[i]} />
      }
  return (
    <>
      <div className="board">
        {renderBoard}
      </div>
      <div className="fen">
          {charsArray.join('')}
      </div>
    </>
  );
}

export default App;
