export var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum["PDF"] = "pdf";
    FileTypeEnum["CSV"] = "csv";
    FileTypeEnum["XLSX"] = "xlsx";
})(FileTypeEnum || (FileTypeEnum = {}));
export var FileUploadEnum;
(function (FileUploadEnum) {
    FileUploadEnum[FileUploadEnum["MAX_FILE_SIZE_10_MB"] = 10485760] = "MAX_FILE_SIZE_10_MB";
    FileUploadEnum[FileUploadEnum["MAX_FILE_SIZE_1_MB"] = 1000000] = "MAX_FILE_SIZE_1_MB";
    FileUploadEnum["INVALID_XLSX_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types: .xlsx";
    FileUploadEnum["INVALID_PDF_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types: .pdf";
    FileUploadEnum["INVALID_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types:";
    FileUploadEnum["INVAID_FILE_SIZE_ERROR_10_MB"] = "Invalid file size! The size limit for file is 10.0 MB. Reduce the file size and try again.";
    FileUploadEnum["INVAID_FILE_SIZE_ERROR_1_MB"] = "Invalid file size! The size limit for file is 1 MB. Reduce the file size and try again.";
    FileUploadEnum["UPLOAD_FILE_ERROR"] = "Error while uploading file!";
    FileUploadEnum["NO_FILE"] = "Please upload a file!";
})(FileUploadEnum || (FileUploadEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2VudW0vZmlsZS5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDcEIsMkJBQVcsQ0FBQTtJQUNYLDJCQUFXLENBQUE7SUFDWCw2QkFBYSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxZQUFZLEtBQVosWUFBWSxRQUl2QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBVVg7QUFWRCxXQUFZLGNBQWM7SUFDdEIsd0ZBQThCLENBQUE7SUFDOUIscUZBQTRCLENBQUE7SUFDNUIscUdBQW1GLENBQUE7SUFDbkYsbUdBQWlGLENBQUE7SUFDakYsMEZBQXdFLENBQUE7SUFDeEUsNklBQTJILENBQUE7SUFDM0gseUlBQXVILENBQUE7SUFDdkgsbUVBQWlELENBQUE7SUFDakQsbURBQWlDLENBQUE7QUFDckMsQ0FBQyxFQVZXLGNBQWMsS0FBZCxjQUFjLFFBVXpCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRmlsZVR5cGVFbnVtIHtcbiAgICBQREYgPSAncGRmJyxcbiAgICBDU1YgPSAnY3N2JyxcbiAgICBYTFNYID0gJ3hsc3gnXG59XG5cbmV4cG9ydCBlbnVtIEZpbGVVcGxvYWRFbnVtIHtcbiAgICBNQVhfRklMRV9TSVpFXzEwX01CID0gMTA0ODU3NjAsIC8qIDEwIE1CICovXG4gICAgTUFYX0ZJTEVfU0laRV8xX01CID0gMTAwMDAwMCwgLyogMSBNQiAqL1xuICAgIElOVkFMSURfWExTWF9GSUxFX1RZUEVfRVJST1IgPSAnSW52YWxpZCBmaWxlIHR5cGUhIFBsZWFzZSB1cGxvYWQgZmlsZSB0eXBlczogLnhsc3gnLFxuICAgIElOVkFMSURfUERGX0ZJTEVfVFlQRV9FUlJPUiA9ICdJbnZhbGlkIGZpbGUgdHlwZSEgUGxlYXNlIHVwbG9hZCBmaWxlIHR5cGVzOiAucGRmJyxcbiAgICBJTlZBTElEX0ZJTEVfVFlQRV9FUlJPUiA9ICdJbnZhbGlkIGZpbGUgdHlwZSEgUGxlYXNlIHVwbG9hZCBmaWxlIHR5cGVzOicsXG4gICAgSU5WQUlEX0ZJTEVfU0laRV9FUlJPUl8xMF9NQiA9ICdJbnZhbGlkIGZpbGUgc2l6ZSEgVGhlIHNpemUgbGltaXQgZm9yIGZpbGUgaXMgMTAuMCBNQi4gUmVkdWNlIHRoZSBmaWxlIHNpemUgYW5kIHRyeSBhZ2Fpbi4nLFxuICAgIElOVkFJRF9GSUxFX1NJWkVfRVJST1JfMV9NQiA9ICdJbnZhbGlkIGZpbGUgc2l6ZSEgVGhlIHNpemUgbGltaXQgZm9yIGZpbGUgaXMgMSBNQi4gUmVkdWNlIHRoZSBmaWxlIHNpemUgYW5kIHRyeSBhZ2Fpbi4nLFxuICAgIFVQTE9BRF9GSUxFX0VSUk9SID0gJ0Vycm9yIHdoaWxlIHVwbG9hZGluZyBmaWxlIScsXG4gICAgTk9fRklMRSA9ICdQbGVhc2UgdXBsb2FkIGEgZmlsZSEnXG59Il19