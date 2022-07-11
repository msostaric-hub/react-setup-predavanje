import { css } from '@emotion/react';

const title__txt = css({
  fontSize: '36px',
  textAlign: 'center',
});

const small__txt = css({
  textAlign: 'center',
});

const wrapper = css({
  maxWidth: '900px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const component__container = css({
  display: 'flex',
  justifyContent: 'space-around',
});

const styles = {
  title__txt,
  wrapper,
  component__container,
  small__txt,
};

export default styles;
