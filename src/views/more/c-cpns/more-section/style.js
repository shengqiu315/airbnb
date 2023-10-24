import { styled } from "styled-components";

export const MoreSectionWarpper = styled.div`
position: relative;
overflow: hidden;
margin: 0 8px;
min-height: 400px;
.overlay{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,.45);
    display: flex;
    justify-content:center ;
    align-items: center;
    font-size:24px;
    color: #fff;
    letter-spacing: 8px;
    
    /* 设置动画 */
@keyframes jump {
  0% {
    transform: translateY(0px);
  }

  20% {
    transform: translateY(-16px);
  }

  40%,
  100% {
    transform: translateY(0px);
  }
}
.text-jump span {
  letter-spacing: 8px;
  /* 设置行内块元素 */
  display: inline-block;
  position: relative;
  top: 24px;
  /* 添加动画 */
  animation: jump 1.5s ease-in-out infinite;
  /* 利用变量动态计算动画延迟时间 */
  animation-delay: calc(0.1s * var(--i));
}
}

`