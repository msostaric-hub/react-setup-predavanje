/** @jsxImportSource @emotion/react */

import { ToppingInfo, ToppingNames } from 'modules/configurator/types';
import React from 'react';
import styles from './Topping.styles';

interface ToppingProps {
  selectedName?: ToppingNames;
  toppingName?: ToppingNames;
  setToppingName: (toppingName: ToppingNames) => void;
}

export const Topping: React.FC<ToppingInfo & ToppingProps> = ({
  name,
  toppingImg,
  selectedName,
  toppingName,
  setToppingName,
}) => {
  console.log(toppingName);
  function handleSelect() {
    if (!toppingName) {
      return;
    }

    setToppingName(toppingName);
  }

  return (
    <button
      css={[
        styles.topping__card,
        selectedName === toppingName && styles.topping__selected,
      ]}
      onClick={handleSelect}
    >
      <div
        css={[
          styles.topping__img,
          selectedName === toppingName && styles.topping__img__selected,
        ]}
        onClick={handleSelect}
      >
        <img src={toppingImg} alt="Topping" />
      </div>
      <p css={styles.topping__txt}>{name}</p>
    </button>
  );
};
