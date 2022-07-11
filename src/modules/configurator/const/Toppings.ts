import { ToppingInfo } from '../types';
import Chilli from 'assets/icons/chilli__icon.png';
import Bacon from 'assets/icons/bacon__icon.png';
import Egg from 'assets/icons/egg__icon.png';
import Meat from 'assets/icons/meat__icon.png';
import Pineapple from 'assets/icons/pineapple__icon.png';
import Shroom from 'assets/icons/shroom__icon.png';
import Corn from 'assets/icons/corn__icon.png';

export const toppings: ToppingInfo[] = [
  { name: 'Chilli', toppingImg: Chilli, price: 3 },
  { name: 'Corn', toppingImg: Corn, price: 3 },
  { name: 'Egg', toppingImg: Egg, price: 3 },
  { name: 'Pineapple', toppingImg: Pineapple, price: 3 },
  { name: 'Meat', toppingImg: Meat, price: 3 },
  { name: 'Shrooms', toppingImg: Shroom, price: 3 },
  { name: 'Bacon', toppingImg: Bacon, price: 3 },
];
