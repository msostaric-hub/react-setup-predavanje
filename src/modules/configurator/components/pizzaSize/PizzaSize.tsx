/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styles from './PizzaSize.styles';
export const PizzaSize: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const clickHandler = () => {
    setSelected(!selected);
  };
  return (
    <div css={styles.pizza__size__selector}>
      <button
        id="1"
        css={
          selected
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={clickHandler}
      >
        S
      </button>
      <button
        id="2"
        css={
          selected
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={clickHandler}
      >
        M
      </button>
      <button
        id="3"
        css={
          selected
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={clickHandler}
      >
        L
      </button>
    </div>
  );
};
