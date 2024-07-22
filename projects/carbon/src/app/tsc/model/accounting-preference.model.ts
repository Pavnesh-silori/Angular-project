export interface AccountingPreferenceM {
    id: number;
    isProductIntensity: string;
    isProductEmbeddedEmission: boolean;
    isProductCarbonFootPrint: string;
}

export class AccountingPreference implements AccountingPreferenceM {
    id;
    isProductIntensity;
    isProductEmbeddedEmission;
    isProductCarbonFootPrint;
}
