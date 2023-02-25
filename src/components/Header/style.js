import styled from "styled-components";

export const HeaderStyle = styled.header`
   height : 90px;
   display: flex;

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 90%;
        height: 100%;

        .logo{
            a{
                text-decoration: none;
                font-size: 1.5em;
                font-weight: 800;
            }
        }

        
    }
`