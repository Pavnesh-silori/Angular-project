export const environment = {
    production: false,


    // mock server
    MOCK_SERVER: 'http://localhost:3000/',
    // MOCK_SERVER: 'http://10.100.3.53:3000/data/',
    // MOCK_SERVER: 'https://dev-accounts.thesustainabilitycloud.com/:3000/data/',

    // sso
    GOOGLE_SSO: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=913517526924-rroeqqr6q2g3n4gd1c9i9hpiu1f0evp5.apps.googleusercontent.com&scope=openid profile email&redirect_uri=https://dev-accounts.thesustainabilitycloud.com/sso/google/call-back',
    GOOGLE_SSO_SIGN_UP: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=913517526924-rroeqqr6q2g3n4gd1c9i9hpiu1f0evp5.apps.googleusercontent.com&scope=openid profile email&redirect_uri=https://dev-accounts.thesustainabilitycloud.com/user/sign-up',

    AZURE_SSO: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&client_id=e8714629-b1d6-4ea7-a813-fbc37f985d25&scope=openid+email+profile&redirect_uri=https://dev-accounts.thesustainabilitycloud.com/sso/azure/call-back',
    // /sso/


    // app url
    NETZERO_ADMIN_URL: 'https://dev-tscadmin.thesustainabilitycloud.com/',
    ACCOUNT_URL: 'https://dev-accounts.thesustainabilitycloud.com/',
    ADMIN_URL: 'https://dev-admin.thesustainabilitycloud.com/',
    NETZERO_URL: 'https://dev-netzero.thesustainabilitycloud.com/',
    SUPPLIER_URL: 'https://dev-supplier-netzero.thesustainabilitycloud.com/',
    OFFSET_URL: 'https://dev-offset.thesustainabilitycloud.com/',
    ENERGY_URL: 'https://dev-energy.thesustainabilitycloud.com/',
    CONNECT_URL: 'https://dev-connect.thesustainabilitycloud.com/',
    // /app url/


    // dev
    ORGANIZATION_API_URL: 'https://dev-api-org.thesustainabilitycloud.com/',
    ORGANIZATION_PUBLIC_API_URL: 'https://dev-api-org.thesustainabilitycloud.com/public/',
    SUBSCRIPTION_API_URL: 'https://dev-api-subscription.thesustainabilitycloud.com/',
    // /dev/
};
