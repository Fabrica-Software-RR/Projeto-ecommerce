import { Card, Avatar, Space } from 'antd'
import {} from '@ant-design/icons'
import { ReactElement, useState } from 'react'
import { CardAnt, ContainerCard, ContainerCards } from './Style'
import { listaImagens } from '../ListaTeste/Lista'
import InputForm from '../Inputs/InputAdcionar/Index'
const { Meta } = Card
const listaDeCategorias = [
  'Categoria 1',
  'Categoria 2',
  'Categoria 3',
  'Categoria 4',
]
function CardExibicao(): ReactElement {
  const [quantidade, setQuantidade] = useState<string>()

  function handleValorInput(valor: string): void {
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
                    <InputForm
                      onClick={() => {}}
                      value={quantidade as string}
                      key={imagem.id}
                      onChange={() => handleValorInput}
                    />,
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
