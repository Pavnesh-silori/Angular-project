export interface WorkflowExistsM {
    previousConfigIntervalID: number;
    workflowExists: boolean
    workFlowExistsForPreviousConfig: boolean
}

export class WorkflowExists implements WorkflowExistsM {
    previousConfigIntervalID;
    workflowExists;
    workFlowExistsForPreviousConfig;
}