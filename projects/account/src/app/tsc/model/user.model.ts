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
    newsLetterSub: boolean;
    profileImgUrl: string;
    status: string;
}

export class User implements UserM {
    id: number;
    firstName: string;
    lastName: string;
    genderValue: string;
    genderLabel: string;
    email: string;
    countryCallingCode: number;
    contactCountryCode: string;
    contactNumber: string;
    newsLetterSub: boolean;
    profileImgUrl: string;
    status: string;
}
