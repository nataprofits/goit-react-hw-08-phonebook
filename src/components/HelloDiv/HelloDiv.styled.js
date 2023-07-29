import styled from '@emotion/styled';
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
  color: #9c27b0;
  text-transform: uppercase;
  text-shadow: rgb(55 55 55) 1px 1px 0px, rgb(149, 125, 173) 1px 2px 0px,
    rgb(149, 125, 173) 1px 3px 0px, rgb(149, 125, 173) 1px 4px 0px,
    rgb(149, 125, 173) 1px 5px 0px, rgb(149, 125, 173) 1px 6px 0px,
    rgba(16, 16, 16, 0.5) 1px 10px 5px, rgba(16, 16, 16, 0.4) 1px 15px 10px,
    rgba(16, 16, 16, 0.3) 1px 20px 30px, rgba(16, 16, 16, 0.2) 1px 25px 50px;
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