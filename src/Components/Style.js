import styled from 'styled-components';

export const Select = styled.select`
    margin: 5px;
    padding: 10px 30px;
    padding-left: 10px;
    border: none;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    &:focus-visible {
        outline: none;
    }
`;

export const Button = styled.button`
    margin: 10px 0px;
    padding: 10px 25px;
    background: none;
    border-radius: 25px;
    border: 3px solid blue;
    box-shadow: 0px 0px 5px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.4);
    transition: 0.2s linear;
    &:hover {
        cursor: pointer;
        border: 3px solid red;
    }
`