import { Cards } from './Style'
import Image from 'next/image'
import { StyledCarousel, ContainerCarrosel } from '../Carrosel/Style'
import {listaImagens} from '../ListaTeste/Lista'

function CarroselDeCards(): JSX.Element {

  return (
    <ContainerCarrosel>
      <StyledCarousel autoplay>
        {listaImagens .map((imagem )  => (
            <Cards key={imagem.id}>
              <Image
                src={imagem.url as string}
                alt={imagem.title}
                width={300}
                height={300}
              />
            </Cards>
          ))}
      </StyledCarousel>
    </ContainerCarrosel>
  )
}

export default CarroselDeCards
