export interface DoughnutChartM {
    metaData: Array<{
        name: string;
        value: number;
        unit: {
            name: string;
            code: string;
        };
    }>;
    showDataView: boolean;
    showRestore: boolean;
    showDownloadImage: boolean;
}
export declare class DoughnutChart implements DoughnutChartM {
    metaData: any[];
    showDataView: boolean;
    showRestore: boolean;
    showDownloadImage: boolean;
}
