import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWarpper } from './style'
import classNames from 'classnames'
const index = memo((props) => {
    const { tabNames, activeNameFn } = props

    const [currentName, setCurrentName] = useState(tabNames[0])

    function clickTabsItemHandle(item, index) {
        setCurrentName(item)
        activeNameFn(item, index)
    }

    return (
        <SectionTabsWarpper>
            {tabNames?.map((item, index) => {
                return <div key={index} className={classNames('item', { active: currentName === item })} onClick={e => clickTabsItemHandle(item, index)}>{item}</div>
            })}

        </SectionTabsWarpper>
    )
})

index.propTypes = {
    tabNames: PropTypes.array,
    activeNameFn: PropTypes.func
}

export default index