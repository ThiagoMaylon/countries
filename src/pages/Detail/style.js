import styled from "styled-components";

export const DetailStyle = styled.div`
    .container{
        width: 95%;
        margin: 30px auto;
        display: flex;
        align-items: center;
        justify-content: space-around;

        @media (max-width: 800px) {
            &{
                flex-direction: column;
                width: 100%;
            }

            .name{
                h2{
                    text-align: center;
                }
            }
        }

        .flag{
            img{
                width: 400px;
                @media (max-width: 900px) {
                    &{
                        width: 300px;
                    }
                }
            }
        }

        .content{
           
            height: 100%;
            width: 50%;
            
            .name{
               margin-bottom: 30px;
               h2{
                font-size: 2rem;
               }
            }
            .info{
                display: flex;
                align-items: center;
                justify-content: space-between;
                @media (max-width: 800px){
                    &{
                        flex-direction: column;
                        width: 100%;
                        justify-content: center;
                    }
                    .info-right{
                        margin: 20px 0;
                    }


                }
                .info-left{
                    p{
                        margin: 5px 0;
                        span{
                            font-weight: bold;
                        }
                    }
                }

                .info-right{
                    p{
                        margin: 5px 0;

                        span:not(.no){
                            font-weight: bold;
                        }
                    }
                }
            }


            .bor{
                display: flex;
                margin-top: 30px;
                align-items: center;
                .borders{
                    display: flex;
                }
                @media (max-width: 800px){
                    &{
                        flex-direction: column;
                    }
                }
                p{
                    font-weight: 600;
                    margin-right: 5px;
                }
                .border{
                    margin: 0 5px;
                    border-radius: 3px;
                    /* width: 40px; */
                    text-align: center;
                    padding: 5px 10px;
                }
            }
        }
    }
    .back{
        margin: auto;
        width: 95%;
        a{
            text-decoration: none;
        }
        .btn-back{
            margin: 40px 0;
            width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border-radius: 3px;

            span{
                margin-left: 10px;
            }
            
        }
    }
`