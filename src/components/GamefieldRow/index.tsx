import React from 'react'
import { Card, Row, Col, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

function Keyboard(props: any): React.ReactElement {
  const { Title, Text } = Typography
  const { t } = useTranslation()
  return (
    <div className={styles.keyboard}>
      <Row align="middle" justify="space-between"></Row>
    </div>
  )
}

export default Keyboard
