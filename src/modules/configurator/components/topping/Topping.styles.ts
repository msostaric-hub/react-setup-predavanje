import { css } from '@emotion/react';

const topping__card = css({
  background: '#FFFFFF',
  border: '1px solid #F2F2F2',
  boxShadow: ' 0px 12px 16px rgba(0, 0, 0, 0.03)',
  borderRadius: '56px',
  minWidth: '98px',
  minHeight: '148px',
});

const topping__selected = css({
  backgroundColor: '#E5C3F5',
});

const topping__img = css({
  backgroundColor: 'white',
  borderRadius: '40px',
  minHeight: '76px',
  minWidth: '76px',
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
