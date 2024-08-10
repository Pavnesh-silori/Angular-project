export interface ChartM {
    data: {
        name: string;
        value: number;
        unit: {
            name: string;
            code: string;
        };
    }[];
    title: {
        name: string;
        color: string;
    };
    xAxis?: {
        label: string;
        position: string;
    };
    yAxis: {
        label: string;
        position: string;
    };
    toolbox: {
        position: string;
        feature: {
            showDataView: boolean;
            showLineChart: boolean;
            showBarChart: boolean;
            showRestore: boolean;
            showDownloadImage: boolean;
        };
    };
    legend: {
        top: string,
        bottom: string,
        left: string,
        right: string

    },
}

export class Chart implements ChartM {
    data: null;
    title = null;
    xAxis = null;
    yAxis = null;
    toolbox = null;
    legend = null;
}


