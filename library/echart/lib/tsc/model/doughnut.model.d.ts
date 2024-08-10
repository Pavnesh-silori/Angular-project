export interface DoughnutChartTitleM {
    name: string;
    color: string;
}
export interface DoughnutChartDataM {
    metaData: Array<{
        name: string;
        value: number;
        unit: {
            name: string;
            code: string;
        };
    }>;
    toolbox: {
        showDataView: boolean;
        showRestore: boolean;
        showDownloadImage: boolean;
    };
}
export interface DoughnutChartM {
    title: DoughnutChartTitleM;
    data: DoughnutChartDataM;
}
export declare class DoughnutChart implements DoughnutChartM {
    title: {
        name: string;
        color: string;
    };
    data: {
        metaData: any[];
        toolbox: {
            showDataView: boolean;
            showRestore: boolean;
            showDownloadImage: boolean;
        };
    };
}
