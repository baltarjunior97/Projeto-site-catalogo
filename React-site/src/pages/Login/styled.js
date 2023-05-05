import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  max-height: 70vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${colors.whiteBg};
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
  }

  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;

    &:focus {
      box-shadow: 0px 0px 40px 0px rgba(255, 255, 252, 0.6);
    }
  }

  button:hover {
    background: rgba(248, 246, 246, 0.9);
  }
`;
