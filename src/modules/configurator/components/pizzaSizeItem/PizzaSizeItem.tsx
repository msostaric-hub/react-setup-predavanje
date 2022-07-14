/** @jsxImportSource @emotion/react */
import { PizzaSizes } from 'modules/configurator/types';
import React from 'react';
import styles from './PizzaSizeItem.styles';

interface PizzaSizeProps {
  selectedSize?: PizzaSizes;
  size: PizzaSizes;
  setPizzaSize: (size: PizzaSizes) => void;
}

export const PizzaSizeItem: React.FC<PizzaSizeProps> = ({
  selectedSize,
  size,
  setPizzaSize,
}) => {
  function handleSelect() {
    setPizzaSize(size);
  }

  return (
    <div css={styles.pizza__container}>
      <button
        css={[
          styles.pizza__size__btn,
          selectedSize === size && styles.pizza__size__btn__selected,
        ]}
        onClick={handleSelect}
      >
        {size}
      </button>
    </div>
  );
};
