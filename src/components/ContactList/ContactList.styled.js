import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  gap: 50px;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  text-align: center;
`;

export const Btn = styled.button`
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #cacaca;
  border-radius: 4px;

  transition: background 100ms linear;

  &:active {
    background: aquamarine;
  }
`;