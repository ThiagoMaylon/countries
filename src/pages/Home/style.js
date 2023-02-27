import styled from "styled-components";

export const HomeStyle = styled.main`
    font-size: 14px;
    .form{
        width: 90%;
        margin: 30px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .inputSe{
            width: 400px;
            border-radius: 3px;
            display: flex;
            align-items: center;

            .btnSearch{
                padding: 10px 20px;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            input{
                width: 100%;
                outline: none;
                background: none;
                border: none;
                padding: 10px;
                font-size: 1.2rem;
               
            }
            
        }
    }
    .container{
        width: 95%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        margin: auto; 
    }
`