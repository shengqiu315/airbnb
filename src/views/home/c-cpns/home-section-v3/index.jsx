import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import { SectionV3Wrapper } from './style'
import RoomItemContent from '@/components/room-item/c-cpns/Item/index'
import ScrollView from '@/components/scroll-view/index'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItemContent roomInfo={item} itemWidth="20%" key={item.id} />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter text="plus" />
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3