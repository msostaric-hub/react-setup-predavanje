/** @jsxImportSource @emotion/react */
import { Topping } from 'modules/configurator';
import { PizzaSize } from 'modules/configurator/components/pizzaSize/PizzaSize';
import React from 'react';
import { Header } from 'shared/components';
import styles from './Configurator.styles';

export const Configurator: React.FC = () => {
  return (
    <div>
      <div css={styles.wrapper}>
        <Header />
        <p css={styles.title__txt}>Toppings! Toppings!</p>
        <div css={styles.topping__container}>
          <Topping />
          <Topping />
          <Topping />
          <Topping />
          <Topping />
          <Topping />
          <Topping />
          <Topping />
        </div>
        <p css={styles.small__txt}>Total price +$3.00</p>
        <p css={styles.title__txt}>Pizza! Pizza! size</p>
        <div css={styles.pizza__size__container}>
          <PizzaSize />
        </div>
      </div>
    </div>
  );
};
