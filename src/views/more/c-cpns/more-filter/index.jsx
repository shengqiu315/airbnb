import React, { memo, useState } from 'react'
import FilterData from '@/assets/data/filter_data.json'
import { FilterWarpper } from './style'
import classNames from 'classnames'

const MoreFilter = memo((props) => {
    const [activeIndex, setActiveIndex] = useState([])
    function itemClickHandle(item) {
        if (activeIndex.includes(item)) {
            const activeArray = [...activeIndex]
            activeArray.splice(activeArray.indexOf(item), 1)
            setActiveIndex(activeArray)
        } else {
            const activeArray = [...activeIndex]
            activeArray.push(item)
            setActiveIndex(activeArray)
        }
    }
    return (
        <FilterWarpper>
            {FilterData?.map((item, index) => {
                return <div className={classNames('item', { active: activeIndex.includes(item) })} key={item} onClick={e => itemClickHandle(item)} > {item}</div>
            })}
        </FilterWarpper >
    )
})

MoreFilter.propTypes = {}

export default MoreFilter