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
      <a
        type="button"
        css={
          selected
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={clickHandler}
      >
        S
      </a>
      <a
        type="button"
        css={
          selected
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={clickHandler}
      >
        M
      </a>
      <a
        type="button"
        css={
          selected
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={clickHandler}
      >
        L
      </a>
    </div>
  );
};
