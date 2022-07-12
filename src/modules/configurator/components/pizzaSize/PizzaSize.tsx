/** @jsxImportSource @emotion/react */
import { PizzaSizesType } from 'modules/configurator/types';
import React, { useState } from 'react';
import styles from './PizzaSize.styles';
export const PizzaSize: React.FC<PizzaSizesType> = ({ size }) => {
  const [selected, setSelected] = useState<string>('');

  const setSelectedSize = (size: string) => {
    size !== selected ? setSelected(size) : setSelected('');
  };

  return (
    <div>
      <button
        css={
          selected === size
            ? [styles.pizza__size__btn, styles.pizza__size__btn__selected]
            : styles.pizza__size__btn
        }
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </button>
    </div>
  );
};
