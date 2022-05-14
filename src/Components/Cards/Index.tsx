import { Cards } from './Style'
import Image from 'next/image'
import { StyledCarousel, ContainerCarrosel } from './Style'
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
                loading="lazy"
                width={900}
                height={400}
              />
            </Cards>
          ))}
      </StyledCarousel>
    </ContainerCarrosel>
  )
}

export default CarroselDeCards
