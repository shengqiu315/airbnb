import React, { memo, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { RightWarpper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
const HeaderRight = memo(() => {
    const [showMenuState, setShowMenuState] = useState(false)
    useEffect(() => {
        function clickWindowHandle(e) {
            e.stopPropagation();
            setShowMenuState(false)
        }
        window.addEventListener('click', clickWindowHandle)
        return () => {
            window.removeEventListener('click', clickWindowHandle)
        }
    }, [])

    function clickProfileHandle(e) {
        e.stopPropagation();
        setShowMenuState(true)

    }
    return (
        <RightWarpper>
            <div className="handle-bar">
                <div className="item">登录</div>
                <div className="item">注册</div>
                <div className="item icon-global">
                    <IconGlobal />
                </div>
            </div>
            <div className="profile" onClick={e => clickProfileHandle(e)}>
                <IconMenu />
                <IconAvatar />
                {
                    (<CSSTransition in={showMenuState} unmountOnExit={true} classNames="q" timeout={350} >
                        <div className='menu'>
                            <div className="item">个人中心</div>
                            <div className="item">购物车</div>
                            <div className="item">客服</div>
                            <div className="item">操作手册</div>
                            <div className="item">帮助</div>
                        </div>
                    </CSSTransition>)
                }

            </div>
        </RightWarpper >
    )
})

export default HeaderRight