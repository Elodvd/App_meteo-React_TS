import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartOptions, HumSeries, TempSeries } from "../../utils/ChartOptions";
import { useState, useEffect } from "react";

export interface IChartProps {
  title: string;
  chartTempOptions: any;
  chartHumOptions: any;
}

const Chart = ({ title, chartTempOptions, chartHumOptions }: IChartProps) => {
  const [options, setOptions] = useState(ChartOptions);

  useEffect(() => {
    setOptions((prev) => ({
      ...prev,
      title: { text: title },
      series: [
        { ...TempSeries, data: chartTempOptions },
        { ...HumSeries, data: chartHumOptions },
      ],
    }));
  }, [title, chartTempOptions, chartHumOptions]);

  return (
    <div className="chartContainer">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
