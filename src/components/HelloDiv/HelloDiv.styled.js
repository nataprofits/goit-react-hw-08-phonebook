import styled from 'styled-components';
import { MdContactPhone } from 'react-icons/md';
export const HelloWrap = styled.div`
    margin-top: 150px;
    text-align: center;
    margin-left: 15px;
  
`;
export const HelloTitle = styled.h1`
  font-size: 45px;
  font-weight: 600;
  font-family: sans-serif;
  color: black;
  text-transform: uppercase;
`;
export const Icon = styled(MdContactPhone)`
  margin-left: 15px;
  width: 60px;
  height: 60px;
  margin-top: 10px;
  color: #9c27b0;

  &:hover,
  &:focus {
    background-color: rgb(217, 232, 64);
    box-shadow: rgb(177 179 229) 5px 0px 27px -8px;
  }
`;
export const Text = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-top: 15px;
  color: black;
`;
