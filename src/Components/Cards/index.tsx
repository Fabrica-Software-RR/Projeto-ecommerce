import InputForm from "../Inputs/InputAdcionar/Index";
import { Card } from "antd";
import { CardAnt } from "./Style";
const { Meta } = Card

export function Cards({imagem,item } : {imagem: any,item: any}) {

  return(
    <CardAnt
    key={imagem.id}
    style={{ width: 300, margin: '20px' }}
    cover={
      // eslint-disable-next-line @next/next/no-img-element
      <img   alt="example" src={imagem.url as string} />
    }
    actions={[
      <InputForm
        diminuirValor={() =>console.log('diminuir')}
        aumentarValor={() => console.log('aumentar')}
        adicionarQuantidade={() => {}}
        value={item.quantidade}
        key={imagem.id}
        onChange={(e) => console.log(e.target.value)}
      />,
    ]}
  >
    {' '}
    <Meta
      title={imagem.title}
      description={<h2>{imagem.description}</h2>}
    />
  </CardAnt>
  )
}