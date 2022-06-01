/* eslint-disable @next/next/no-img-element */
import { CardCarrosel, ImageCarrosel } from './Style'
import { StyledCarousel, ContainerCarrosel } from './Style'
import { listaImagens } from '../ListaTeste/Lista'

function CarroselDeCards(): JSX.Element {
  return (
    <StyledCarousel autoplay>
      {listaImagens.map((imagem) => (
        <CardCarrosel
          key={imagem.id}
        >
          <ImageCarrosel alt={imagem.title} src={imagem.url as string} />
        </CardCarrosel>
      ))}
    </StyledCarousel>
  )
}

export default CarroselDeCards
