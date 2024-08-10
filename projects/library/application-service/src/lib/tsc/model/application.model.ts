export interface ApplicationM {
    id: number;
    name: string;
    keyID: string;
    description: string;
    url: string;
}

export class Application implements ApplicationM {
    id = null;
    name  = null;
    keyID  = null;
    description  = null;
    url = null;
}

export interface RoleM {
    id: number;
    name: string;
    totalUsers: number;
  }
  
  export class Role implements RoleM{
    id;
    name;
    totalUsers;
  }
  export interface UserApplicationM {
    id: number;
    name: string;
    keyID: string;
    subscriptionStatus: string;
    roles: Role[];
  }
  
  export interface RootObjectM {
    application: Application[];
  }
  export class RootObject implements RootObjectM{
    application: Application[];
}
  
  export class UserApplication implements UserApplicationM{
    id;
    name;
    keyID;
    subscriptionStatus;
    roles: Role[];
  }


