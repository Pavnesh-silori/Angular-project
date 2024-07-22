import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fugitive-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class FugitiveHeaderComponent implements OnInit {

    @Input() recordData: any
    @Input() gwpResponse: any

    @Input() title: any;
    @Input() cedID: any;
    @Input() view: boolean = false;
    @Input() isUpdate: boolean = false;

    constructor() { }

    ngOnInit(): void { }

}
