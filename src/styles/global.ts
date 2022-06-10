import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --white: #fff;
    --gray-50: #F8F8F8;
    --gray-100: #F6F6F6;
    --gray-400: #AFB5C0;
    --gray-600: #4F5665;
    --gray-900: #0B132A;
    --red-500: #F53855;

    --font-type-1-name: 'Rubik';
    --font-type-1-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: var(--font-type-1-name), var(--font-type-1-fallback);
    font-size: 1.6rem;
    color: var(--gray-600);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
