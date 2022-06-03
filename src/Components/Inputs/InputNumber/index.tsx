import { InputNumber } from 'antd'
import { ReactElement } from 'react'
import { IInputNumberAnt } from '../../../Servicos/Interfaces/Interface'

function InputNumberAnt({ pegarValor, value }: IInputNumberAnt): ReactElement {
  return (
    <InputNumber
      min={1}
      max={10}
      defaultValue={3}
      onChange={pegarValor}
      value={value}
    />
  )
}

export default InputNumberAnt
