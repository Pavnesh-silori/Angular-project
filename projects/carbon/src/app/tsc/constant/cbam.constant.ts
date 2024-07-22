import { RunStatusKeyIDEnum } from "@carbon/enum/cbam.enum";

export const CBAM_CONSTANT = {
    LEDGER: 'LEDGER',
    ONGOING_RUN: 'ONGOING_RUN',
    PENDING_CONFIGURATION: 'Pending configuration',

    RUN_STATUS_LIST: [
        {
            "keyID": "ALL",
            "name": 'Select none'
        },
        {
            "keyID": [RunStatusKeyIDEnum.INSTALLATION_DETAILS, RunStatusKeyIDEnum.PROCESS_MAP, RunStatusKeyIDEnum.CONFIGURE_DATA_COLLECTION],
            "name": 'Pending configuration'
        },
        {
            "keyID": RunStatusKeyIDEnum.TRACK_PROGRESS,
            "name": 'Pending data collection'
        },
        {
            "keyID": RunStatusKeyIDEnum.ALLOCATE_REVIEW,
            "name": 'Pending verification'
        },
        {
            "keyID": RunStatusKeyIDEnum.CALCULATION_PENDING,
            "name":'Pending calculation'
        },
        {
            "keyID": RunStatusKeyIDEnum.DONE,
            "name":'Finished'
        }
    ],

    RUN_STATUS: [
        {
            key: RunStatusKeyIDEnum.INSTALLATION_DETAILS,
            value: 'Pending configuration'
        },
        {
            key: RunStatusKeyIDEnum.PROCESS_MAP,
            value: 'Pending configuration'
        },
        {
            key: RunStatusKeyIDEnum.CONFIGURE_DATA_COLLECTION,
            value: 'Pending configuration'
        },
        {
            key: RunStatusKeyIDEnum.TRACK_PROGRESS,
            value: 'Pending data collection'
        },
        {
            key: RunStatusKeyIDEnum.ALLOCATE_REVIEW,
            value: 'Pending verification'
        },
        {
            key: RunStatusKeyIDEnum.CALCULATION_PENDING,
            value: 'Pending calculation'
        },
        {
            key: RunStatusKeyIDEnum.RUN_ERROR,
            value: 'Error in calculation'
        },
        {
            key: RunStatusKeyIDEnum.DONE,
            value: 'Finished'
        }
    ]

}

export const REPORTING_QUARTER: any[] = [
    { key: 1, value: 'Quater 1' },
    { key: 2, value: 'Quater 2' },
    { key: 3, value: 'Quater 3' },
    { key: 4, value: 'Quater 4' }
];
