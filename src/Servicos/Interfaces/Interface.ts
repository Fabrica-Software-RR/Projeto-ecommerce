import { StaticImageData } from "next/image";
import { ChangeEventHandler } from "react";

export interface ListaImagens {
  ImagemCarrosel: string[];
}
export interface IImage {
  logo?: StaticImageData | string;
  texto: string
  placeholder: string
  loading?: boolean
}

export interface ListaImageCarrosel extends StaticImageData {
  id: number;
  url: StaticImageData | string;
  title: string
  description: string
}

export interface ListaDeBotoes {
  listaBotoes: string[]
}

export interface IInputNumberAnt {
  pegarValor: (valor: number) => void
  value: number
}

export interface InputTextoAnt {
  key?: string | number
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string | number
}
export interface InputForm {
  key?: string | number
  diminuirValor ?: () => void
  aumentarValor ?: () => void
  adicionarQuantidade ?: () => void
  onClick?: () => void
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string | number
}

export interface StateQuantidade  {
  quantidade: number
  id :  number | string
   }


  export  interface ICards {
    imagem: any
    key ?: string | number
    item: number

  }
