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
      <input
        type="button"
        value="S"
        css={selected ? styles.pizza__size__btn2 : styles.pizza__size__btn}
        onClick={clickHandler}
      />
      <input
        type="button"
        value="M"
        css={selected ? styles.pizza__size__btn2 : styles.pizza__size__btn}
        onClick={clickHandler}
      />
      <input
        type="button"
        value="L"
        css={selected ? styles.pizza__size__btn2 : styles.pizza__size__btn}
        onClick={clickHandler}
      />
    </div>
  );
};
