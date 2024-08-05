import { Variable } from "@/types/Variable.types";
import { VariableItem } from "./VariableItem";

export const VariableList = ({
  variables
}: {
  variables: Variable[];
}) => {
  return <div>
    {
      variables.map((variable) => {
        return <VariableItem key={variable.idVariable} {...variable} />
      })
    }
  </div>;
};