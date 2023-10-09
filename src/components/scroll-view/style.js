import { styled } from "styled-components";

export const ScrollViewWarpper = styled.div`
    position: relative;
    width: 100%;
    .btn{
        position: absolute;
        top: 50%;
        transform: translateY(-60%);
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #eee;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #fff;
        cursor: pointer;
        z-index: 9;
        ${props=>props.theme.mixin.boxShadow}
    }
    .left-btn{
        left: -12px;
    }
    .right-btn{
        right: -12px;
    }

    .scroll-container{
        overflow: hidden;
    }

    .scroll-content{
        display: flex;
        width: 100%;
        transition: transform 280ms ease;
    }
`