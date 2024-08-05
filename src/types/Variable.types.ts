export type Variable = {
  idVariable: number;
  cdSerie: number;
  descripcion: string;
  fecha: string;
  valor: number;
}

export type Variables = {
  status: number;
  results: Variable[]
}