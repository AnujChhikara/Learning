import { useState } from "react";

export default function CustomHooks() {
  const { count, increaseCount } = useCounter();
  return (
    <div className='space'>
      CustomHooks 100x
      <div>
        <h2>{count}</h2>
        <button onClick={increaseCount}>Increase Count</button>
      </div>
    </div>
  );
}

//custom  hooks must start with use below is a example of a custom hook
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return { count, increaseCount };
}
