import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0); 

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button 
                    style={{
                        backgroundColor: "green"
                    }}
                onClick={()=>{ dispatch(increment())}}>+</button>
                <button 
                style={{
                    backgroundColor: "blue"
                }}
                onClick={()=>{ dispatch(decrement())}}>-</button>
            </div>
            <div>
                <button 
                style={{
                    backgroundColor: "red"
                }}
                onClick={()=>{ dispatch(resetAll())}}>Reset</button>
            </div>
            <div>
                <input type="text"
                value={incrementAmount}
                onChange={(e) => {
                    setIncrementAmount(e.target.value)
                }}
                />
            </div>
            <div>
                <button 
                style={{
                    backgroundColor: "yellow"
                }}
                onClick={()=>{ dispatch(incrementByAmount(addValue))}}>Increment By</button>
                <button 
                style={{
                    backgroundColor: "yellow"
                }}
                onClick={()=>{ dispatch(incrementByAmount(addValue))}}>Decrement By</button>
            </div>
        </section>
    )
}

export default Counter;