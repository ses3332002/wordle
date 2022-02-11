import React from 'react'
import { observer } from 'mobx-react-lite'
import { Typography, Button } from 'antd'
import { useTranslation } from 'react-i18next'

import { useStore } from 'stores'

import styles from './styles.module.scss'

function GameField(): React.ReactElement {
  const { settingsStore } = useStore()
  const { t } = useTranslation()

  return (
    <div className={styles.welcome}>
      {settingsStore.settings.isWon ? (
        <>
          <Typography.Title level={4}>
            {t('won_text')} {settingsStore.settings.activeRow}
          </Typography.Title>
          <Typography.Title level={4}>{t('want_more')}</Typography.Title>
        </>
      ) : null}
      {settingsStore.settings.isLose ? (
        <>
          <Typography.Title level={4}>{t('lose')}</Typography.Title>
          <Typography.Title level={4}>{t('want_more')}</Typography.Title>
        </>
      ) : null}
      <Button
        size="large"
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={settingsStore.startGame}
      >
        {t('start')}
      </Button>
      <Typography.Title level={4}>{t('welcome_text')}</Typography.Title>
    </div>
  )
}

export default observer(GameField)
