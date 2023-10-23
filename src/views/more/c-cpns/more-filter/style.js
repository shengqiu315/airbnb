import { styled } from "styled-components";

export const FilterWarpper = styled.div`
display: flex;
height: 60px;
align-items: center;
.item{
    margin: 0 8px;
    border: 1px solid #333;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 550;
    color: #333;
}
.active{
    background-color: ${props => props.theme.background.secondaryColor};
    color: #fff;
}
`