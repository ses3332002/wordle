import React from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Modal, Row, Switch } from 'antd'

import { useStore } from 'stores'

function Settings(): React.ReactElement {
  const { settingsStore } = useStore()
  const { t } = useTranslation()

  function changeHandler(value: boolean): void {
    settingsStore.setDarkScheme(value)
  }

  return (
    <div>
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
