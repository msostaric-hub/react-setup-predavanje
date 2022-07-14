import { pizzaSizesList } from 'modules/configurator/const/PizzaSizesList';
import React from 'react';
import { PizzaSizeItem } from '../pizzaSizeItem';

import styles from './PizzaSize.styles';

export const PizzaSize: React.FC = () => {
  return (
    <div css={styles.pizza__size__selector}>
      {pizzaSizesList.map(({ size }) => {
        return <PizzaSizeItem size={size} key={size} />;
      })}
    </div>
  );
};
