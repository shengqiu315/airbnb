import { styled } from "styled-components";

export const SectionTabsWarpper = styled.div`
display: flex;
.item{
    flex-shrink:0;
    text-align: center;
    flex-basis: 120px;
    padding: 12px 32px;
    margin-right: 16px;
    border-radius: 3px;
    border:1px solid ${props => props.theme.border.primaryColor};
    ${props => props.theme.mixin.boxShadow}
    white-space: nowrap;
    &.active{
        background-color: ${props => props.theme.background.secondaryColor};
        color:#fff;
    }
    &:last-child{
        margin-right: 0;
    }
}
`