import { Card, Avatar } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { ReactElement } from 'react';
import { CardAnt } from './Style';

const { Meta } = Card

function CardExibicao() : ReactElement {
  return <CardAnt
    // eslint-disable-next-line @next/next/no-img-element
    cover={<img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
  </CardAnt>;
}

export default CardExibicao;
