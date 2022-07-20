/** @jsxImportSource @emotion/react */
import { toppings } from 'modules/configurator/const/Toppings';
import { ToppingNames } from 'modules/configurator/types';
import React, { useState } from 'react';
import { Topping } from '../topping/Topping';
import styles from './Toppings.styles';

export const Toppings: React.FC = () => {
  const [selectedName, setName] = useState<ToppingNames>();

  function setToppingName(toppingName: ToppingNames) {
    setName(toppingName);
  }

  console.log('Selected topping is: ', selectedName);

  return (
    <div css={styles.component__container}>
      {toppings.map(({ name, toppingImg, price }) => (
        <Topping
          name={name}
          toppingImg={toppingImg}
          price={price}
          key={name}
          toppingName={selectedName}
          selectedName={selectedName}
          setToppingName={setToppingName}
        />
      ))}
    </div>
  );
};
