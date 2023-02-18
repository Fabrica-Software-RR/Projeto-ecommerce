import { Input } from 'antd'
import { ReactElement } from 'react'
import { InputTextoAnt } from '../../../Servicos/Interfaces/Interface'

function InputAnt({ onChange, value } :InputTextoAnt): ReactElement {
  return (
    <Input
      style={{ width: '40px', margin: '5px 5px' }}
      onChange={onChange}
      value={value}
    />
  )
}

export default InputAnt
