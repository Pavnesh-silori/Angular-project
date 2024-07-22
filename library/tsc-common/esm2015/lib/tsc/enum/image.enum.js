export var ImageTypeEnum;
(function (ImageTypeEnum) {
    ImageTypeEnum["USER_PROFILE"] = "USER_PROFILE";
    ImageTypeEnum["ORG_LOGO"] = "ORG_LOGO";
    ImageTypeEnum["FACILITY_LOGO"] = "FACILITY_LOGO";
    ImageTypeEnum["REGULATOR_LOGO"] = "REGULATOR_LOGO";
})(ImageTypeEnum || (ImageTypeEnum = {}));
export var ImageDefaultPathEnum;
(function (ImageDefaultPathEnum) {
    ImageDefaultPathEnum["USER_PROFILE"] = "/assets/images/default-profile-img.jpeg";
    ImageDefaultPathEnum["ORG_LOGO"] = "/assets/images/org-default.jpeg";
    ImageDefaultPathEnum["FACILITY_LOGO"] = "/assets/images/org-default.jpeg";
    ImageDefaultPathEnum["REGULATOR_LOGO"] = "/assets/images/default-img.jpeg";
    ImageDefaultPathEnum["DEFAULT_LOGO"] = "/assets/images/default-img.jpeg";
})(ImageDefaultPathEnum || (ImageDefaultPathEnum = {}));
export var ImageErrorEnum;
(function (ImageErrorEnum) {
    ImageErrorEnum["INVALID_IMAGE_SIZE_ERROR"] = "Invalid file size! The size limit for images is 10.0 MB. Reduce the image size and try again.";
    ImageErrorEnum["INVALID_IMAGE_TYPE_ERROR"] = "Invalid file type! Please upload the following file types: .jpeg, .jpg, .png.";
    ImageErrorEnum["INVALID_IMAGE_NUMBER_ERROR"] = "Multiple images are not allowed. Select/Drop single image only.";
})(ImageErrorEnum || (ImageErrorEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9lbnVtL2ltYWdlLmVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQiw4Q0FBNkIsQ0FBQTtJQUM3QixzQ0FBcUIsQ0FBQTtJQUNyQixnREFBK0IsQ0FBQTtJQUMvQixrREFBaUMsQ0FBQTtBQUNyQyxDQUFDLEVBTFcsYUFBYSxLQUFiLGFBQWEsUUFLeEI7QUFFRCxNQUFNLENBQU4sSUFBWSxvQkFNWDtBQU5ELFdBQVksb0JBQW9CO0lBQzVCLGdGQUF3RCxDQUFBO0lBQ3hELG9FQUE0QyxDQUFBO0lBQzVDLHlFQUFpRCxDQUFBO0lBQ2pELDBFQUFrRCxDQUFBO0lBQ2xELHdFQUFnRCxDQUFBO0FBQ3BELENBQUMsRUFOVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBTS9CO0FBRUQsTUFBTSxDQUFOLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN0Qiw0SUFBMEgsQ0FBQTtJQUMxSCw0SEFBMEcsQ0FBQTtJQUMxRyxnSEFBOEYsQ0FBQTtBQUNsRyxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBJbWFnZVR5cGVFbnVtIHtcbiAgICBVU0VSX1BST0ZJTEUgPSAnVVNFUl9QUk9GSUxFJyxcbiAgICBPUkdfTE9HTyA9ICdPUkdfTE9HTycsXG4gICAgRkFDSUxJVFlfTE9HTyA9ICdGQUNJTElUWV9MT0dPJyxcbiAgICBSRUdVTEFUT1JfTE9HTyA9ICdSRUdVTEFUT1JfTE9HTydcbn1cblxuZXhwb3J0IGVudW0gSW1hZ2VEZWZhdWx0UGF0aEVudW0ge1xuICAgIFVTRVJfUFJPRklMRSA9ICcvYXNzZXRzL2ltYWdlcy9kZWZhdWx0LXByb2ZpbGUtaW1nLmpwZWcnLFxuICAgIE9SR19MT0dPID0gJy9hc3NldHMvaW1hZ2VzL29yZy1kZWZhdWx0LmpwZWcnLFxuICAgIEZBQ0lMSVRZX0xPR08gPSAnL2Fzc2V0cy9pbWFnZXMvb3JnLWRlZmF1bHQuanBlZycsXG4gICAgUkVHVUxBVE9SX0xPR08gPSAnL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC1pbWcuanBlZycsXG4gICAgREVGQVVMVF9MT0dPID0gJy9hc3NldHMvaW1hZ2VzL2RlZmF1bHQtaW1nLmpwZWcnXG59XG5cbmV4cG9ydCBlbnVtIEltYWdlRXJyb3JFbnVtIHtcbiAgICBJTlZBTElEX0lNQUdFX1NJWkVfRVJST1IgPSAnSW52YWxpZCBmaWxlIHNpemUhIFRoZSBzaXplIGxpbWl0IGZvciBpbWFnZXMgaXMgMTAuMCBNQi4gUmVkdWNlIHRoZSBpbWFnZSBzaXplIGFuZCB0cnkgYWdhaW4uJyxcbiAgICBJTlZBTElEX0lNQUdFX1RZUEVfRVJST1IgPSAnSW52YWxpZCBmaWxlIHR5cGUhIFBsZWFzZSB1cGxvYWQgdGhlIGZvbGxvd2luZyBmaWxlIHR5cGVzOiAuanBlZywgLmpwZywgLnBuZy4nLFxuICAgIElOVkFMSURfSU1BR0VfTlVNQkVSX0VSUk9SID0gJ011bHRpcGxlIGltYWdlcyBhcmUgbm90IGFsbG93ZWQuIFNlbGVjdC9Ecm9wIHNpbmdsZSBpbWFnZSBvbmx5LicsXG59XG4iXX0=