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

export class StackBarChart implements StackBarChartM {
    metaData = [];
    tooltipHeaderLabel = '';
    totalDataLabel = '';
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