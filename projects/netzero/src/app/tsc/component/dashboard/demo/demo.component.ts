import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    constructor() { }

    chartContent = [
        {
            title: '1.9 M',
            subTitle: 'kWh',
            name: 'Energy',
            bgColor: '#f6a538',
            chartData: {}
        },
        {
            title: '1.1 M',
            subTitle: 'm3',
            name: 'Water',
            bgColor: '#006eb6',
            chartData: {}
        },
        {
            title: '4.2 M',
            subTitle: 'tCO2e',
            name: 'Emission',
            bgColor: '#327344',
            chartData: {}
        },
        {
            title: '1.9 M',
            subTitle: 'tonnes',
            name: 'Waste',
            bgColor: '#cb4848',
            chartData: {}
        },
        {
            title: '5',
            subTitle: 'non-compliant facilities',
            name: 'Enviro',
            bgColor: '#a15555',
            type: 'list',
            chartData: [
                {
                    name: 'Acme retail outlet',
                    label: 'CPCB'
                },
                {
                    name: 'Acme manufacturing facility',
                    label: 'US EPA'
                },
                {
                    name: 'Acme corporate tower',
                    label: 'GSPCB'
                },
                {
                    name: 'Acme manufacturing facility 2',
                    label: 'CPCB'
                },
                {
                    name: 'Acme manufacturing facility 3',
                    label: 'CPCB'
                }
            ]
        },
    ]

    initOpts = {
        renderer: 'svg',
        width: 300,
        height: 300,
    };

    options: EChartsOption = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                data: ['jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Julay', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisTick: {
                    alignWithLabel: true,
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} K'
                }
            },
        ],
        series: [
            {
                name: 'Counters',
                type: 'bar',
                barWidth: '60%',
                data: []
            },
        ],
    };


    ngOnInit(): void { this.setData() }

    setData() {
        this.chartContent.forEach((item, i) => {
            if (item?.type !== 'list') {
                item.chartData = this.createData(item, i);
            }
        });
    }

    createData(item, i) {
        let opData = JSON.parse(JSON.stringify(this.options));
        switch (i) {
            case 0:
                opData.series[0].data = [10, 52, 200, 334, 320, 330, 230, 220, 230, 210, 170, 180]
                break;

            case 1:
                opData.series[0].data = [50, 58, 70, 80, 90, 95, 85, 120, 135, 340, 330, 280]
                break;

            case 2:
                opData.series[0].data = [220, 210, 230, 334, 300, 320, 220, 250, 270, 300, 280, 300]
                break;

            case 3:
                opData.series[0].data = [559, 500, 450, 420, 425, 405, 320, 390, 210, 361, 250, 100]
                break;
        }
        opData.color = [item.bgColor];
        return opData;
    }
}
