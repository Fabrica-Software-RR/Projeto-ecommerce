import { Button, Space } from 'antd'
import { ReactElement } from 'react'
import { InputForm } from '../../../Servicos/Interfaces/Interface'
import BotaoAnt from '../../Botoes'
import InputAnt from '../InputTexto/Index'

function InputForm({
  key,
  onChange,
  value,
  diminuirValor,
  aumentarValor,
  adicionarQuantidade,
}: InputForm): ReactElement {
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
  )
}

export default InputForm
