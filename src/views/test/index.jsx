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
    const onChange = (index) => {
        setActiveIndex(index)
    };
    function clickIconHandle(val) {
        if (val === 'left') {
            carouselRef.current.prev()
        }
        else {
            carouselRef.current.next()
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
            <Carousel className='swiper' dots={false} ref={carouselRef} afterChange={onChange}>
                {
                    data.map(item => {
                        return <div className='item'>{item}</div>
                    })
                }
            </Carousel>
            <div className="dot">
                <div className='dot-container' ref={dotRef}>
                    {
                        data.map((item, index) => {
                            return <div className={classNames('dot-item', { active: activeIndex === index })} ></div>
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