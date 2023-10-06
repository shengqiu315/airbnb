import { styled } from 'styled-components'


export const CenterWarpper = styled.div`
    width:300px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 22px;
    padding: 5px 10px;
    border: 1px solid #eee;
    cursor: pointer;
    font-weight: 600;
    /* 使用通用主题文字颜色 */
    color: ${(props) => props.theme.text.primaryColor};
    /* 使用混入 */
    ${props => props.theme.mixin.boxShadow}


    .search-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.background.primaryColor};
        color:${props => props.theme.text.threeColor}
    }
`