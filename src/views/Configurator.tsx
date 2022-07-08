/** @jsxImportSource @emotion/react */
import {
  PizzaPrice,
  PizzaSize,
  Discount,
  Toppings,
} from 'modules/configurator';
import React from 'react';
import { Header } from 'shared/components';
import styles from './Configurator.styles';

export const Configurator: React.FC = () => {
  return (
    <div>
      <div css={styles.wrapper}>
        <Header />
        <p css={styles.title__txt}>Toppings! Toppings!</p>
        <div css={styles.component__container}>
          <Toppings />
        </div>
        <p css={styles.small__txt}>Total price +$3.00</p>
        <p css={styles.title__txt}>Pizza! Pizza! size</p>
        <div css={styles.component__container}>
          <PizzaSize />
        </div>
        <p css={styles.title__txt}>Get the discount</p>
        <div css={styles.component__container}>
          <Discount />
        </div>
        <div css={styles.component__container}>
          <PizzaPrice />
        </div>
      </div>
    </div>
  );
};
