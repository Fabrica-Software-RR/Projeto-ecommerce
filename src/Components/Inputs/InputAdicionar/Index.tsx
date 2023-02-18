import { Button, Space } from 'antd';
import { ReactElement, useState } from 'react';
import { InputForm } from '../../../Servicos/Interfaces/Interface';
import BotaoAnt from '../../Botoes';
import InputAnt from '../InputTexto/Index';

function InputForm({
  key,
  onChange,
  adicionarQuantidade,
}: InputForm): ReactElement {
  const [value, setValue] = useState(0);

  function aumentarValor() {
    setValue(value + 1);
  }

  function diminuirValor() {
    if (value > 0) setValue(value - 1);
  }

  return (
    <div>
      <Space align="center">
        <div>
          <Button onClick={diminuirValor} key={key}>
            -
          </Button>
          <InputAnt onChange={onChange} value={value} key={key} />
          <Button onClick={aumentarValor} key={key}>
            +
          </Button>
        </div>
        <BotaoAnt
          onClick={() => adicionarQuantidade}
          texto="Adicionar"
          key={key}
        />
      </Space>
    </div>
  );
}

export default InputForm;
