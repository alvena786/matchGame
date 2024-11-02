import './index.css'

const TabItem = props => {
  const {tabDetails, onClickingTab, activeTabId} = props
  const {tabId, displayText} = tabDetails

  const onClicking = () => {
    onClickingTab(tabId)
  }
  const isActive = tabId === activeTabId
  return (
    <li className="li-tabItems">
      <button className={isActive ? 'tab-itemm' : 'tab'} onClick={onClicking}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
