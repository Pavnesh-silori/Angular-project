// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,


    // app url
    ACCOUNT_URL: 'http://localhost:4500/',
    ADMIN_URL: 'http://localhost:4800/',


    // mock server
    MOCK_SERVER: 'http://localhost:3000/',
    // MOCK_SERVER: 'http://192.168.1.59:3000/',
    // /mock server/


    // dev
    ORGANIZATION_API_URL: 'https://dev-api-org.thesustainabilitycloud.com/',
    ORGANIZATION_PUBLIC_API_URL: 'https://dev-api-org.thesustainabilitycloud.com/public/',
    SUBSCRIPTION_API_URL: 'https://dev-api-subscription.thesustainabilitycloud.com/',
    // /dev/


    // staging
    // ORGANIZATION_API_URL: 'https://staging-api-org.thesustainabilitycloud.com/',
    // ORGANIZATION_PUBLIC_API_URL: 'https://staging-api-org.thesustainabilitycloud.com/public/',
    // SUBSCRIPTION_API_URL: 'https://staging-api-subscription.thesustainabilitycloud.com/',
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
