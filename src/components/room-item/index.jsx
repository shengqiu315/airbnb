import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWarpper, ItemWarpper } from './style'
import Rating from '@mui/material/Rating';

const ItemContainer = memo((props) => {
    const { roomInfo } = props
    return (
        <ItemWarpper>
            <div className="photo">
                <img src={roomInfo?.picture_url} alt="" />
            </div>
            <p className='room-intro'>{roomInfo?.verify_info?.messages?.join('·')}</p>
            <h3 className='title'>{roomInfo?.name}</h3>
            {roomInfo?.price_format && <p className='price'>{roomInfo.price_format}/晚</p>}
            <div className='bottom'>
                <Rating name="read-only" value={roomInfo?.star_rating} readOnly sx={{ fontSize: '12px', color: '#00848A' }} precision={0.1} className='custom-tating' />
                <span>{roomInfo?.reviews_count}</span>
                {roomInfo?.bottom_info?.content && (<span>·{roomInfo.bottom_info.content}</span>)}
            </div>
        </ItemWarpper>
    )
})



const index = memo((props) => {
    const { roomList } = props
    return (
        <RoomItemWarpper>
            {roomList?.map(item => {
                return <ItemContainer roomInfo={item} key={item?.id} />
            })}
        </RoomItemWarpper>
    )
})

index.propTypes = {
    roomList: PropTypes.array
}

export default index