import { AssignmentController } from '@report-framework/controller/assignment.controller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  file: any;
  constructor(
    private AssignmentController: AssignmentController,
  ) { }

  ngOnInit(): void {
    this.AssignmentController.download().subscribe(res => {
      this.file =  res
    })
  }

 

}
