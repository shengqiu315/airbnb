import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchMoreListData } from '@/store/module/more/createActions'
import RoomList from "@/components/room-item"
import Pagination from '../more-pagination/index'
import { MoreSectionWarpper } from './style'
const MoreSection = memo((props) => {
    const dispath = useDispatch()
    const { moreList } = useSelector((state) => ({
        moreList: state.moreStore.moreList
    }))
    console.log(moreList)

    return (
        <MoreSectionWarpper>
            <RoomList roomList={moreList} roomItemWidth="20%"></RoomList>
            <Pagination></Pagination>
        </MoreSectionWarpper>
    )
})

MoreSection.propTypes = {}

export default MoreSection