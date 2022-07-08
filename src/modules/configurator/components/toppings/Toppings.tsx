/** @jsxImportSource @emotion/react */
import React from 'react';
import { Topping } from '../topping/Topping';
import Chilli from '../../../../assets/icons/chilli__icon.png';
import Bacon from '../../../../assets/icons/bacon__icon.png';
import Egg from '../../../../assets/icons/egg__icon.png';
import Meat from '../../../../assets/icons/meat__icon.png';
import Pineapple from '../../../../assets/icons/pineapple__icon.png';
import Shroom from '../../../../assets/icons/shroom__icon.png';
import Corn from '../../../../assets/icons/corn__icon.png';
import styles from './Toppings.styles';

export const Toppings: React.FC = () => {
  return (
    <div css={styles.component__container}>
      <Topping name="Chilli" toppingImg={Chilli} />
      <Topping name="Corn" toppingImg={Corn} />
      <Topping name="Egg" toppingImg={Egg} />
      <Topping name="Pineapple" toppingImg={Pineapple} />
      <Topping name="Meat" toppingImg={Meat} />
      <Topping name="Shrooms" toppingImg={Shroom} />
      <Topping name="Bacon" toppingImg={Bacon} />
    </div>
  );
};
