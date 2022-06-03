import { StaticImageData } from "next/image";

export interface ListaImagens {
  ImagemCarrosel : string[];
}
export interface IImage {
  logo?: StaticImageData | string;
  texto: string
  placeholder: string
  loading?: boolean
}

export interface ListaImageCarrosel extends  StaticImageData {
  id : number;
  url : StaticImageData | string;
  title : string
  description : string
}


export interface ListaDeBotoes {
  listaBotoes: string[]
}


export interface IInputNumberAnt {
  pegarValor: (valor: number) => void
  value: number
}