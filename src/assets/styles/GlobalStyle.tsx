import React from 'react';
import { css, Global } from '@emotion/react';
import { mq } from '@utils/mediaquery/mediaQuery';

const style = css`
  @font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2')
      format('woff2');
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: #111827;
    padding: 0;
    margin: 0;

    ${mq('desktop')} {
      font-size: 1.6rem;
    }
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareNeo-Variable', sans-serif;
  }

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  *::placeholder {
    font-family: 'NanumSquareNeo-Variable', sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

  button {
    font: inherit;
    cursor: pointer;
  }

  textarea,
  input,
  select {
    outline: none;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
