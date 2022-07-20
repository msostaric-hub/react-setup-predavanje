/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './Discount.styles';

export const Discount: React.FC = () => {
  return (
    <div css={styles.discount__container}>
      <input
        type="text"
        placeholder="Enter discount code"
        css={styles.input__txt}
      />
      <button css={styles.discount__btn}>Apply</button>
    </div>
  );
};
