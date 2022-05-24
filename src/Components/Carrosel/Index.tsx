/* eslint-disable @next/next/no-img-element */
import { Cards } from './Style'
import { StyledCarousel, ContainerCarrosel } from './Style'
import {listaImagens} from '../ListaTeste/Lista'

function CarroselDeCards(): JSX.Element {

  return (
    <ContainerCarrosel>
      <StyledCarousel autoplay>
        {listaImagens .map((imagem )  => (
            <Cards key={imagem.id}>
              <img
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
