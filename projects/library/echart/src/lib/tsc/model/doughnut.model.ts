export interface DoughnutChartM {
    metaData: Array<{
        name: string;
        value: number;
        unit: {
            name: string;
            code: string;
        }
    }>;
    showDataView: boolean;
    showRestore: boolean;
    showDownloadImage: boolean;
}

export class DoughnutChart implements DoughnutChartM {
    metaData = [];
    showDataView = false;
    showRestore = false;
    showDownloadImage = false;
}