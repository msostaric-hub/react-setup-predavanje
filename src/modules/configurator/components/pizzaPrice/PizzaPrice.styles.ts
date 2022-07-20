import { css } from '@emotion/react';

const container = css({
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '32px',
  marginTop: '104px',
});

const content = css({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '0',
});
const quantity = css({
  maxWidth: '60px',
  minHeight: '32px',
  borderRadius: '20px',
  border: 'none',
  backgroundColor: '#ECECF3',
  textAlign: 'right',
  fontSize: '16px',
  margin: '16px 0',
});
const content__border = css({
  borderRight: '1px dashed #DBDBDB',
});
const content__txt = css({
  color: '#B9B9B9',
  textTransform: 'uppercase',
});

const btn = css({
  minHeight: '68px',
  margin: 'auto 0',
  borderRadius: '48px',
  minWidth: '160px',
  border: 'none',
  backgroundColor: '#B95DE4',
  color: '#FFFFFF',
});

const styles = {
  quantity,
  container,
  content,
  btn,
  content__txt,
  content__border,
};

export default styles;
