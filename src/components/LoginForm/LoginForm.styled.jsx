import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 50px;
  flex-direction: column;
  display: flex;
  align-items: center;
  max-width: 500px;
  border: 1px solid blue;
  margin: 50px auto;
`;
export const Button = styled.button`
  margin-top: 30px;
  padding: 10px;
  width: 150px;
  outline: none;
  background-color: blueviolet;
  font-size: 18px;
  border-radius: 14px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: blue;
  }
`;
