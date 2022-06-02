import { Card, Avatar } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { ReactElement } from 'react'
import { CardAnt, ContainerCard, ContainerCards } from './Style'
import { listaImagens } from '../ListaTeste/Lista'
const { Meta } = Card
const listaDeCategorias = [
  'Categoria 1',
  'Categoria 2',
  'Categoria 3',
  'Categoria 4',
]
function CardExibicao(): ReactElement {
  return (
    <ContainerCards>
      {listaDeCategorias.map((categoria) => (
        <>
          <h1
            style={{
              background: 'white',
              fontSize: '24px',
              width: '100%',
              margin: '50px',
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
                    <ShoppingCartOutlined key="comprar" />,
                    <EllipsisOutlined key="ellipsis" />,
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
