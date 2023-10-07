import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeaderWarpper } from './style'
const SectionHeader = memo((props) => {
    const { title, subTitle } = props
    return (
        <SectionHeaderWarpper >
            <div className="title">{title}</div>
            {subTitle && <div className="subtitle">{subTitle}</div>}
        </SectionHeaderWarpper>
    )
})

SectionHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default SectionHeader