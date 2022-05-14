//import { Layout } from 'antd';
import { Container } from '../Container/Style'
import  MenuHerder  from '../Header/Index'
import logo from '../../../public/Fotos/rei-png.png'
import SubMenu from './SubMenu/Index'
import CarroselDeCards from '../Cards/Index'
import {listaBotoes } from '../ListaTeste/Lista'



export default function Esqueleto() {


  return (
    <Container>
      <MenuHerder
        logo={logo}
        texto={'REI DAS CAPINHAS'}
        placeholder={'Procure seu produto'}
      />
      <SubMenu listaBotoes={listaBotoes}/>
      <CarroselDeCards />
    </Container>
  )
}
