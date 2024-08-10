export enum BulkUploadEnum {
    MAX_FILE_SIZE = 10485760, /* 10 MB */
    INVALID_FILE_TYPE_ERROR = 'Invalid file type! Please upload file types: .xlsx',
    INVAID_FILE_SIZE_ERROR = 'Invalid file size! The size limit for file is 100.0 MB. Reduce the file size and try again.',
    INVALID = 'Something went wrong!',
    UPLOAD_FILE_ERROR = 'Error while uploading file!',
    NO_FILE = 'Please upload a file!'
}