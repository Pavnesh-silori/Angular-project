export interface StackBarChartM {
    metaData: {
        xAxisSeries: string;
        totalData: {
            value: number;
            unitCode: string;
        };
        barData: {
            name: string;
            value: number;
            unit: {
                name: string;
                code: string;
            };
        }[];
    }[];
    tooltipHeaderLabel: string;
    totalDataLabel: string;
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
export declare class StackBarChart implements StackBarChartM {
    metaData: any[];
    tooltipHeaderLabel: string;
    totalDataLabel: string;
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
