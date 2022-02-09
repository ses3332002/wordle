import { Select } from 'antd'
import LanguageSelector from 'components/LanguageSelector'
import React from 'react'

const { Option } = Select
function Header(): React.ReactElement {
  return (
    <header>
      <LanguageSelector />
      <Select key="test">
        <Option key={1}>1</Option>
        <Option key={2}>2</Option>
      </Select>
    </header>
  )
}

export default Header
