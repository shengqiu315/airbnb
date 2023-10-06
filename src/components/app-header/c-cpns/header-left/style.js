import { styled } from 'styled-components'


export const LeftWarpper = styled.div`
flex:1;
display: flex;
color: ${props => props.theme.background.primaryColor};
.logo{
    cursor: pointer;
}
`