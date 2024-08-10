export const environment = {
    production: false,


    // mock server
    MOCK_SERVER: 'http://localhost:3000/',

    // sso
    GOOGLE_SSO: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=913517526924-rroeqqr6q2g3n4gd1c9i9hpiu1f0evp5.apps.googleusercontent.com&scope=openid profile email&redirect_uri=https://accounts.thesustainabilitycloud.com/sso/google/call-back',
    GOOGLE_SSO_SIGN_UP: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=913517526924-rroeqqr6q2g3n4gd1c9i9hpiu1f0evp5.apps.googleusercontent.com&scope=openid profile email&redirect_uri=https://accounts.thesustainabilitycloud.com/user/sign-up',

    AZURE_SSO: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&client_id=e8714629-b1d6-4ea7-a813-fbc37f985d25&scope=openid+email+profile&redirect_uri=https://accounts.thesustainabilitycloud.com/sso/azure/call-back',
    // /sso/


    // app url
    NETZERO_ADMIN_URL: 'https://tscadmin.thesustainabilitycloud.com/',
    ACCOUNT_URL: 'https://accounts.thesustainabilitycloud.com/',
    ADMIN_URL: 'https://admin.thesustainabilitycloud.com/',
    NETZERO_URL: 'https://netzero.thesustainabilitycloud.com/',
    SUPPLIER_URL: 'https://supplier-netzero.thesustainabilitycloud.com/',
    OFFSET_URL: 'https://offset.thesustainabilitycloud.com/',
    ENERGY_URL: 'https://energy.thesustainabilitycloud.com/',
    CONNECT_URL: 'https://connect.thesustainabilitycloud.com/',
    // /app url/


    // prod
    ORGANIZATION_API_URL: 'https://api-org.thesustainabilitycloud.com/',
    ORGANIZATION_PUBLIC_API_URL: 'https://api-org.thesustainabilitycloud.com/public/',
    SUBSCRIPTION_API_URL: 'https://api-subscription.thesustainabilitycloud.com/',
    // /prod/
};
