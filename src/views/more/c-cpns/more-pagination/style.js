import { styled } from "styled-components";

export const PaginationWarpper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 60px;
.box{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    min-width: 32px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin: 0 8px;
}
.active{
    background-color: ${props => props.theme.background.secondaryColor};
    color: #fff;
}
`