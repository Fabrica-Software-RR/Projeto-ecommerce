//import { Layout } from 'antd';
import S from '../../Container/Style'
import MenuHerder from '../../Header/Index'
import SubMenu from '../../SubMenu/Index'
import { listaBotoes } from '../../ListaTeste/Lista'
import CarroselDeCards from '../../Carrosel/Index'
import CardExibicao from '../../CardsGroups'

export default function Esqueleto() {
  const logo = '/Fotos/rei-png.png'

  return (
    <S.Container>
      <S.C>
        <MenuHerder
          logo={logo}
          texto={'REI DAS CAPINHAS'}
          placeholder={'Procure seu produto'}
        />
        <SubMenu listaBotoes={listaBotoes} />
      </S.C>
      <S.B>
        <CarroselDeCards />
      </S.B>
      <S.A>
        <CardExibicao />
      </S.A>
    </S.Container>
  )
}
