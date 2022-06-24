import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

export const lightTheme = {
    fontColor: '#2c2c2c',
    bgColor: 'white',
};

export const darkTheme = {
    fontColor: 'white',
    bgColor: '#2c2c2c',
};

//기본 디자인을 무시하는 js
export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
