import { Button } from 'antd';


function BotãoAnt({ texto }: { texto: string }): React.ReactElement {
  return (
    <Button danger>{texto}</Button>
  );
}


export default BotãoAnt;