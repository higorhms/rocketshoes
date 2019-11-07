import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    #root{
        min-height: 100%;
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    body{
        background: #100496 url(${background}) no-repeat;
        -webkit-font-smothing: antialiased !important;
    }

    body, input, button{
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
