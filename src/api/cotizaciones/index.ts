import api from '../';

export const getCotizaciones = async () => {
  try {
    const response = await api.get('Cotizaciones');

    return response.data;
  } catch (error) {
    console.error(error);
  }
};