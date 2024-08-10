import { Injectable } from '@angular/core';

import { NO_DATA_GRAPHIC } from './tsc/constant/chart.constant';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  public createOptionWithTitleAndValue(title: string, titleColor: string): any {
    return {
      title: {
        text: title != null ? title : '',
        textStyle: {
          color: title != null ? (titleColor != null ? titleColor : 'Black') : '',
        },
        padding: [7, 0, 0, 20],
      },
      graphic: NO_DATA_GRAPHIC,
      xAxis: { show: false },
      yAxis: { show: false },
    };
  }
  constructor() { }
}
