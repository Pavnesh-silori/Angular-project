import { ChartTitleM } from "./chart.model";
export interface BasicAreaLineBarChartM {
    chartTitle: ChartTitleM;
    metaData: Array<{
        name: string;
        value: number;
    }>;
    unit: {
        name: string;
        code: string;
    };
    markLine: Array<{
        label: string;
        value: number;
        color: string;
    }>;
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
    chartTitle: {
        name: string;
        color: string;
    };
    metaData: any[];
    unit: {
        name: string;
        code: string;
    };
    markLine: any[];
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
