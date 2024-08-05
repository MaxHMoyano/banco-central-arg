import { variablesApi } from "@/api/variables";
import { VariableList } from "@/components/variables/VariableList";
import { Variable } from "@/types/Variable.types";
import { useEffect, useState } from "react";
export const Dashboard = () => {
  const [variables, setVariables] = useState<Variable[]>([]);
  const todayDate = new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'full',
  }).format(new Date());

  useEffect(() => {
    variablesApi.get().then((data) => {
      if (!data) return;
      setVariables(data.results);
    });
  }, []);

  return <div className="min-h-full w-full overflow-y-auto flex flex-col items-center justify-center bg-slate-700">
  <h1 className="text-3xl font-bold text-cyan-200 tracking-wide">Banco central de la Republica Argentina</h1>
  <h2 className="text-2xl font-medium text-cyan-100">{todayDate}</h2>
  {
    <VariableList variables={variables} />
  }
</div>;
};