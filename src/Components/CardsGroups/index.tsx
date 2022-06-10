import { ReactElement, useEffect, useState } from 'react'
import { ContainerCard, ContainerCards } from './Style'
import { listaImagens } from '../ListaTeste/Lista'
import { StateQuantidade } from '../../Servicos/Interfaces/Interface'
import { Cards } from '../Cards'

const listaDeCategorias = [
  'Categoria 1',
  'Categoria 2',
  'Categoria 3',
  'Categoria 4',
]
function CardExibicao(): ReactElement {
  const [item, setItem] = useState<StateQuantidade>({
    id: 0,
    quantidade: 0,
  })

  function aumentarValor(item: StateQuantidade) {
    setItem({ id: item.id, quantidade: item.quantidade + 1 })
  }

  function diminuirValor(item: StateQuantidade) {
    setItem({ id: item.id, quantidade: item.quantidade - 1 })
  }

  return (
    <ContainerCards>
      {listaDeCategorias.map((categoria) => (
        <>
          <h1
            style={{
              background: 'white',
              fontSize: '24px',
              width: '100%',
              margin: '',
            }}
          >
            {categoria}
          </h1>
          <ContainerCard key={categoria}>
            {listaImagens.map((imagem) =>
              imagem.categoria === categoria ? (
                <Cards item={item} imagem={imagem} />
              ) : null
            )}
          </ContainerCard>
        </>
      ))}
    </ContainerCards>
  )
}

export default CardExibicao
