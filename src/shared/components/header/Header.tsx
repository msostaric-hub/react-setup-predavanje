/** @jsxImportSource @emotion/react */
import React from 'react';
import Pizza from '../../../assets/icons/pizza__icon.png';
import styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <header>
      <div css={styles.header}>
        <span css={styles.textStyle}>Pizz-a-tron</span>
        <div>
          <img src={Pizza} />
        </div>
        <button css={styles.buttonStyle}>Log out</button>
      </div>
    </header>
  );
};
