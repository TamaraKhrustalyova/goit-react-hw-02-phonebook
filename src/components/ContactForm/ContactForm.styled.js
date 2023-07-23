import { styled } from 'styled-components';

export const Form = styled.form`
    position: relative;
  width: 350px;
  height: 200px;
  padding: 15px 12px;

  border: 1px solid gray;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  border: 1px solid black;

  &:focus {
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 4px rgba(127, 255, 212, 0.75);
  }
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 8px;
  display: block;

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