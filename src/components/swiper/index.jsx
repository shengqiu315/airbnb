import PropTypes from 'prop-types'
import React, { memo, useRef, useState, useEffect } from 'react'
import { Carousel } from 'antd';
import { TestWarpper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import classNames from 'classnames';
const Test = memo((props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const { data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] } = props
    const carouselRef = useRef()
    const dotRef = useRef()
    function clickIconHandle(val) {
        if (val === 'left') {
            carouselRef.current.prev()
            let index = activeIndex - 1
            if (index < 0) index = data.length - 1
            setActiveIndex(index)
        }
        else {
            carouselRef.current.next()
            let index = activeIndex + 1
            if (index > data.length - 1) index = 0
            setActiveIndex(index)
        }
    }

    useEffect(() => {
        let scrollWidth = dotRef.current.children[activeIndex].offsetLeft + dotRef.current.children[activeIndex].clientWidth * 0.5 - dotRef.current.clientWidth * 0.5
        if (scrollWidth <= 0) scrollWidth = 0
        if (scrollWidth >= dotRef.current.scrollWidth - dotRef.current.clientWidth) scrollWidth = dotRef.current.scrollWidth - dotRef.current.clientWidth
        console.log(dotRef.current.scrollWidth - dotRef.current.clientWidth, scrollWidth)
        dotRef.current.style.transform = `translateX(-${scrollWidth}px)`
    }, [activeIndex])

    return (
        <TestWarpper>
            <div className="left" onClick={e => clickIconHandle('left')}>
                <IconArrowLeft></IconArrowLeft>
            </div>
            <Carousel className='swiper' dots={false} ref={carouselRef} >
                {
                    data.map(item => {
                        return <img key={item} className='item' src={item} alt=''></img>
                    })
                }
            </Carousel>
            <div className="dot">
                <div className='dot-container' ref={dotRef}>
                    {
                        data.map((item, index) => {
                            return <div key={index} className={classNames('dot-item', { active: activeIndex === index })} ></div>
                        })
                    }
                </div>
            </div>
            <div className="right" onClick={e => clickIconHandle('right')}>
                <IconArrowRight></IconArrowRight>
            </div>
        </TestWarpper>
    )
})

Test.propTypes = {}

export default Test