import { styled } from "styled-components";

export const SectionFooterWarpper = styled.div`
    padding: 8px 0;
    .show-more{
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
        .baseColor{
            color:#000;
        }
        .textColor{
            color:${props => props.theme.text.threeColor};
        }
       
    }
`