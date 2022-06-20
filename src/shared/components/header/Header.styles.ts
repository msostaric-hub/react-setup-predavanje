import { css } from '@emotion/react';

const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '24px 0',
});

const buttonStyle = css({
  padding: '16px 60px',
  border: '1px solid #DBDBDB',
  borderRadius: '36px',
  backgroundColor: 'transparent',
});
const textStyle = css({
  textAlign: 'center',
});

const styles = {
  header,
  buttonStyle,
  textStyle,
};

export default styles;
