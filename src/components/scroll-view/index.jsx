import React, { memo, useEffect, useRef, useState } from 'react'

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { ScrollViewWarpper } from './style'

const ScrollView = memo((props) => {

    const [showLeftBtn, setShowLeftBtn] = useState(false)
    const [showRightBtn, setShowRightBtn] = useState(false)
    const [index, setIndex] = useState(0)

    const elRef = useRef()
    const distance = useRef()

    useEffect(() => {
        // 获取元素宽度
        const clientWidth = elRef.current.clientWidth
        // 获取元素可滚动的宽度
        const scrollWidth = elRef.current.scrollWidth
        // 计算距离
        const totalDistance = scrollWidth - clientWidth

        distance.current = totalDistance
        setShowRightBtn(totalDistance > 0)
    }, [])

    function clickBtnHandle(isLeft = false) {
        const _index = isLeft ? index - 1 : index + 1
        const currentScrollElOffset = elRef.current.children[_index].offsetLeft
        elRef.current.style.transform = `translate(-${currentScrollElOffset}px)`
        setIndex(_index)
        setShowRightBtn(distance.current > currentScrollElOffset)
        setShowLeftBtn(currentScrollElOffset > 0)
    }
    return (
        <ScrollViewWarpper>
            {
                showLeftBtn && (<div className="left-btn btn" onClick={e => clickBtnHandle(true)}>
                    <IconArrowLeft />
                </div>)
            }

            {
                showRightBtn && (<div className="right-btn btn" onClick={e => clickBtnHandle(false)}>
                    <IconArrowRight />
                </div>)
            }

            <div className="scroll-container">
                <div className="scroll-content" ref={elRef}>
                    {props.children}
                </div>
            </div>

        </ScrollViewWarpper>
    )
})


export default ScrollView