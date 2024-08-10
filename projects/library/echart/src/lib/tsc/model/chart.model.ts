export interface ChartTitleM {
    name: string;
    color: string;
}

export class ChartTitle implements ChartTitleM {
    name = '';
    color = 'black';
}