import { styled } from 'styled-components'
export const ItemWarpper = styled.div`
    width: ${props => props.width};
    padding: 8px;
    border-radius: 5px;
    flex-shrink: 0;
    /* ${props => props.theme.mixin.boxShadow} */
    
    .photo{
        width: 100%;
        height: 160px;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .room-intro{
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;
        color: #767676;
    }

    .title{
        ${props => props.theme.mixin.ellipsisLine2}
    }

    .price{
        margin: 8px 0;
    }
    .bottom{
        font-weight: 600;
        font-size: 12px;
        .custom-tating>.MuiRating-decimal{
        margin: 0 -1px;
        }
    }

`