export interface ScheduleReportI {
    reportConfig: {
        reportType: string;
        entityType: string;
        deviceID: number[];
        entityID: number[];
        sourceConsumer: {
            type: string;
            keyID: string;
        },
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

export class ScheduleReport implements ScheduleReportI {
    reportConfig = {
        reportType: '',
        deviceID: [],
        entityType: '',
        entityID: [],
        sourceConsumer: {
            type: '',
            keyID: '',
        },
        paramMetric: [],
    };
    schedulerConfig = {
        name: '',
        dataInterval: '',
        frequency: '',
        userChoice: '',
        userID: [],
        otherUserEmail: [],
        status: '',
        reportFormat: '',
    };
}

export interface ScheduleReportPageI {
    id: number;
    name: string;
    type: string;
    recipients: Array<{
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        profileImgUrl: string
    }>;
    frequency: string;
    scheduledBy: {
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        profileImgUrl: string
    };
    status: string;
}

export class ScheduleReportPage implements ScheduleReportPageI {
    id = null;
    name = '';
    type = '';
    recipients = [];
    frequency = '';
    scheduledBy = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        profileImgUrl: ''
    };
    status = '';
}