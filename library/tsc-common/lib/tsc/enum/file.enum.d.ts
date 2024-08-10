export declare enum FileTypeEnum {
    PDF = "pdf",
    CSV = "csv",
    XLSX = "xlsx"
}
export declare enum FileUploadEnum {
    MAX_FILE_SIZE_10_MB = 10485760,
    MAX_FILE_SIZE_1_MB = 1000000,
    INVALID_XLSX_FILE_TYPE_ERROR = "Invalid file type! Please upload file types: .xlsx",
    INVALID_PDF_FILE_TYPE_ERROR = "Invalid file type! Please upload file types: .pdf",
    INVALID_FILE_TYPE_ERROR = "Invalid file type! Please upload file types:",
    INVAID_FILE_SIZE_ERROR_10_MB = "Invalid file size! The size limit for file is 10.0 MB. Reduce the file size and try again.",
    INVAID_FILE_SIZE_ERROR_1_MB = "Invalid file size! The size limit for file is 1 MB. Reduce the file size and try again.",
    UPLOAD_FILE_ERROR = "Error while uploading file!",
    NO_FILE = "Please upload a file!"
}
