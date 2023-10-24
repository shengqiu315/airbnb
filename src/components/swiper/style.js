import { styled } from "styled-components";

export const TestWarpper = styled.div`
width: 100%;
height: 160px;
position: relative;
overflow: hidden;
&:hover{
    .left{
        display: flex;
        justify-content: center;
        align-items:center;
    }

    .right{
        display: flex;
        justify-content: center;
        align-items:center;
}

}
.left,.right{
    position: absolute;
    top: 50%;
    transform:translateY(-50%) ;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    color: red;
    cursor: pointer;
    z-index: 9;
}
.left{
    left: 0;
    display: none;
}

.right{
    display: none;
    right: 0;
}
.item{
    width: 100%;
    height: 160px !important;
    object-fit: cover;
}
.dot{
    position: absolute;
    left: 50%;
    overflow: hidden;
    width: 30%;
    bottom: 12px;
    transform: translateX(-50%);
}
.dot-container{
    position: relative;
    display: flex; 
    height: 24px;
    transition: all 250ms ease;
    align-items: center;
    .dot-item{
        flex-shrink: 0;
        flex-grow: 0;
        margin:0 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10px;
        height: 10px;
        transition: all 250ms ease;
        border: 1px solid ${props => props.theme.background.secondaryColor};
        border-radius: 50%;
        cursor: pointer;
    }
    .active{
        width: 16px;
        height: 16px;
        background-color: ${props => props.theme.background.secondaryColor};
    }

}
`