import NovaPoshtaService from '../api/novaPoshta/novaPoshtaService';

const novaPoshtaConfig = {
  apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA_API_KEY!,
  baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
};

export const novaPoshtaService = new NovaPoshtaService(novaPoshtaConfig);