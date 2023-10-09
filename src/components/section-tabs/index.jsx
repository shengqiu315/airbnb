import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { SectionTabsWarpper } from './style'
import ScrollView from '@/components/scroll-view'

const index = memo((props) => {
    const { tabNames, activeNameFn } = props

    const [currentName, setCurrentName] = useState(tabNames[0])

    function clickTabsItemHandle(item, index) {
        setCurrentName(item)
        activeNameFn(item, index)
    }

    return (
        <SectionTabsWarpper>
            <ScrollView>
                {tabNames?.map((item, index) => {
                    return <div key={index} className={classNames('item', { active: currentName === item })} onClick={e => clickTabsItemHandle(item, index)}>{item}</div>
                })}
            </ScrollView>
        </SectionTabsWarpper>
    )
})

index.propTypes = {
    tabNames: PropTypes.array,
    activeNameFn: PropTypes.func
}

export default index