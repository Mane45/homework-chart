import { useState } from "react";
import { LineChart, Tooltip, XAxis, YAxis, Line, Legend } from "recharts";
import "./App.css";
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const [data, setData] = useState([]);
  //const [mounth, setMounth] = useState([]);
  fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
    .then((res) => res.json())
    .then((response) => {
      setData(response);
      //console.log(month[new Date(response[0].date).getMonth()])
      //console.log(new Date(response[0].date).getDate());
      //console.log(new Date(response[2].date).getDate());
    });

  // data.forEach(element => {
  //   console.log(element);
  // });

  return (
    <>
      <h1>2021 covid chart for CA</h1>
      <LineChart
        width={1800}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <XAxis dataKey={new Date(data.date).getDate()} /> */}
        <XAxis dataKey="checkTimeEt" />
        {/* <XAxis dataKey="date" /> */}
        <YAxis />
        <Tooltip />
        <Legend horizontalAlig="right" height={36} width={200} />
        <Line
          type="monotone"
          dataKey="hospitalizedCurrently"
          stroke="#e9311a"
        />
        <Line type="monotone" dataKey="inIcuCurrently" stroke="#8db4ad" />
      </LineChart>
    </>
  );
}

export default App;
