import styled from '@emotion/styled';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 90px;
  background-color: blueviolet;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 8px;
  color: white;
  border-color: blue;
  font-weight: bold;
  &:hover {
    background-color: blue;
  }
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 19px;
`;
