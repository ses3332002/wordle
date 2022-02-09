import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from 'stores'
import LanguageSelector from 'components/LanguageSelector'
import Settings from 'components/Settings'
import Menu from 'components/Menu'
import { Col, Row, Typography } from 'antd'
import styles from './styles.module.scss'

function Header(): React.ReactElement {
  const { settingsStore } = useStore()
  const { t } = useTranslation()
  return (
    <header className={styles.header}>
      <Row justify="space-between" align="middle">
        <Col>
          <Menu />
        </Col>
        <Col>
          <Typography.Title style={{ margin: 0 }} level={3}>
            {t('game')} Wordle
          </Typography.Title>
        </Col>
        <Col className={styles.menu}>
          <LanguageSelector />
        </Col>
      </Row>
      {settingsStore.settings.settingsIsShown ? <Settings /> : null}
    </header>
  )
}

export default observer(Header)
