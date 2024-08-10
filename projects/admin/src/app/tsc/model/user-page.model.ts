export interface UserPageM {
    id: number;
    name: string;
    email: string;
    profileImg: string;
    applications: string;
    status: string; 
}

export class UserPage implements UserPageM{
    id;
    name;
    email;
    profileImg;
    applications;
    status; 
}