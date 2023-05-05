import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: ${colors.whiteBg};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.whiteBg};
    border: none;
    color: ${colors.purpleTxT};
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.whiteTxTBg};
  }

  a:hover{
    text-decoration: none;
    color: ${colors.whiteTxTBg};
  }

p, h4{
  margin: 0;
}

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor}
  }
`;

export const Container = styled.section`
  max-width: 95vw;
  width: 700px;
  background: ${colors.purpleTxT};
  margin: 30px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: ${colors.whiteTxTBg};
  }
`;
