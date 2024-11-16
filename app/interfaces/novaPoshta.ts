export interface NovaPoshtaResponse<T> {
  success: boolean;
  data: T[];
  errors: string[];
  warnings: string[];
  info: string[];
}

export interface City {
  Description: string;
  Ref: string;
  CityID: string;
  SettlementType: string;
}

export interface Warehouse {
  Description: string;
  SiteKey: string;
  Ref: string;
  Number: string;
  CityRef: string;
}

export interface NovaPoshtaConfig {
  apiKey: string;
  baseUrl: string;
}
