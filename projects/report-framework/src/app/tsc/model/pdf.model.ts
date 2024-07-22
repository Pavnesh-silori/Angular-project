export interface PdfDataM {
    sectionName: string;
    sectionID: number;
    value: number;
    children: childrenM[];
}

export interface childrenM {
    groupName: string;
    groupID: number;
    unitLabel: string;
    code: string;
    value: string;
}

export class PdfData implements PdfDataM {
    sectionName;
    sectionID;
    value;
    children;
}