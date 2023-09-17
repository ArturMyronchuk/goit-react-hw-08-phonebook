import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 10px;
  width: 150px;
  background-color: blueviolet;
  font-size: 16px;
  border-color: blue;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: blue;
  }
`;
export const Form = styled.form`
  max-width: 500px;
  border: 3px solid blue;
  margin: 50px auto;
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
