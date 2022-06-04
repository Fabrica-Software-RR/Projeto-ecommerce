import { Button } from 'antd';

interface ButtonProps {
  texto: string;
  onClick: () => void;
}

function BotaoAnt({ texto, onClick  }: ButtonProps): React.ReactElement {
  return (
    <Button
      onClick={() => {}}
    danger>{texto}</Button>
  );
}


export default BotaoAnt;