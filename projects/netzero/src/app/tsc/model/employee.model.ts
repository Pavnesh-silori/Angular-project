export interface EmployeeM {
    id: number,
    code: string;
    firstName: string,
    lastName: string,
    department: string,
    designation: string,
    emailID: string,
    contactcountryCallingCode:string
    phoneNo: string,
    joiningDate: string,
    leavingDate: string;
}

export class Employee implements EmployeeM {
    id;
    code;
    firstName;
    lastName;
    department;
    designation;
    emailID;
    contactcountryCallingCode;
    phoneNo;
    joiningDate;
    leavingDate;
}
