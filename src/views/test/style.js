import { styled } from "styled-components";

export const TestWarpper = styled.div`
width: 350px;
height: 200px;
position: relative;
.swiper{
    width: 100%;
    height: 100%;
}
.left,.right{
    position: absolute;
    top: 50%;
    transform:translateY(-50%) ;
    width: 32px;
    height: 32px;
    background-color: #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;align-items:center;
    color: red;
    cursor: pointer;
}
.left{
    left: 0;
}

.right{
    right: 0;
}
.item{
    background-color: #f0f0f0;
    width: 100%;
    height: 100%;
}
.dot{
    position: absolute;
    left: 50%;
    overflow: hidden;
    width: 30%;
    background-color: #fff;
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
        width: 12px;
        height: 12px;
        transition: all 150ms ease;
        border: 1px solid #ccc;
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