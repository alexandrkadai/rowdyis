import { NovaPoshtaConfig, NovaPoshtaResponse, City, Warehouse } from '../../interfaces/novaPoshta';

class NovaPoshtaService {
  private config: NovaPoshtaConfig;

  constructor(config: NovaPoshtaConfig) {
    this.config = config;
  }

  private async makeRequest<T>(modelName: string, calledMethod: string, methodProperties: any): Promise<T[]> {
    try {
      const response = await fetch(this.config.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: this.config.apiKey,
          modelName,
          calledMethod,
          methodProperties,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: NovaPoshtaResponse<T> = await response.json();

      if (!result.success) {
        throw new Error(result.errors.join(', '));
      }

      return result.data;
    } catch (error) {
      console.error('NovaPoshta API Error:', error);
      throw error;
    }
  }

  async getCities(searchQuery: string): Promise<City[]> {
    return this.makeRequest<City>('Address', 'getCities', {
      FindByString: searchQuery,
      Limit: 20,
    });
  }

  async getWarehouses(params: {
    cityName: string;
    searchQuery?: string;
    page?: number;
    limit?: number;
  }): Promise<Warehouse[]> {
    return this.makeRequest<Warehouse>('Address', 'getWarehouses', {
      CityName: params.cityName,
      FindByString: params.searchQuery ? `Відділення №${params.searchQuery}` : '',
      Page: params.page || 1,
      Limit: params.limit || 50,
      Language: 'UA',
    });
  }
}

export class NovaPoshtaError extends Error {
    constructor(message: string, public code?: string) {
      super(message);
      this.name = 'NovaPoshtaError';
    }
  }
  
  export const handleNovaPoshtaError = (error: unknown) => {
    if (error instanceof NovaPoshtaError) {
      // Handle specific Nova Poshta errors
      return {
        message: error.message,
        code: error.code,
      };
    }
    
    // Handle generic errors
    return {
      message: 'An unexpected error occurred',
      code: 'UNKNOWN_ERROR',
    };
  };
  
export default NovaPoshtaService;