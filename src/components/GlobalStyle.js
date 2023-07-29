import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import banner from '../components/img/notepad-g315b840fe_1280.jpg';
export const GlobalStyle = createGlobalStyle`
  body {
    background-size: contain;
    background:url(${banner});
  }



ul{
  padding-left: 0;
  margin: 0;
  list-style:circle;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}


`;
