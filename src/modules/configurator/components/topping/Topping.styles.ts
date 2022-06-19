import { css } from '@emotion/react';

const topping__container = css({});

const topping__card = css({
  backgroundColor: 'lightgray',
  border: '1px solid #F2F2F2',
  boxShadow: ' 0px 12px 16px rgba(0, 0, 0, 0.03)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '56px',
  minWidth: '76px',
  minHeight: '120px',
});

const topping__img = css({
  backgroundColor: 'white',
  padding: '15px',
  margin: '8px',
  borderRadius: '50%',
  minHeight: '28px',
});

const topping__txt = css({
  marginTop: '0',
});

const styles = {
  topping__container,
  topping__card,
  topping__img,
  topping__txt,
};
export default styles;
