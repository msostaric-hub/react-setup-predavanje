/** @jsxImportSource @emotion/react */
import React from 'react';
import Pizza from '../../../assets/icons/pizza__icon.png';
import styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <header>
      <div css={styles.header}>
        <p css={styles.textStyle}>Pizz-a-tron</p>
        <div>
          <img src={Pizza} css={styles.header__img} />
        </div>
        <button css={styles.buttonStyle}>Log out</button>
      </div>
    </header>
  );
};
