import { useReducer } from 'react';

const initial = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initial;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initial);

  return (
    <>
      <div>Count - {count}</div>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
