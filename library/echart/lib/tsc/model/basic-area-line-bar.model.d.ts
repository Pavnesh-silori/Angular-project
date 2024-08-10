export interface BasicAreaLineBarChartM {
    metaData: Array<{
        name: string;
        value: number;
    }>;
    unit: {
        name: string;
        code: string;
    };
    xAxisLabel: string;
    yAxisLabel: string;
    xAxisNameGap: number;
    yAxisNameGap: number;
    showDataZoomSlider: boolean;
    showDataView: boolean;
    showMagicType: boolean;
    showRestore: boolean;
    showDownloadImage: boolean;
}
export declare class BasicAreaLineBarChart implements BasicAreaLineBarChartM {
    metaData: any[];
    unit: {
        name: string;
        code: string;
    };
    xAxisLabel: string;
    yAxisLabel: string;
    xAxisNameGap: number;
    yAxisNameGap: number;
    showDataZoomSlider: boolean;
    showDataView: boolean;
    showMagicType: boolean;
    showRestore: boolean;
    showDownloadImage: boolean;
}
