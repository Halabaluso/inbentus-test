import { EChartsOption } from "echarts";

const X_AXIS_INTERVAL = 1;

const LINE_COLOR = "#7C856B";
const LINE_WIDTH = 1;

const VERTICAL_PADDING = 75;
const HORIZONTAL_PADDING = 75;

type CreateChartOptions = {
  max: number;
  min: number;
  seconds: number;
  color: string;
  WSdataY: Array<number>
  WSdataX: Array<number>
};

export const createChartOptions = ({
  max,
  min,
  seconds,
  color,
  WSdataY,
  WSdataX
}: CreateChartOptions): EChartsOption => ({
  animation: false,
  xAxis: {
    data: WSdataX,
    gridIndex: 0,
    min: 0,
    max: seconds,
    interval: 1,
    show: true,
    axisLabel:{
      show: true,
      interval: 10,
      align: "right"
    },
    maxInterval: X_AXIS_INTERVAL,
    axisLine: {
      lineStyle: {
        color: LINE_COLOR,
        width: LINE_WIDTH,
      },
    },
  },
  yAxis: {
    // show: false,
    gridIndex: 0,
    min,
    max,
    splitLine: {
      show: false,
    },
    silent: true,
    interval: 10,
    position: "left",
    axisLine: {
      onZero: true,
      lineStyle: {
        color: LINE_COLOR,
        width: LINE_WIDTH,
      },
    },
    //   axisLabel: {
    //     formatter: getLabelFormatter(min, max, interval),
    //   },
  },
  series: [
    {
      data: WSdataY,
      type: "line",
      symbol: "none",
      animation: true,
      color,
      areaStyle: {
        origin: "auto",
        color,
      },
      lineStyle: {
        width: LINE_WIDTH,
      },
    },
  ],
  grid: {
    top: VERTICAL_PADDING,
    bottom: VERTICAL_PADDING,
    left: HORIZONTAL_PADDING,
    right: HORIZONTAL_PADDING,
  },
});
