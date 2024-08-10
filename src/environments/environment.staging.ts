export const environment = {
    production: false,


    // mock server
    MOCK_SERVER: 'http://localhost:3000/',

    // sso
    GOOGLE_SSO: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=913517526924-rroeqqr6q2g3n4gd1c9i9hpiu1f0evp5.apps.googleusercontent.com&scope=openid profile email&redirect_uri=https://staging-accounts.thesustainabilitycloud.com/sso/google/call-back',
    GOOGLE_SSO_SIGN_UP: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=913517526924-rroeqqr6q2g3n4gd1c9i9hpiu1f0evp5.apps.googleusercontent.com&scope=openid profile email&redirect_uri=https://staging-accounts.thesustainabilitycloud.com/user/sign-up',

    AZURE_SSO: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&client_id=e8714629-b1d6-4ea7-a813-fbc37f985d25&scope=openid+email+profile&redirect_uri=https://staging-accounts.thesustainabilitycloud.com/sso/azure/call-back',
    // /sso/


    // app url
    NETZERO_ADMIN_URL: 'https://staging-tscadmin.thesustainabilitycloud.com/',
    ACCOUNT_URL: 'https://staging-accounts.thesustainabilitycloud.com/',
    ADMIN_URL: 'https://staging-admin.thesustainabilitycloud.com/',
    NETZERO_URL: 'https://staging-netzero.thesustainabilitycloud.com/',
    SUPPLIER_URL: 'https://staging-supplier-netzero.thesustainabilitycloud.com/',
    OFFSET_URL: 'https://staging-offset.thesustainabilitycloud.com/',
    ENERGY_URL: 'https://staging-energy.thesustainabilitycloud.com/',
    CONNECT_URL: 'https://staging-connect.thesustainabilitycloud.com/',
    // /app url/


    // staging
    ORGANIZATION_API_URL: 'https://staging-api-org.thesustainabilitycloud.com/',
    ORGANIZATION_PUBLIC_API_URL: 'https://staging-api-org.thesustainabilitycloud.com/public/',
    SUBSCRIPTION_API_URL: 'https://staging-api-subscription.thesustainabilitycloud.com/',
    // /staging/
};
