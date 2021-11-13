import { useEffect, useState } from "react";
import { std, mean, median, mode } from "mathjs";

const Dashboard = () => {
  const [arrNumbers, setArrNumbers] = useState(null);

  /*    I have written mathematical operations in functions, 
        but I prefer to use the library "mathjs" with ready-made solutions 
    */

  //   const getMean = (arr) => arr.reduce((a, b) => a + b) / arr.length;

  //   const getMedian = (arr) => {
  //     const sorted = arr.slice().sort((a, b) => a - b);
  //     const middle = Math.floor(sorted.length / 2);

  //     if (sorted.length % 2 === 0) {
  //       return (sorted[middle - 1] + sorted[middle]) / 2;
  //     }

  //     return sorted[middle];
  //   };

  //   const getStandardDeviation = (arr, usePopulation = false) => {
  //     const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  //     return Math.sqrt(
  //       arr
  //         .reduce((acc, val) => acc.concat((val - mean) ** 2), [])
  //         .reduce((acc, val) => acc + val, 0) /
  //         // Omit the second argument, usePopulation, to get the sample standard deviation or set it to true to get the population standard deviation.
  //         (arr.length - (usePopulation ? 0 : 1))
  //     );
  //   };

  //   const getModes = (arr) => {
  //     var frequency = {}; // array of frequency.
  //     var maxFreq = 0; // holds the max frequency.
  //     var modes = [];

  //     for (var i in arr) {
  //       frequency[arr[i]] = (frequency[arr[i]] || 0) + 1; // increment frequency.

  //       if (frequency[arr[i]] > maxFreq) {
  //         // is this frequency > max so far ?
  //         maxFreq = frequency[arr[i]]; // update max.
  //       }
  //     }

  //     for (var n in frequency) {
  //       if (frequency[n] === maxFreq) {
  //         modes.push(n);
  //       }
  //     }

  //     return modes;
  //   };

  function get42() {
    setArrNumbers((prev) => [...prev, 42]);
  }

  useEffect(() => {
    fetch("http://localhost:3005/1234", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "serv data");
        setArrNumbers(data.data);
      })
      .catch((err) => console.log("Error: " + err));
  }, []);

  return (
    <>
      <br />
      <button onClick={get42}>42</button>
      <p> Mean - {arrNumbers && mean(arrNumbers).toFixed(6)} </p>
      <p> Median - {arrNumbers && median(arrNumbers).toFixed(6)} </p>
      <p> Standard Deviation - {arrNumbers && std(arrNumbers).toFixed(6)} </p>
      <p> Mode - {arrNumbers && mode(arrNumbers)[0].toFixed(6)} </p>
      {/* 
      <h3> You can check the functions here </h3>
      <hr />
      <p>Mean = {arrNumbers && getMean(arrNumbers).toFixed(6)} </p>
      <p>Median = {arrNumbers && getMedian(arrNumbers).toFixed(6)} </p>
      <p>
        StdDev = {arrNumbers && getStandardDeviation(arrNumbers).toFixed(6)}
      </p>
      <p>Mode = {arrNumbers && getModes(arrNumbers)} </p>
         */}
    </>
  );
};

export default Dashboard;
