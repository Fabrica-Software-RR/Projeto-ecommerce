import InputForm from "../Inputs/InputAdicionar/Index";
import { Card } from "antd";
import { CardAnt } from "./Style";
import { ICards } from "../../Servicos/Interfaces/Interface";
const { Meta } = Card


export function Cards({ aumentarValor, diminuirValor, imagem, item }: ICards) {


  return (
    <CardAnt
      key={imagem.id}
      style={{ width: 300, margin: '20px' }}
      cover={
        // eslint-disable-next-line @next/next/no-img-element
        <img alt="example" src={imagem.url as string} />
      }
      actions={[
        <InputForm
          diminuirValor={() => diminuirValor()}
          aumentarValor={() => aumentarValor()}
          adicionarQuantidade={() => { }}
          value={item}
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