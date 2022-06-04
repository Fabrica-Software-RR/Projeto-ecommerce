import {
  HeartOutlined,
  ShoppingCartOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons'
import { Badge } from 'antd'
import { IImage } from '../../Servicos/Interfaces/Interface'
import { Cabecalho, Logo } from './Style'

function MenuHerder({ logo, texto, placeholder, loading }: IImage) {
  function carrinho() {
    console.log('Carrinho')
  }
  function onSearch(value: any) {
    console.log(value)
  }
  return (
    <Cabecalho>
      <Logo style={{ backgroundImage: `url(${logo})` }} />
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <WhatsAppOutlined
          style={{ display:'flex', fontSize: '24px', color: 'black', cursor: 'pointer', margin : '0 10px' }}
        />
        <Badge count={5}>
          <HeartOutlined
            style={{ display:'flex',fontSize: '24px', color: 'black', cursor: 'pointer',margin : '0 10px' }}
          />
        </Badge>
        <Badge count={5}>
          <ShoppingCartOutlined
            onClick={() => {
              carrinho()
            }}
            style={{ display:'flex',fontSize: '24px', color: 'black', cursor: 'pointer',margin : '0 10px' }}
          />
        </Badge>
      </div>
    </Cabecalho>
  )
}

export default MenuHerder
