export interface RolePermissionM {
    resourcePermissions: ResourcePermissionM[];
    roleDescription: string;
    roleName: string;
}

export interface ResourcePermissionM {
    permissions: PermissionsM[];
    resourceName: string;
}

export interface PermissionsM {
    additionalPermissions: string;
    create: string;
    delete: string;
    edit: string;
    resourceName: string;
    view: string;
}
