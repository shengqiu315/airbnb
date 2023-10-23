
import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { PaginationWarpper } from './style'
import classNames from 'classnames'
import { changeOffset, fetchMoreListData } from '@/store/module/more/createActions'
const index = memo((props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const { total, size } = useSelector((state) => ({
        total: state.moreStore.total,
        size: state.moreStore.size,
    }))
    const dispath = useDispatch()


    const pages = Math.ceil(total / size)
    const getPageNum = () => {
        const _page = []
        for (let i = 0; i < pages; i++) {
            _page.push(i + 1)
        }
        return _page
    }

    function clickItemHandle(index) {
        setActiveIndex(index)
    }
    function handleClick(val = "left") {
        if (val === 'left') {
            if (activeIndex === 0) return setActiveIndex(0)
            const index = activeIndex - 1
            setActiveIndex(index)

        } else {
            if (activeIndex === getPageNum().length - 1) return setActiveIndex(getPageNum().length - 1)
            const index = activeIndex + 1
            setActiveIndex(index)
        }
    }
    useEffect(() => {
        dispath(changeOffset(activeIndex))
        dispath(fetchMoreListData())
    }, [activeIndex, dispath])

    return (
        <PaginationWarpper>
            <div className="box left" onClick={e => handleClick('left')} ><IconArrowLeft ></IconArrowLeft></div>
            {
                getPageNum()?.map((item, index) => {
                    return <span key={item} className={classNames('box item-container', { active: activeIndex === index })} onClick={e => clickItemHandle(index)}>{item}</span>
                })
            }
            <div className="box right" onClick={e => handleClick('right')}><IconArrowRight></IconArrowRight></div>
        </PaginationWarpper>
    )
})



export default index