import { ContainerCarrosel, StyledCarousel } from './Style'
import Image from 'next/image'
import {listaImagens} from '../ListaTeste/Lista'


function Carrosel(): JSX.Element {


  return (
    <ContainerCarrosel>
      <StyledCarousel autoplay>
        {listaImagens.map((image) => (
          <div key={image.id}>
            <Image src={image.url as string} alt={image.title} width={900} height={400} />
            <div className="carousel-caption"></div>
          </div>
        ))}
      </StyledCarousel>
    </ContainerCarrosel>
  )
}

export default Carrosel
