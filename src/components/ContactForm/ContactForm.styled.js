import styled from '@emotion/styled';


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  background-color: rgba(255, 115, 0, 0.1);
  border: 2px solid rgba(255, 115, 0, 0.8);
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  margin-right: avto;
  margin-left: avto;
  height: fit-content;
  gap: 20px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  margin-top: 5px;
  width: 200px;
  cursor: text;
  border: 1px solid rgba(255, 115, 0, 0.8);
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  color: black;
  background: none;
  border: 2px solid rgba(255, 115, 0, 0.8);
  border-radius: 10px;
  &:hover,
  &:focus {
    color: black;
    font-weight: bold;
    background: rgba(242, 255, 0, 0.1);
    border-color: rgba(242, 255, 0, 0.8);
  }
`;


