import { css } from '@emotion/react';

const topping__card = css({
  background: '#FFFFFF',
  border: '1px solid #F2F2F2',
  boxShadow: ' 0px 12px 16px rgba(0, 0, 0, 0.03)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '56px',
  minWidth: '80px',
  minHeight: '120px',
});

const topping__selected = css({
  backgroundColor: '#E5C3F5',
});

const topping__img = css({
  backgroundColor: 'white',
  padding: '15px',
  margin: '8px',
  borderRadius: '50%',
  minHeight: '28px',
  boxShadow: '0px 12px 28px rgba(0, 0, 0, 0.03)',
});

const topping__img__selected = css({
  backgroundColor: '#F2F2F2',
});

const topping__txt = css({
  marginTop: '8px',
  fontSize: '12px',
});

const styles = {
  topping__card,
  topping__img,
  topping__img__selected,
  topping__txt,
  topping__selected,
};

export default styles;
