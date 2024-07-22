export interface AssetM {
    assetID: number;
    assetName: string;
}

export interface AssetDataM {
    asset: AssetM[];
    totalCount: number;
}
