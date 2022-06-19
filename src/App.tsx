/** @jsxImportSource @emotion/react */
import React from 'react';
import { Configurator } from 'views';
import styles from 'App.styles';
import { Global } from '@emotion/react';

function App() {
  return (
    <div>
      <Global styles={styles.global} />
      <Configurator />
    </div>
  );
}

export default App;
