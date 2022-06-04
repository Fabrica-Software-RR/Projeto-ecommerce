import { Space } from 'antd'
import { ReactElement, useState } from 'react'
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
  const [quantidade, setQuantidade] = useState<string>();

  return (
    <div>
      <Space align='center'>
      <div>
      <BotaoAnt onClick={diminuirValor} texto="-" key={key}/>
      <InputAnt onChange={onChange} value={value} key={key} />
      <BotaoAnt texto="+" onClick={aumentarValor} key={key} />
      </div>
   
      <BotaoAnt onClick={adicionarQuantidade} texto="Adicionar" key={key} />
      </Space>
    </div>
  )
}

export default InputForm
