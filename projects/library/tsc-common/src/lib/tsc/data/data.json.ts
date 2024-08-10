export class StaticPageOneJson {
    static pageNotFound = {
        cardClass: 'cardHeightWithoutHF',
        title: '404 Not Found',
        body: "The page you are trying to reach does not exist!",
        imgPath: '/assets/images/page-not-found.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: '404 not found',
        containsHeaderFooter: false
    };

    static noAccess = {
        cardClass: 'cardHeightWithoutHF',
        title: 'No Access!',
        body: "You don't have access.",
        imgPath: '/assets/images/no-access.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'No access',
        containsHeaderFooter: false
    };

    static linkExpired = {
        cardClass: 'cardHeightWithoutHF',
        title: 'Link expired!',
        body: 'The link sent to you is expired.',
        imgPath: '/assets/images/link-expire.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Link expired',
        containsHeaderFooter: false
    };

    static featureUnavailable = {
        cardClass: 'cardHeightWithHF',
        title: 'Restricted!',
        body: 'This feature is not currently available on your subscription plan.',
        imgPath: '/assets/images/feature-unavialable.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Feature not available',
        containsHeaderFooter: true
    };

    static timezoneNotFound = {
        cardClass: 'cardHeightWithoutHF',
        title: "Timezone is missing. Let's fix it!",
        body: "It looks like you haven't set up your time zone yet. Setting your time zone helps us provide you with accurate information. Click on the link below to select your preferred timezone.",
        imgPath: '/assets/images/timezone-not-found.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Timezone not set',
        containsHeaderFooter: false
    };

    static comingSoon = {
        cardClass: 'cardHeightWithHF',
        title: 'Coming Soon!',
        body: 'This feature is in development and will be available shortly. Thank you for your patience and cooperation!',
        imgPath: '/assets/images/coming-soon.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Feature coming soon',
        containsHeaderFooter: true
    }
}

export class StaticPageThreeJson {
    static featureNotConfigure = {
        cardClass: 'cardHeightWithHF',
        title: 'Feature not configured!',
        body: 'Oops! Looks like this feature is not configured yet.<br />Contact <span class="text-primary">support@thesustainabilitycloud.com.',
        imgPath: '/assets/images/feature-not-configure.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Feature not configured',
        containsHeaderFooter: false
    }
}