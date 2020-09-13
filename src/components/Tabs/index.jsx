import React from 'react'
import { useLocation } from 'react-router-dom'

import { useTabs } from '../../store/tabs'
import { CloseIcon } from '../../assets/icons'
import { StyledTabs, StyledTab } from './styled'

const Tabs = () => {
   const location = useLocation()
   const { tabs, switchTab, removeTab } = useTabs()
   return (
      <StyledTabs  >
         {tabs.map((tab, index) => (
            <StyledTab
               key={tab.title}
               onClick={() => switchTab(tab.path)}
               active={tab.path === location.pathname}
            >
               <span title={tab.title}>{tab.title}</span>
               {tab.path === location.pathname && (
                  <div
                     role="button"
                     tabIndex={0}
                     title="Close Tab"
                     onClick={e => removeTab(e, { tab, index })}
                     onKeyPress={e =>
                        e.charCode === 32 && removeTab(e, { tab, index })
                     }
                  >
                     <CloseIcon color="#000" size="20" />
                  </div>
               )}
            </StyledTab>
         ))}
      </StyledTabs>
   )
}

export default Tabs
