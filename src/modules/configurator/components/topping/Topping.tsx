/** @jsxImportSource @emotion/react */

import { ToppingInfo } from 'modules/configurator/types';
import React, { useState } from 'react';
import styles from './Topping.styles';

export const Topping: React.FC<ToppingInfo> = ({ name, toppingImg }) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      css={
        isActive
          ? [styles.topping__card, styles.topping__selected]
          : styles.topping__card
      }
      onClick={clickHandler}
    >
      <button
        css={
          isActive
            ? [styles.topping__img, styles.topping__img__selected]
            : styles.topping__img
        }
        onClick={clickHandler}
      >
        <img src={toppingImg} alt="Topping" />
      </button>
      <p css={styles.topping__txt}>{name}</p>
    </button>
  );
};
