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

export class User implements UserM {
    id;
    firstName;
    lastName;
    genderValue;
    genderLabel;
    email;
    countryCallingCode;
    contactCountryCode;
    contactNumber;
    profileImgUrl;
    imgID;
    status;
    newsLetterSub;
}

export interface UserOrgAccessM {
    isFacilityAccess: boolean;
    isOrgAccess: boolean;
}

export class UserOrgAccess implements UserOrgAccessM {
    isFacilityAccess;
    isOrgAccess;
}

