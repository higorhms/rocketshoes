import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 5px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin-top: 5px 0 20px;
        }

        button {
            display: flex;
            flex-direction: row;
            align-items: center;
            background: #100496;
            border-radius: 5px;
            color: #fff;
            border: none;
            margin-top: auto;

            &:hover{
                background: ${darken(0.03, '#100496')}
            }

            > div {
                display: flex;
                align-items: center;
                padding: 10px;
                border-radius: 5px;
                justify-content: center;
                background: rgba(0, 0, 0, 0.1);
            }

            > span {
                flex: 1
                font-weight: bold;
            }
        }
    }
`;
