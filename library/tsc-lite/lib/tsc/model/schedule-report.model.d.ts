export interface ScheduleReportI {
    reportConfig: {
        reportType: string;
        entityType: string;
        deviceID: number[];
        entityID: number[];
        sourceConsumer: {
            type: string;
            keyID: string;
        };
        paramMetric: string[];
    };
    schedulerConfig: {
        name: string;
        dataInterval: string;
        frequency: string;
        userChoice: string;
        userID: number[];
        otherUserEmail: string[];
        status: string;
        reportFormat: string;
    };
}
export declare class ScheduleReport implements ScheduleReportI {
    reportConfig: {
        reportType: string;
        deviceID: any[];
        entityType: string;
        entityID: any[];
        sourceConsumer: {
            type: string;
            keyID: string;
        };
        paramMetric: any[];
    };
    schedulerConfig: {
        name: string;
        dataInterval: string;
        frequency: string;
        userChoice: string;
        userID: any[];
        otherUserEmail: any[];
        status: string;
        reportFormat: string;
    };
}
export interface ScheduleReportPageI {
    id: number;
    name: string;
    type: string;
    recipients: Array<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        profileImgUrl: string;
    }>;
    frequency: string;
    scheduledBy: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        profileImgUrl: string;
    };
    status: string;
}
export declare class ScheduleReportPage implements ScheduleReportPageI {
    id: any;
    name: string;
    type: string;
    recipients: any[];
    frequency: string;
    scheduledBy: {
        id: any;
        firstName: string;
        lastName: string;
        email: string;
        profileImgUrl: string;
    };
    status: string;
}
