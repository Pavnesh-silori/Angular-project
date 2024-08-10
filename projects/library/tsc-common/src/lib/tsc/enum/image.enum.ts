export enum ImageTypeEnum {
    USER_PROFILE = 'USER_PROFILE',
    ORG_LOGO = 'ORG_LOGO',
    FACILITY_LOGO = 'FACILITY_LOGO',
    REGULATOR_LOGO = 'REGULATOR_LOGO'
}

export enum ImageDefaultPathEnum {
    USER_PROFILE = '/assets/images/default-profile-img.jpeg',
    ORG_LOGO = '/assets/images/org-default.jpeg',
    FACILITY_LOGO = '/assets/images/org-default.jpeg',
    REGULATOR_LOGO = '/assets/images/default-img.jpeg',
    DEFAULT_LOGO = '/assets/images/default-img.jpeg'
}

export enum ImageErrorEnum {
    INVALID_IMAGE_SIZE_ERROR = 'Invalid file size! The size limit for images is 10.0 MB. Reduce the image size and try again.',
    INVALID_IMAGE_TYPE_ERROR = 'Invalid file type! Please upload the following file types: .jpeg, .jpg, .png.',
    INVALID_IMAGE_NUMBER_ERROR = 'Multiple images are not allowed. Select/Drop single image only.',
}
