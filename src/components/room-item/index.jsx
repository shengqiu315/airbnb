import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { RoomItemWarpper, } from './style'
import ItemContainer from './c-cpns/Item/index'

const index = memo((props) => {
    const { roomList, roomItemWidth } = props
    return (
        <RoomItemWarpper>
            {roomList?.map(item => {
                return <ItemContainer roomInfo={item} key={item?.id} roomItemWidth={roomItemWidth} />
            })}
        </RoomItemWarpper>
    )
})

index.propTypes = {
    roomList: PropTypes.array,
    roomItemWidth: PropTypes.string
}

export default index