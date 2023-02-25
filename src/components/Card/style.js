import styled from "styled-components";

export const CardStyle = styled.div`
    width: 250px;
    border-radius: 5px;
    margin: 30px;
    .imagem{
        margin: 0;
        img{
            width: 100%;
            height: 150px;
            border-radius: 5px 5px 0 0;
        }
    }

    .content{
        padding: 20px 30px;

        h2{
            padding: 5px 0;
        }
        p{
            margin: 5px 0;
        }
        span{
            font-weight: 800;
        }
    }
`