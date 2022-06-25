import { css } from '@emotion/react';

const pizza__size__selector = css({
  display: 'flex',
  gap: '16px',
  backgroundColor: '#ECECF3',
  padding: '8px 16px',
  borderRadius: '72px',
});

const pizza__size__btn = css({
  padding: '14px 48px',
  backgroundColor: '#ECECF3',
  borderRadius: '36px',
  border: 'none',
  color: '#8C8C8C',
});
const pizza__size__btn__selected = css({
  backgroundColor: '#FFFF',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
});

const styles = {
  pizza__size__selector,
  pizza__size__btn,
  pizza__size__btn__selected,
};

export default styles;
