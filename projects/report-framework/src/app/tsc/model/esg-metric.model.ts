export interface EsgMetricI {
        id: number,
        metricName: string,
        esgTypeName: string,
        esgTypeKeyID: string,
        activityName: string;
        framework: FrameworkI[],
        control: string
}

export interface FrameworkI {
    name: string;
    logo: string
}

export class EsgMetric implements EsgMetricI{
    id;
    metricName;
    esgTypeName;
    esgTypeKeyID;
    activityName
    framework;
    control;
}