import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-application-service',
  template: `
    <p>
      application-service works!
    </p>
  `,
  styles: [
  ]
})
export class ApplicationServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
