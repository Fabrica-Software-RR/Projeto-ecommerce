import { Card, Avatar } from 'antd'
import {} from '@ant-design/icons'
import { ReactElement, useState } from 'react'
import { CardAnt, ContainerCard, ContainerCards } from './Style'
import { listaImagens } from '../ListaTeste/Lista'
import InputNumberAnt from '../Inputs/InputNumber'
import BotãoAnt from '../Botoes'
const { Meta } = Card
const listaDeCategorias = [
  'Categoria 1',
  'Categoria 2',
  'Categoria 3',
  'Categoria 4',
]
function CardExibicao(): ReactElement {
  const [quantidade, setQuantidade] = useState<number>()

  function handleValorInput(valor: number) {
    setQuantidade(valor)
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
                <CardAnt
                  key={imagem.id}
                  style={{ width: 300, margin: '20px' }}
                  cover={
                    // eslint-disable-next-line @next/next/no-img-element
                    <img alt="example" src={imagem.url as string} />
                  }
                  actions={[
                    <InputNumberAnt
                      pegarValor={() => handleValorInput}
                      value={quantidade as number}
                      key={imagem.id}
                    />,
                    <BotãoAnt texto='Adicionar' key={imagem.id} />
                  ]}
                >
                  {' '}
                  <Meta
                    title={imagem.title}
                    description={<h2>{imagem.description}</h2>}
                  />
                </CardAnt>
              ) : null
            )}
          </ContainerCard>
        </>
      ))}
    </ContainerCards>
  )
}

export default CardExibicao
