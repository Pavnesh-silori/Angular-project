// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,


    // mock server
    MOCK_SERVER: 'http://localhost:3000/',

    // sso
    GOOGLE_SSO: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=913517526924-rroeqqr6q2g3n4gd1c9i9hpiu1f0evp5.apps.googleusercontent.com&scope=openid profile email&redirect_uri=https://dev-accounts.thesustainabilitycloud.com/sso/google/call-back',
    GOOGLE_SSO_SIGN_UP: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=913517526924-rroeqqr6q2g3n4gd1c9i9hpiu1f0evp5.apps.googleusercontent.com&scope=openid profile email&redirect_uri=https://dev-accounts.thesustainabilitycloud.com/user/sign-up',

    AZURE_SSO: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&client_id=e8714629-b1d6-4ea7-a813-fbc37f985d25&scope=openid+email+profile&redirect_uri=https://dev-accounts.thesustainabilitycloud.com/sso/azure/call-back',
    // /sso/


    // app url
    ACCOUNT_URL: 'http://localhost:4500/',
    NETZERO_ADMIN_URL: 'http://localhost:4600/',
    NETZERO_URL: 'http://localhost:4700/',
    ADMIN_URL: 'http://localhost:4800/',
    OFFSET_URL: 'http://localhost:4900/',
    EMPLOYEE_URL: 'http://localhost:5000/',
    CONNECT_URL: 'http://localhost:5100/',
    ENERGY_URL: 'http://localhost:5200/',
    WATER_URL: 'http://localhost:5300/',
    SUPPLIER_URL: 'http://localhost:5400/',

    // ip
    // ACCOUNT_URL: 'http://192.168.1.59:4500/',
    // NETZERO_ADMIN_URL: 'http://192.168.1.59:4600/',
    // NETZERO_URL: 'http://192.168.1.59:4700/',
    // ADMIN_URL: 'http://192.168.1.59:4800/',
    // OFFSET_URL: 'http://192.168.1.59:4900/',
    // EMPLOYEE_URL: 'http://192.168.1.59:5000/',
    // CONNECT_URL: 'http://192.168.1.59:5100/',
    // ENERGY_URL: 'http://192.168.1.59:5200/',
    // WATER_URL: 'http://192.168.1.59:5300/',
    // SUPPLIER_URL: 'http://192.168.1.59:5400/',
    // /app url/

    // localhost
    // ORGANIZATION_API_URL: 'http://localhost:8500/',
    // ORGANIZATION_PUBLIC_API_URL: 'http://localhost:8500/public/',
    // SUBSCRIPTION_API_URL: 'http://localhost:8900/',
    // /localhost/


    // dev
    // ORGANIZATION_API_URL: 'https://dev-api-org.thesustainabilitycloud.com/',
    // ORGANIZATION_PUBLIC_API_URL: 'https://dev-api-org.thesustainabilitycloud.com/public/',
    // SUBSCRIPTION_API_URL: 'https://dev-api-subscription.thesustainabilitycloud.com/',
    // /dev/


    // staging
    ORGANIZATION_API_URL: 'https://staging-api-org.thesustainabilitycloud.com/',
    ORGANIZATION_PUBLIC_API_URL: 'https://staging-api-org.thesustainabilitycloud.com/public/',
    SUBSCRIPTION_API_URL: 'https://staging-api-subscription.thesustainabilitycloud.com/',
    // /staging/


    // prod
    // ORGANIZATION_API_URL: 'https://api-org.thesustainabilitycloud.com/',
    // ORGANIZATION_PUBLIC_API_URL: 'https://api-org.thesustainabilitycloud.com/public/',
    // SUBSCRIPTION_API_URL: 'https://api-subscription.thesustainabilitycloud.com/',
    // /prod/
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
