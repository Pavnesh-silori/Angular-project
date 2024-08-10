import { EChartsOption } from 'echarts';

export const LOADING_GRAPHIC: EChartsOption = {
    graphic: {
        elements: [
            {
                type: 'group',
                left: 'center',
                top: 'center',
                children: new Array(7).fill(0).map((val, i) => ({
                    type: 'rect',
                    x: i * 20,
                    shape: {
                        x: 0,
                        y: -40,
                        width: 10,
                        height: 80
                    },
                    style: { fill: '#0E2F44' },
                    keyframeAnimation: {
                        duration: 1000,
                        delay: i * 200,
                        loop: true,
                        keyframes: [
                            {
                                percent: 0.5,
                                scaleY: 0.3,
                                easing: 'cubicIn'
                            },
                            {
                                percent: 1,
                                scaleY: 1,
                                easing: 'cubicOut'
                            }
                        ]
                    }
                }))
            }
        ]
    }
};

export const NO_DATA_GRAPHIC = {
    type: 'text',
    left: 'center',
    top: 'middle',
    style: {
        fill: '#6c757d',
        fontSize: 25,
        text: "No Data",
    }
};
