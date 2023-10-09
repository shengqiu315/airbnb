import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { SectionFooterWarpper } from './style'


const index = memo((props) => {
    const { text, path } = props

    const navigate = useNavigate()
    function clickMoreHandle() {
        if (!path) return
        navigate(path)
    }
    return (
        <SectionFooterWarpper>
            <span className='show-more' onClick={clickMoreHandle}>
                <span className={classNames('baseColor', { textColor: text })}>显示更多</span>
                {text && <span className='textColor'>{text}</span>}
                <span className={classNames('baseColor', { textColor: text })}>{'>'}</span>
            </span>
        </SectionFooterWarpper>
    )
})

index.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string,
}

index.defaultProps = {

}

export default index