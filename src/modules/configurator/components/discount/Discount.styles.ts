import { css } from '@emotion/react';

const discount__container = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
  backgroundColor: '#ECECF3',
  borderRadius: '72px',
  minWidth: '438px',
  padding: '8px 8px',
});

const input__txt = css({
  minWidth: '180px',
  margin: 'auto 24px',
  border: 'none',
  backgroundColor: '#ECECF3',
  fontSize: '16px',
  outline: 'none',
});

const discount__btn = css({
  padding: '24px 48px',
  borderRadius: '46px',
  border: '2px solid #DBDBDB',
});

const styles = {
  discount__container,
  input__txt,
  discount__btn,
};

export default styles;
