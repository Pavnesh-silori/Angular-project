export interface SectionGroupM {
    sectionID: number;
    sectionName: string;
    isAssigned: boolean;
    group: GroupM[]
}

export class SectionGroup implements SectionGroupM {
    sectionID;
    sectionName;
    isAssigned
    group;
}

export interface GroupM {
    id: number;
    name: string;
    isAssigned: boolean;
}
