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


export class BasicAreaLineBarChart implements BasicAreaLineBarChartM {
    chartTitle = {
        name: '',
        color: 'black',
    };
    metaData = [];
    unit = {
        name: '',
        code: '',
    };
    markLine = [];
    xAxisLabel = '';
    yAxisLabel = '';
    xAxisNameGap = 40;
    yAxisNameGap = 40;
    showDataZoomSlider = false;
    showDataView = false;
    showMagicType = false;
    showRestore = false;
    showDownloadImage = false;
}