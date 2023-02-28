import styled from "styled-components";

export const BtnThemaStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        margin-left: 10px;
        @media (max-width: 375px) {
            font-size: 1rem;
            margin-left: 5px;

        }
    }
`