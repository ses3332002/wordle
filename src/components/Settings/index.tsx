import React from 'react'
import { Col, Modal, Row, Switch } from 'antd'
import { useStore } from 'stores'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

function Settings(): React.ReactElement {
  const { settingsStore } = useStore()
  const { t } = useTranslation()

  function changeHandler(value: boolean) {
    settingsStore.setDarkScheme(value)
  }

  return (
    <div className={styles.settings}>
      <Modal
        title={t('settings')}
        style={{ top: 20 }}
        visible={settingsStore.settings.settingsIsShown}
        onOk={settingsStore.hideSettings}
        onCancel={settingsStore.hideSettings}
        footer={null}
        keyboard
      >
        <Row justify="space-between">
          <Col>{t('dark_mode')}</Col>
          <Col>
            <Switch
              defaultChecked={settingsStore.settings.darkScheme}
              onChange={value => changeHandler(value)}
            />
          </Col>
        </Row>
      </Modal>
    </div>
  )
}

export default Settings
