import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 5px;

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #100496;
            border-radius: 5px;
            padding: 15px;
            color: #fff;
            border: none;
            font-weight: bold;
        }
    }
`;

export const ProductTable = styled.table`
    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        max-height: 100px;
    }

    strong {
        display: block;
        color: #333;
    }

    span {
        font-size: 18px;
        display: block;
        padding-top: 5px;
        font-weight: bold;
    }

    button {
        background: none;
        padding: 6px;
        border: none;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 8px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        border: 1px solid #ddd;
        border-radius: 5px;
        color: #666;
        width: 50px;
        padding: 6px;
    }

    button {
        background: none;
        padding: 6px;
        border: none;
    }
`;
