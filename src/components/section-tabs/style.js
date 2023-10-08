import { styled } from "styled-components";

export const SectionTabsWarpper = styled.div`
display: flex;
margin: 0 -8px;
.item{
    padding: 12px 32px;
    margin: 0 8px;
    border-radius: 3px;
    border:1px solid ${props => props.theme.border.primaryColor};
    ${props => props.theme.mixin.boxShadow}
    overflow: hidden;
    &.active{
        background-color: ${props => props.theme.background.secondaryColor};
        color:#fff;
    }
}
`