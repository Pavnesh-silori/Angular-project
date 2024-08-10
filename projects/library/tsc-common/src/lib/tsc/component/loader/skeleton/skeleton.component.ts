import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-skeleton-loader',
    templateUrl: './skeleton.component.html',
    styleUrls: []
})
export class SkeletonComponent {

    @Input() count: number;
    @Input() appearance: string;
    @Input() theme: any;

}
