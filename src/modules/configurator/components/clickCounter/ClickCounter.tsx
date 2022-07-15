import React, { useEffect, useMemo, useState } from 'react';

export const ClickCounter: React.FC = () => {
  const [expensiveCount, setExpensiveCount] = useState(0);

  const expensiveCalculation = (num: number) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.log('FINISHED');
    return num;
  };

  const calculation = useMemo(
    () => expensiveCalculation(expensiveCount),
    [expensiveCount],
  );

  const expensiveIncrement = () => {
    setExpensiveCount((c) => c + 1);
  };

  useEffect(() => {
    return () => {
      console.log({ expensiveCount });
    };
  }),
    [];
  return (
    <div>
      <div>
        Count: {expensiveCount}
        <button onClick={expensiveIncrement}>+</button>
        <h4>Expensive Clicker Counter</h4>
        {calculation}
      </div>
    </div>
  );
};
