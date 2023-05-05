import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  color: ${colors.whiteBg};
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const ProfilePicture = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  color: ${colors.purpleTxT};
  position: relative;
  padding: 15px;

  img {
    width: 200px;
    height: 150px;
    border-radius: 8px;
  }
  form .formFoto {
    display: none;
  }
  form .labelFoto {
    width: 210px;
    height: 160px;
    display: flex;
    background-color: #eee;
    border-radius: 8px;
    border: 5px dashed ${colors.purpleTxT};
    margin: 30px auto;
    cursor: pointer;
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;

    bottom: 30px;
    background-color: white;
    border-radius: 40%;
    padding: 3px;
  }

  @media (min-width: 1157px) {
    form .labelFoto {
      width: 300px;
      height: 210px;
    }
    img {
      width: 290px;
      height: 200px;
    }
  }
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
