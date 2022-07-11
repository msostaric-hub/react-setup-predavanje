import React, { useEffect, useState } from 'react';

export const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => setCount(count + 1);
  const decrementHandler = () => setCount(count - 1);

  useEffect(() => {
    return () => {
      console.log({ count });
    };
  }),
    [];
  return (
    <div>
      <button onClick={incrementHandler}>+</button>
      <span>{count}</span>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
};
