import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
  color: ${colors.purpleTxT};
  background: ${colors.whiteTxTBg};
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 2rem;
  border-radius: 8px;
`;

export const Texto = styled.h1`
  text-align: center;
  color: ${colors.purpleTxT};
  background: ${colors.whiteTxTBg};
  font-size: 1rem;
  font-weight: bolder;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 5px;

  @media (min-width: 1157px) {
    font-size: 1.5rem;
    padding: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label {
    width: 220px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #eee;
    border: 5px dashed ${colors.purpleTxT};

    img {
      width: 209px;
      height: 168px;
      border-radius: 8px;
    }
  }

  input {
    display: none;
  }

  button {
    margin-top: 20px;
    background: ${colors.whiteTxTBg};
  }

  @media (min-width: 1157px) {
    label {
      width: 370px;
      height: 280px;

      img {
        width: 359px;
        height: 269px;
      }
    }

    button {
      font-size: 1.3rem;
      margin: 25px;
    }
  }
`;
