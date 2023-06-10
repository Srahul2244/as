import { MyLineChart } from "./Charts";

// css
import './charts.css';

export const ChartMainLeft = () => {

    const chartData = [
      { month: 'Feb',  visitors:24_000_000},
      { month: 'Mar',  visitors: 19_000_000 },
      { month: 'Apr',  visitors: 32_000_000 },
      { month: 'May',  visitors: 17_000_000 },
      { month: 'Jun',  visitors: 24_000_000 },
      { month: 'Jul',  visitors:20_000_000 },
    ];
  
    return (
      <div className="chart-container">
        <MyLineChart data={chartData} />
      </div>
    );
  };
  