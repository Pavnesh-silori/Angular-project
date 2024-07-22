export const titleColor = '#495057';

export const LINE_BAR_CHART_COLOR: any[] = [
    '#ffdc5c',
    '#ff9f7f',
    '#37a1da',
];

export const SCOPE_WISE_EMISSION_COLOR: any[] = [
    '#191970',
    '#00ECE8',
    '#FFA420'
];

export const CARBON_EMISSION_TREND_COLOR: any[] = [
    '#ffdc5c',
    '#ff9f7f',
    '#37a1da',
];

export const ACTIVITY_WISE_EMISSION_CHART_COLOR: any[] = [
    '#58508d',
    '#003f5c',
    '#bc5090',
    '#ffa600',
    '#ff6361',
    '#F5D6B1',
    '#C67D58',
    '#ffdc5c',
    '#ff9f7f',
    '#37a1da'
];

export const SCOPE_WISE_EMISSION_MD: any = {
    title: 'Emissions by scope',
    titleColor: titleColor,
    seriesName: 'Emission',
    color: SCOPE_WISE_EMISSION_COLOR,
};

export const CARBON_EMISSION_TREND_MD: any = {
    title: 'Emissions trend',
    titleColor: titleColor,
    xAxisName: 'Duration',
    color: CARBON_EMISSION_TREND_COLOR,
};

export const ACTIVITY_WISE_EMISSION_MD: any = {
    title: 'Emissions by activity',
    titleColor: titleColor,
    xAxisName: 'Emission',
    yAxisName: 'Activity',
    color: ACTIVITY_WISE_EMISSION_CHART_COLOR,
};

export const SBTI_EMISSION_MD: any = {
    title: 'Emissions by target',
    titleColor: titleColor,
    xAxisName: 'Year',
    yAxisName: 'Emission',
    color: LINE_BAR_CHART_COLOR,
};