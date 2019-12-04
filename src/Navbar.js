import React from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './Colour';

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const Navbar = () => (
  <header
    css={css`
      background-color: ${colors.secondary};
      padding: 15px;
    `}
  >
    <Link to="/">Adopt me!</Link>
    <span
      css={css`
        font-size: 60px;
        animation: 1s ${spin} linear infinite;

        &:hover {
          text-decoration: underline;
        }
      `}
      role="img"
      aria-label="logo"
    >
      😆
    </span>
  </header>
);
export default Navbar;
