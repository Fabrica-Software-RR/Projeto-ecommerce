/* eslint-disable @next/next/no-img-element */
import { CardCarrosel, ContainerCarrosel, ImageCarrosel } from './Style';
import { StyledCarousel } from './Style';
import { listaImagens } from '../ListaTeste/Lista';

function CarroselDeCards(): JSX.Element {
  return (
    <ContainerCarrosel>
      <StyledCarousel autoplay>
        {listaImagens.map((imagem) => (
          <CardCarrosel key={imagem.id}>
            <ImageCarrosel alt={imagem.title} src={imagem.url as string} />
          </CardCarrosel>
        ))}
      </StyledCarousel>
    </ContainerCarrosel>
  );
}

export default CarroselDeCards;
