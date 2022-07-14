import { pizzaSizesList } from 'modules/configurator/const/PizzaSizesList';
import { PizzaSizes } from 'modules/configurator/types';
import React, { useState } from 'react';
import { PizzaSizeItem } from '../pizzaSizeItem';

import styles from './PizzaSize.styles';

export const PizzaSize: React.FC = () => {
  const [selectedSize, setSize] = useState<PizzaSizes>();

  function setPizzaSize(size: PizzaSizes) {
    setSize(size);
  }

  // You can save this in recoil if needed.
  console.log('selected size of pizza is: ', selectedSize);

  return (
    <div css={styles.pizza__size__selector}>
      {pizzaSizesList.map(({ size }) => {
        return (
          <PizzaSizeItem
            size={size}
            key={size}
            selectedSize={selectedSize}
            setPizzaSize={setPizzaSize}
          />
        );
      })}
    </div>
  );
};
