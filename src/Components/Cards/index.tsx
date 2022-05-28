import { Card, Avatar } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { ReactElement } from 'react'
import { CardAnt } from './Style'

const { Meta } = Card

function CardExibicao(): ReactElement {
  return (
    <CardAnt
      honorable
      style={{ width: 300 }}
      cover={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    />
  )
}

export default CardExibicao
