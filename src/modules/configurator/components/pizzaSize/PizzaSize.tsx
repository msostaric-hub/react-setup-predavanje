/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './PizzaSize.styles';
export const PizzaSize: React.FC = () => {
  return (
    <div css={styles.pizza__size__selector}>
      <input type="button" value="S" css={styles.pizza__size__btn} />
      <input type="button" value="M" css={styles.pizza__size__btn} />
      <input type="button" value="L" css={styles.pizza__size__btn} />
    </div>
  );
};
