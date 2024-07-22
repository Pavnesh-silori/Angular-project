export interface ExceptionPageI {
    title: string;
    body: string;
    imgPath: string;
    imgClass: string;
    imgAlt: string;
}

export class ExceptionPageJson {

    static emissionSubmittedSuccessfully = {
        cardClass: 'cardHeightWithoutHF',
        title: 'Thanks',
        body: "Thanks for submitting the emission.",
        imgPath: '/assets/images/thank-you.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Thanks',
        containsHeaderFooter: false
    };

    static employeeCommuteSurveySubmittedSuccessfully = {
        cardClass: 'cardHeightWithoutHF',
        title: 'Thanks',
        body: "Thanks for submitting your commute profile.",
        imgPath: '/assets/images/thank-you.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Thanks',
        containsHeaderFooter: false
    };
}
