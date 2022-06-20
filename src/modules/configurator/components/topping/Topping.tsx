/** @jsxImportSource @emotion/react */

import React from 'react';
import styles from './Topping.styles';

interface Props {
  name: string;
  toppingImg: string | undefined;
}

export const Topping: React.FC<Props> = ({ name, toppingImg }) => {
  return (
    <div>
      <div css={styles.topping__card}>
        <div css={styles.topping__img}>
          <img src={toppingImg} alt="Topping" />
        </div>
        <p css={styles.topping__txt}>{name}</p>
      </div>
    </div>
  );
};
