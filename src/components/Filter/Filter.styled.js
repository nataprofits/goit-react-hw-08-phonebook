import styled from 'styled-components';

export const FilterWrap = styled.div`
 display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  background: linear-gradient(146deg, #6c6c66, transparent);
  border: 2px solid black;
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  margin-right: avto;
  margin-left: avto;
  height: fit-content;
  gap: 20px;
`;

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  color: rgb(217, 232, 64);
`;
export const InputFilter = styled.input`
  width: 250px;
  padding: 5px 10px;
  margin-top: 5px;
  width: 200px;
  cursor: text;
  border: 1px solid rgba(255, 115, 0, 0.8);
  border-radius: 5px;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;

  &:focus {
    border: 1px solid rgb(197 216 14);
    box-shadow: rgb(207 226 21) 5px 0px 27px -8px;
  }
`;
