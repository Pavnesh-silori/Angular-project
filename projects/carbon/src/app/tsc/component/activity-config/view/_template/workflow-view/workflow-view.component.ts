import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';

import { 
    ProfileImg, 
    UserService 
} from '@library/user-service';
// /tsc-library/

@Component({
    selector: 'app-workflow-view',
    templateUrl: './workflow-view.component.html',
    styles: [
    ]
})

export class WorkflowViewComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    ProfileImg = ProfileImg;
    
    @Input() activityConfigWorkflowInp: any;

    activityConfigWorkflow: any;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.activityConfigWorkflowInp && this.activityConfigWorkflowInp) {
            this.activityConfigWorkflow = this.activityConfigWorkflowInp;
        }
    }
}
