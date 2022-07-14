/** @jsxImportSource @emotion/react */
import { PizzaSizesType } from 'modules/configurator/types';
import React, { useState } from 'react';
import styles from './PizzaSizeItem.styles';
export const PizzaSizeItem: React.FC<PizzaSizesType> = ({ size }) => {
  const [selected, setSelected] = useState<boolean>(false);

  function toggleSelected() {
    setSelected(!selected);
  }

  return (
    <div css={styles.pizza__container}>
      <button
        css={[
          styles.pizza__size__btn,
          selected && styles.pizza__size__btn__selected,
        ]}
        onClick={toggleSelected}
      >
        {size}
      </button>
    </div>
  );
};
