import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({dataPoints}) {

    const dataPointValues = dataPoints.map(dataPoint => {
        return dataPoint.value;
    });
    const totalMaximum = Math.max(...dataPointValues);
    console.log("Omar 2", dataPoints);


  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum} 
          />
        );
      })}
    </div>
  );
}

export default Chart;
