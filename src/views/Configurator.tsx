/** @jsxImportSource @emotion/react */
import { PizzaPrice, Topping, PizzaSize, Discount } from 'modules/configurator';
import React from 'react';
import { Header } from 'shared/components';
import styles from './Configurator.styles';
import Chilli from '../assets/icons/chilli__icon.png';
import Bacon from '../assets/icons/bacon__icon.png';
import Egg from '../assets/icons/egg__icon.png';
import Meat from '../assets/icons/meat__icon.png';
import Pineapple from '../assets/icons/pineapple__icon.png';
import Shroom from '../assets/icons/shroom__icon.png';
import Corn from '../assets/icons/corn__icon.png';

export const Configurator: React.FC = () => {
  return (
    <div>
      <div css={styles.wrapper}>
        <Header />
        <p css={styles.title__txt}>Toppings! Toppings!</p>
        <div css={styles.component__container}>
          <Topping name="Chilli" toppingImg={Chilli} />
          <Topping name="Corn" toppingImg={Corn} />
          <Topping name="Egg" toppingImg={Egg} />
          <Topping name="Pineapple" toppingImg={Pineapple} />
          <Topping name="Meat" toppingImg={Meat} />
          <Topping name="Shrooms" toppingImg={Shroom} />
          <Topping name="Bacon" toppingImg={Bacon} />
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
