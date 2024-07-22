import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TargetBenchmarkEnum } from '@carbon/enum/target-benchmark.enum';
import { StorageService } from '@library/storage-service';


import { CircleProgressComponent, CircleProgressOptions } from 'ng-circle-progress';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'
  ]
})
export class ViewComponent implements OnInit {

  rootOrgID: any;

  TargetBenchmark: TargetBenchmarkEnum;

  panelOpenState = true;

  yearlyGrowthPercentage: number;
  yearlyGrowthSince: number;
  validatedCompanies: number;
  validatedYear: number;
  smeGrowthPercentage: number;

  @ViewChild('circleProgress') circleProgress: CircleProgressComponent;
  options = new CircleProgressOptions();

  @Input()
  viewMore: boolean;

  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.rootOrgID = this.storageService.getStorage('rootOrgID');

    this.yearlyGrowthPercentage = TargetBenchmarkEnum.YEARLYGROWTHPERCENTAGE;
    this.yearlyGrowthSince = TargetBenchmarkEnum.YEARLYGROWTHSINCE;
    this.validatedCompanies = TargetBenchmarkEnum.VALIDATEDCOMPANIES;
    this.validatedYear = TargetBenchmarkEnum.VALIDATEDYEAR;
    this.smeGrowthPercentage = TargetBenchmarkEnum.SMEGROWTHPERCENTAGE;
  }

  circle = {
    radius: 70,
    outerStrokeWidth: 10,
    space: -10,
    innerStrokeColor: "#e7e8ea",
    innerStrokeWidth: 10,
    showSubtitle: false,
    subtitleFormat: false,
    startFromZero: true,
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: 'green',
    animationDuration: 500,
    titleFontSize: 30,
    backgroundColor: '#ffffff',
  }

  circleB = {
    percent: TargetBenchmarkEnum.VALIDATEDCOMPANIES,
    showUnits: false,
    radius: 70,
    maxPercent: 9999,
    outerStrokeWidth: 10,
    space: -10,
    innerStrokeColor: "#e7e8ea",
    innerStrokeWidth: 10,
    showSubtitle: false,
    subtitleFormat: false,
    startFromZero: true,
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: 'green',
    animationDuration: 500,
    titleFontSize: 25,
    backgroundColor: '#ffffff',
  }
}
