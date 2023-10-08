import { memo } from "react"
import PropTypes from 'prop-types'

import { ItemWarpper } from './style'
import Rating from '@mui/material/Rating';

const ItemContainer = memo((props) => {
    const { roomInfo, roomItemWidth = '25%' } = props
    return (
        <ItemWarpper width={roomItemWidth}>
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

ItemContainer.propTypes = {
    roomInfo: PropTypes.object.isRequired,
    roomItemWidth: PropTypes.string
}

export default ItemContainer