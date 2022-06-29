/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styles from './PizzaSize.styles';
export const PizzaSize: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  const setSelectedSize = (size: string) => {
    if (size !== selected) setSelected(size);
    else setSelected('');
  };

  return (
    <div css={styles.pizza__size__selector}>
      <button
        css={
          selected === 'S'
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={() => setSelectedSize('S')}
      >
        S
      </button>
      <button
        css={
          selected === 'M'
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={() => setSelectedSize('M')}
      >
        M
      </button>
      <button
        css={
          selected === 'L'
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={() => setSelectedSize('L')}
      >
        L
      </button>
    </div>
  );
};
