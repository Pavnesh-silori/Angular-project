export interface StaticPageOneI {
    cardClass: string;
    title: string;
    body: string;
    imgPath: string;
    imgClass: string;
    imgAlt: string;
    containsHeaderFooter: boolean;
}

export class StaticPageOne implements StaticPageOneI {
    cardClass = null;
    title = null;
    body = null;
    imgPath = null;
    imgClass = null;
    imgAlt = null;
    containsHeaderFooter = null;
}
