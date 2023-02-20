import InputForm from '../Inputs/InputAdicionar/Index';
import { Card, Input } from 'antd';
import { CardAnt } from './Style';
import { ICards } from '../../Servicos/Interfaces/Interface';
const { Meta } = Card;

export function Cards({ imagem, item, key }: ICards) {
  return (
    <>
      <CardAnt
        key={key}
        cover={
          // eslint-disable-next-line @next/next/no-img-element
          <img alt="example" src={imagem.url as string} />
        }
        actions={[
          <InputForm
            adicionarQuantidade={() => {}}
            value={item}
            key={key}
            onChange={(e) => console.log(e.target.value)}
          />,
        ]}
      >
        <Meta
          title={imagem.title}
          description={<h2>{imagem.description}</h2>}
        />
      </CardAnt>
    </>
  );
}
