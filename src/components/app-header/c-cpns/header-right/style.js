import styled from "styled-components";


export const RightWarpper = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
color: ${props => props.theme.text.primaryColor};
.handle-bar{
    display: flex;
    align-items: center;
    .item{
        padding: 0 12px;
    }
}
.profile{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ${props => props.theme.border.primaryColor};
    border-radius: 22px;
    width: 77px;
    height: 42px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    .menu{
      position: absolute;
      top: 56px;
      overflow: hidden;
      right: 0px;
      width: 240px;
      background-color: #fff;
      border: 1px solid ${({ theme }) => theme.border.primaryColor};
      border-radius: 4px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      color: #666;
      padding: 6px 0;
        .item{
            padding: 12px 8px;
            &:hover{
                background-color: #f5f5f5;
            }
            &:nth-child(2){
                border-bottom: 1px solid ${({ theme }) => theme.border.primaryColor};
            }
        }
    }
        .q-enter{
            opacity: 0;
            height: 0;
        }
        .q-enter-active{
            opacity: 1;
            height: 240px;
            transition: all 350ms ease;
        }

        .q-exit{
            opacity: 1;
            height:240px;
        }
        .q-exit-active{
            opacity: 0;
            height: 0px;
            transition: all 350ms ease;
        }
}
`