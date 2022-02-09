import React from 'react'
import { Select } from 'antd'
import { useStore } from 'stores'
import { useTranslation } from 'react-i18next'

import enIcon from '../../sources/images/en_icon.png'
import heIcon from '../../sources/images/he_icon.png'
import ruIcon from '../../sources/images/ru_icon.png'
import ukIcon from '../../sources/images/uk_icon.png'

function LanguageSelector(): React.ReactElement {
  const { localeStore } = useStore()
  const { locale } = localeStore

  const { t } = useTranslation()

  function languageSelectHandler(value: any) {
    localeStore.setLocale(value)
  }
  const { Option } = Select

  return (
    <Select
      key="lang"
      showArrow={false}
      defaultValue={locale.name}
      bordered={false}
      onChange={value => languageSelectHandler(value)}
    >
      <Option key={1} value="en">
        <img src={enIcon} alt={t('english_selector')} />
      </Option>
      <Option key={2} value="he">
        <img src={heIcon} alt={t('hebrew_selector')} />
      </Option>
      <Option key={3} value="ru">
        <img src={ruIcon} alt={t('russian_selector')} />
      </Option>
      <Option key={4} value="uk">
        <img src={ukIcon} alt={t('ukranian_selector')} />
      </Option>
    </Select>
  )
}

export default LanguageSelector
