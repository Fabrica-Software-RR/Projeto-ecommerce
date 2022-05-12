import { StaticImageData } from "next/image";

export interface ListaImagens {
  ImagemCarrosel : string[];
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
