/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { ClickCounter } from '../clickCounter';
import styles from './PizzaPrice.styles';

export const PizzaPrice: React.FC = () => {
  const [active, setActive] = useState(false);
  const activeHandler = () => {
    setActive(!active);
  };
  return (
    <div css={styles.container}>
      <button onClick={activeHandler}>Mount/Unmount</button>
      {active && <ClickCounter />}
      <div css={styles.content}>
        <input type="number" min={0} css={styles.quantity} />
        <p css={styles.content__txt}>qty</p>
      </div>
      <div css={styles.content__border} />
      <div css={styles.content}>
        <p>$22.50</p>
        <p css={styles.content__txt}>Order total</p>
      </div>
      <div css={styles.content}>
        <button css={styles.btn}>Buy Pizza! Pizza!</button>
      </div>
    </div>
  );
};
