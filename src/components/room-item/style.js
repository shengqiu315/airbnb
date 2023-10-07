import { styled } from "styled-components";

export const RoomItemWarpper = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 -8px;
`

export const ItemWarpper = styled.div`
    width: 25%;
    padding: 8px;
    border-radius: 5px;
    ${props => props.theme.mixin.boxShadow}
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