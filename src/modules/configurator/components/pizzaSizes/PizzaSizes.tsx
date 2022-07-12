import { pizzaSizesList } from 'modules/configurator/const/PizzaSizesList';
import React from 'react';
import { PizzaSize } from '../pizzaSize/PizzaSize';
import styles from './PizzaSizes.styles';

export const PizzaSizes: React.FC = () => {
  return (
    <div css={styles.pizza__size__selector}>
      {pizzaSizesList.map(({ size }) => {
        <PizzaSize size={size} key={size} />;
      })}
    </div>
  );
};
