export const GLOBAL_CONSTANT = {

    HYPHEN: '--',

    // action
    CREATE: "CREATE",
    UPDATE: "UPDATE",

    // material form field
    FORM_FIELD_APPEARANCE: 'outline',

    // form
    INVALID_FORM: 'Invalid form, please validate all fields!',

    //Email Pattern
    EMAIL_PATTERN: ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"),

    //Zipcode Pattern
    ZIPCODE_PATTERN: ("[A-Za-z0-9]*"),

    // website url
    PRIVACY: 'https://www.logicladder.com/privacy/',
    TERMS: 'https://www.logicladder.com/terms/',
    PRICING: 'https://www.thesustainabilitycloud.com/pricing',

    ACTIVE_STATUS: 'ACTIVE',
    INACTIVE_STATUS: 'INACTIVE',
    ACTIVE_LABEL: 'Active',
    INACTIVE_LABEL: 'Inactive',
    APPROVED_LABEL: 'Approved',
    REQUESTED_LABEL: 'Requested',
    REJECTED_LABEL: 'Rejected',

    // emission request
    ER_U_EDIT: 'EDIT',
    ER_U_RE_REQUEST: 'RE_REQUEST',

    // plan price type
    PLAN_PRICE_TYPE_FREE: 'FREE',
    PLAN_PRICE_TYPE_PAID: 'PAID',

    //plan group type
    PLAN_STANDALONE: 'STANDALONE',
    PLAN_BUNDLED: 'BUNDLED',

    FREQUENCY_DAILY: 'DAILY',
    FREQUENCY_WEEKLY: 'WEEKLY',
    FREQUENCY_MONTHLY: 'MONTHLY',
    FREQUENCY_YEARLY: 'YEARLY',


    SUPPORT_EMAIL: 'support@thesustainabilitycloud.com',
    SUBSIDIARY_LABEL: 'Subsidiary',
    JOINT_VENTURE_LABEL: 'Joint Venture',
    /* dialog results */
    DELETE_DR: 'DELETE',
    SUCCESS_DR: 'SUCCESS',
    CLOSE_DR: 'CLOSE',
    CONFIRM_DR: 'CONFIRM',
    CANCEL_DR: 'CANCEL',

    // request access status
    RA_PENDING: 'PENDING',
    RA_DECLINED: 'DECLINED',
    RA_APPROVED: 'APPROVED',
    RA_REJECTED: 'REJECTED',
    RA_REQUESTED: 'REQUESTED',

    // unit type
    EQUIVALENT_EMISSION: 'EQUIVALENT_EMISSION',

    /* SCOPE_KEY_ID */
    SCOPE_1_KEY_ID: 'SCOPE1',
    SCOPE_2_KEY_ID: 'SCOPE2',
    SCOPE_3_KEY_ID: 'SCOPE3',

    /* SCOPE_ID */
    SCOPE_1_ID: '1',
    SCOPE_2_ID: '2',
    SCOPE_3_ID: '3',

    /* Consolidation Approaches Name */
    OPERATIONAL_CONTROL: 'Operational control',
    FINANCIAL_CONTROL: 'Financial control',
    EQUITY_CONTROL: 'Equity control',


    YES: 'YES',
    NO: 'NO',


    // file errors 
    INVALID_FILE_TYPE: 'Invalid file type! Please upload file type .pdf only',
    INVALID_FILE_SIZE: 'Invalid file size! The size limit for noc file is 10.0 MB. Reduce the file size and try again.',
    MAX_FILE_SIZE: 10485760, /* 10 MB */
    DOC_UPLOAD_SUCCESSFULLY: 'SUCCESS',
    UPLOAD_FILE: 'Please upload a file!',

    /* user status */
    ACTIVE_USER: 'ACTIVE',
    INACTIVE_USER: 'INACTIVE',

    UNRECOGNIZED_ACTION: 'Unrecognized action!',

    // toast constants
    TITLE_ERROR: 'Error',
    ERROR_COLOR: 'error',
    TITLE_WARNING: 'Warning',
    WARNING_COLOR: 'warning',
    TITLE_INFO: 'Info',
    INFO_COLOR: 'info',
    TITLE_SUCCESS: 'Success',
    SUCCESS_COLOR: 'success',

    // calculation approach key-ids
    CALCULATION_SCREENING: 'screening-method',
    CALCULATION_SERVICE_BY_CONTRACTOR: 'lifecycle-stage-approach-simplified-material-balance-approach',
    CALCULATION_SERVICE_MYSELF: 'sales-based-approach-material-balance-approach',
    CALCULATION_PRODUCT_MANUFACTURER: 'fugitive-product-manufacturer',

    // equipment tab types
    PURCHASE: 'PURCHASE',
    SALES: 'SALES',
    RETROFIT: 'RETROFIT',

    //equipment type key-id
    SCREENING_NEW_EQUIPMENT: 'screening-new-equipment',
    SCREENING_SOLD_RETIRED_EQUIPMENT: 'screening-sold-retired-equipment',
    CONTRACTOR_NEW_EQUIPMENT: 'contractor-new-equipment',
    CONTRACTOR_SOLD_RETIRED_EQUIPMENT: 'contractor-sold-retired-equipment',

    // action
    UPDATE_LABEL: 'UPDATE',
    CONFIRM_LABEL: 'CONFIRM',

    // right aligned dialog config 
    RIGHT_DIALOG_CONFIG: {
        disableClose: true,
        minWidth: '40vw',
        maxWidth: '40vw',
        height: '100%',
        position: { right: '-2px', top: '0px' },
    },

    DEFAULT_EMISSION_UNIT: {
        id: 28,
        name: 'tCO2e',
        keyID: 'tCO2e'
    },

    // target status
    VERIFIED: 'VERIFIED',
    PENDING: 'PENDING',

    // RECALCULATION_TRIGGER
    ACTIVITY_DATA_CREATE: 'ACTIVITY_DATA_CREATE',
    ACTIVITY_DATA_UPDATE: 'ACTIVITY_DATA_UPDATE',
    SETTING_CHANGE: 'SETTING_CHANGE',
    CUSTOM_EMISSION_FACTOR_CHANGE: 'CUSTOM_EMISSION_FACTOR_CHANGE',
    CUSTOM_ESTIMATION_FACTOR_CHANGE: 'CUSTOM_ESTIMATION_FACTOR_CHANGE',


    SUBSIDIARY_JOINTVENTURE_LABEL: 'Subsidiary / Joint Venture',
    MAT_RIPPLE_CENTER: true,

    // maxImageSize
    maxImageSize: 10485760, /* 10 MB */
     
    // allowed image types
     allowedImageTypes: ['.JPG', '.jpg', '.JPEG', '.jpeg', '.PNG', '.png'],

     // Image file errors
    invalidImageSizeError: 'Invalid file size! The size limit for images is 10.0 MB. Reduce the image size and try again.',
    invalidImageTypeError: 'Invalid file type! Please upload the following file types: .jpeg, .jpg, .png.',
    invalidImageNumberError: 'Multiple images are not allowed. Select/Drop single image only.',
}


