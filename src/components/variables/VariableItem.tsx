import { Variable } from "@/types/Variable.types";

export const VariableItem = ({
  idVariable,
  cdSerie,
  descripcion,
  fecha,
  valor
}: Variable) => {
  return <div>
    <h2>{descripcion}</h2>
    <p>{fecha}</p>
    <p>{valor}</p>
  </div>;
};