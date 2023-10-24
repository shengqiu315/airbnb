
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
// import { fetchMoreListData } from '@/store/module/more/createActions'
import RoomList from "@/components/room-item"
import Pagination from '../more-pagination/index'
import { MoreSectionWarpper } from './style'
const MoreSection = memo((props) => {
    const { moreList, isLoading } = useSelector((state) => ({
        moreList: state.moreStore.moreList,
        isLoading: state.moreStore.isLoading
    }))

    return (
        <MoreSectionWarpper>
            <RoomList roomList={moreList} roomItemWidth="20%"></RoomList>
            <Pagination></Pagination>
            {isLoading && <div className="overlay">
                <div className="text-jump">
                    <span style={{ "--i": 1 }}>数</span>
                    <span style={{ "--i": 2 }}>据</span>
                    <span style={{ "--i": 3 }}>加</span>
                    <span style={{ "--i": 4 }}>载</span>
                    <span style={{ "--i": 5 }}>中</span>
                    <span style={{ "--i": 6 }}>.</span>
                    <span style={{ "--i": 7 }}>.</span>
                    <span style={{ "--i": 8 }}>.</span>
                </div>
            </div>}
        </MoreSectionWarpper >
    )
})

MoreSection.propTypes = {}

export default MoreSection