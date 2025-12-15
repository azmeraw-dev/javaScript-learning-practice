import { useState } from "react";

function Counter({ initial }) {

const [count, setCount] = useState(initial);
return (
   <div style={{ marginBottom: "20px" }}></div> 
   <h3>Count: {count}</h3>
   <button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
   <button onClick={() => setCount(initial)}>Reset</button>
   </div>
  );
}
export default Counter;
