import { createGlobalStyle} from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @font-face {
  font-display: swap;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 300;
  src:  url('./fonts/nunito-sans-300.woff2') format('woff2'),
        url('./fonts/nunito-sans-300.woff') format('woff'),
}
  @font-face {
    font-display: swap;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/nunito-sans-400.woff2') format('woff2'),
        url('./fonts/nunito-sans-400.woff') format('woff'),
  }
  
  @font-face {
    font-display: swap;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    src: url('./fonts/nunito-sans-600.woff2') format('woff2'),
        url('./fonts/nunito-sans-600.woff') format('woff'),
  }
  
  @font-face {
    font-display: swap;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    src: url('./fonts/nunito-sans-800.woff2') format('woff2'),
        url('./fonts/nunito-sans-800.woff') format('woff'),
  }
  *,
*::before,
*::after {
  box-sizing: border-box;
}
  
  html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

html {
  font-style: normal;
  font-weight: 400;
  font-size: 62.5%;
  font-family: ${(props) => props.theme.fontNunito};
  color: ${(props) => props.theme.colorText};
  scroll-behavior: smooth;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  width: 100%;
  height: 100%;
  line-height: 1.25;
  font-family: ${(props) => props.theme.fontInter};
  font-size: 1.6rem;
  background-color: ${(props) => props.theme.colorBackground};
  position: relative;
}

button {
  cursor: pointer;
  color: ${(props) => props.theme.colorText};
  user-select: none;
}

a {
  color: ${(props) => props.theme.colorText};
  text-decoration: none;
}

picture {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}

input,
textarea {
  border-radius: 0;

  &::placeholder {
    opacity: 1;
  }

  &:invalid {
    box-shadow: none;
  }
}

input:-webkit-autofill {
  box-shadow: inset 0 0 0 1000px ${(props) => props.theme.colorInput};

  -webkit-text-fill-color: ${(props) => props.theme.colorText};
}

select {
  border-radius: 0;
}

input {
  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }

  color: ${(props) => props.theme.colorText};
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  appearance: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;

  appearance: none;
}

input[type="number"] {
  appearance: textfield;
}

select,
textarea,
input:matches([type="email"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="url"]) {
  appearance: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  appearance: none;
}
`

export default GlobalStyle
