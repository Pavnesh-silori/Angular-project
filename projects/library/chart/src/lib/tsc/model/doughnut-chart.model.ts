export interface DataM {
    name: string;
    value: number;
}

export interface metaDataM {
    title: string;
    titleColor: string;
    legend: {
        top: string,
        bottom: string,
        left: string,
        right: string

    },
    unit: {
        name: string;
        code: string;
    }
}

export interface DoughnutChartM {
    metaData: metaDataM;
    data: DataM[];
}

export class DoughnutChart implements DoughnutChartM {
    metaData: null;
    data: null;
}