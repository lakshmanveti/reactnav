import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
  font-family: arial;
}
nav.top {
  min-height: 8px;
  min-width: 150px;
  position: relative;
  padding-bottom: 20px;
}
nav.top li {
  width: 150px;
  height: 60px;
  float: left;
  margin-right: 10px;
  color: #ccc;
  list-style: none;
  text-align: center;
}
nav.top li a{
  color: #ccc;
  text-decoration: none;
  transition:color 1s ease;
}
@keyframes txtchange {
  from {color: #0099CC;}
  to {color: #000;}
}
nav.top li a:hover{
  color: #000;
}
nav.top li a.active{
  animation-name: txtchange;
  animation-duration: 4s;
} 
.line {
  width: 150px;
  height: 1px;
  background: #000;
  position: absolute;
  bottom: 0;
  transition: left 0.3s;
}
`;

export default GlobalStyles;