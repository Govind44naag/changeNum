//this is redux-toolkit use to replace useContext & createContext stuff and this toolkit 
//is the best things ::but understand this in deeply and it's flow
import './App.css'
 import {useSelector,useDispatch} from 'react-redux'
 import {decrement,increment,makereset,incrementByAmount} from './features/counter/counterSlice'
import {useState} from 'react'
function App() {
  const[amount,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
 function handleIncrementClick(){
dispatch(increment())
 }
 function handleDecrementClick(){
dispatch(decrement())
 }
 function handleResetClick(){
  dispatch(makereset())
 }
 function handleIncAmountClick(){
  dispatch(incrementByAmount(amount))//amount is payload & incrementBy.. is action
 }
  return (
     
   <div className="container">
    <button id="plus" onClick={handleIncrementClick}>+</button>
    <p id="para">Count:{count}</p>
    <button id="minus" onClick={handleDecrementClick}>-</button>
    <button id='reset' onClick={handleResetClick}>Reset</button>
    <br /><br />
    <input type="Number"
    value={amount}
    placeholder="Enter Amount"
    onChange={(e)=>setAmount(e.target.value)}
     />
     <br /><br />
     <button onClick={handleIncAmountClick}>Inc by Amount</button>
   </div>
     
  )
}

export default App
