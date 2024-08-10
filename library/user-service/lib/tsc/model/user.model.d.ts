export interface UserM {
    id: number;
    firstName: string;
    lastName: string;
    genderValue: string;
    genderLabel: string;
    email: string;
    countryCallingCode: number;
    contactCountryCode: string;
    contactNumber: string;
    profileImgUrl: string;
    imgID: number;
    status: string;
    newsLetterSub: boolean;
}
export declare class User implements UserM {
    id: any;
    firstName: any;
    lastName: any;
    genderValue: any;
    genderLabel: any;
    email: any;
    countryCallingCode: any;
    contactCountryCode: any;
    contactNumber: any;
    profileImgUrl: any;
    imgID: any;
    status: any;
    newsLetterSub: any;
}
export interface UserOrgAccessM {
    isFacilityAccess: boolean;
    isOrgAccess: boolean;
}
export declare class UserOrgAccess implements UserOrgAccessM {
    isFacilityAccess: any;
    isOrgAccess: any;
}
