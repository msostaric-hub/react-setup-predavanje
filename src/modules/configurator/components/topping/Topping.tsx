/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './Topping.styles';

export const Topping: React.FC = () => {
  return (
    <div>
      <div css={styles.topping__card}>
        <div css={styles.topping__img}></div>
        <p css={styles.topping__txt}>Chilli</p>
      </div>
    </div>
  );
};
