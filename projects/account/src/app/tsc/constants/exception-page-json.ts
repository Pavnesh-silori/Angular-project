export interface ExceptionPageI {
    title: string;
    body: string;
    imgPath: string;
    imgClass: string;
    imgAlt: string;
}

export class ExceptionPageJson {
    static invalidLInk = {
        cardClass: 'cardHeightWithoutHF',
        title: 'Page not found!',
        body: "Page you are trying to access does not exist.",
        imgPath: '/assets/images/page-not-found.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Page not exist',
        containsHeaderFooter: false
    };

    static linkExpired = {
        cardClass: 'cardHeightWithoutHF',
        title: 'Link expired!',
        body: 'The link sent to you is expired.',
        imgPath: '/assets/images/link-expired.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Link expired',
        containsHeaderFooter: true
    };

    static signUpToLogin = {
        cardClass: 'cardHeightWithoutHF',
        title: 'Thanks for signing up!',
        body: 'We have sent you an invitation email. Check your inbox to activate your account.',
        imgPath: '/assets/images/registration_complete.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Signup successfull',
        containsHeaderFooter: false
    };

    // static userInviteExpired = {
    // cardClass: 'cardHeightWithoutHF',
    //     title: 'Link expired!',
    //     // body: 'The link sent to you is expired. <br />Please contact admin to invite you again.',
    //     body: 'The link sent to you is expired.',
    //     imgPath: '/assets/images/page-not-found.jpg',
    //     imgClass: 'defaultImage',
    //     imgAlt: 'Link expired',
    // containsHeaderFooter: false
    // };
}
