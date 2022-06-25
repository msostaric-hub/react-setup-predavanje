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
  alignContent: 'center',
});

const topping__container = css({
  display: 'flex',
  justifyContent: 'space-around',
});

const pizza__size__container = css({
  display: 'flex',
  justifyContent: 'space-around',
});

const styles = {
  title__txt,
  wrapper,
  topping__container,
  small__txt,
  pizza__size__container,
};

export default styles;
