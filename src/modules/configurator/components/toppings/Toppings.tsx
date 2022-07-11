/** @jsxImportSource @emotion/react */
import { toppings } from 'modules/configurator/const/Toppings';
import React from 'react';
import { Topping } from '../topping/Topping';
import styles from './Toppings.styles';

export const Toppings: React.FC = () => {
  return (
    <div css={styles.component__container}>
      {toppings.map(({ name, toppingImg, price }) => (
        <Topping name={name} toppingImg={toppingImg} price={price} key={name} />
      ))}
    </div>
  );
};
