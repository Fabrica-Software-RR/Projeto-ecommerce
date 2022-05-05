import Image, { StaticImageData } from 'next/image'
import { Divider } from 'antd'
import { Input, Space } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Buscar, Cabecalho, Carrinho, Logo } from './Style'
import Modal from '../../Modal/Index'
import { useState } from 'react'

interface IImage {
  logo: StaticImageData
  texto: string
  placeholder: string
  loading?: boolean
}
const { Search } = Input

function MenuHerder({ logo, texto, placeholder, loading }: IImage) {
  const [search, setSearch] = useState('')
  const [visible, setVisible] = useState(false)

  function onSearch(value: any) {
    console.log(value)
  }

  function carrinho() {
    setVisible(true)
  }

  function fecharModal() {
    setVisible(false)
  }

  return (
    <Cabecalho>
      <Logo>
        <Image src={logo} alt="Logo" width={300} height={200} />
      </Logo>
      <Divider type="vertical" />
      <Buscar>
        <Space direction="vertical">
          <Search
            placeholder={placeholder}
            onSearch={onSearch}
            size="large"
            style={{ width: '600px' }}
            allowClear
            bordered={true}
            loading={loading}
            enterButton={'Procurar'}
          />
        </Space>
      </Buscar>
      <Divider type="vertical" />
      <Carrinho>
        <ShoppingCartOutlined
          onClick={() => {
            carrinho()
          }}
          style={{ fontSize: '36px', color: 'white', cursor: 'pointer' }}
        />
      </Carrinho>

      <Modal
        visivel={visible}
        onClose={fecharModal}
        title={'Estes são os itens que você adicionou no carrinho :'}
        onOk={fecharModal}
        texto={'Estes são os itens que você adicionou no carrinho :'}
      />
    </Cabecalho>
  )
}

export default MenuHerder
