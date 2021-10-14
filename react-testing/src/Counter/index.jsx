import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDiabled] = useState(false);

  return (
    <div className="Counter">
      <div data-testid="counter">{counter}</div>
      <div>
        <button
          data-testid="minus-button"
          onClick={() => setCounter(counter - 1)}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCounter(counter + 1)}
          disabled={disabled}
        >
          +
        </button>
        <button
          style={{ backgroundColor: 'blue' }}
          data-testid="on/off-button"
          onClick={() => setDiabled(!disabled)}
        >
          on/off
        </button>
      </div>
    </div>
  );
}
export default Counter;
