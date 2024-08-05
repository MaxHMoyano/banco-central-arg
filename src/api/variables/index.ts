import { Variable, Variables } from '@/types/Variable.types';
import api from '../';

const get = async () => {
  try {
    const response = await api.get<Variables>('/estadisticas/v2.0/PrincipalesVariables');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const getByVariable = async (variable: string, from: string, to: string) => {
  try {
    const response = await api.get<Variable>(`/estadisticas/v2.0/PrincipalesVariables/${variable}/${from}/${to}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null
  }
}

export const variablesApi = {
  get,
  getByVariable
}