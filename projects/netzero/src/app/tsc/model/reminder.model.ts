export interface ReminderSubTaskContentM {
    subHeader: string,
    redirectUrl: string,
    seenStatus: string,
    userProfile: string,
    userName: string,
}

export interface ReminderContentM {
    header: string,
    subTask: ReminderSubTaskContentM[]
}

export interface ReminderM {
    date: string,
    count: number
    task: ReminderContentM[]
}
