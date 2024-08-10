export interface AlarmPageM {
    id: number;
    alertName: string;
    associatedWith: string;
    parameterLabel: string;
    type: string;
    time: string;
    status: string;
    description: string;
}

export class AlarmPage implements AlarmPageM {
    id;
    alertName;
    associatedWith;
    parameterLabel;
    type;
    time;
    status;
    description;
}