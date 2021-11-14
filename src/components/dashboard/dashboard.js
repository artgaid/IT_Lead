import { useEffect } from "react";
import { std, mean, median, mode } from "mathjs";
import { useDispatch, useSelector } from "react-redux";
import { getNumbers } from "../../actions/numbersActions";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";

const Dashboard = () => {
  const storeNumbers = useSelector((state) => state);
  const dispatch = useDispatch();
  var result = [
    {
      name: "Mean",
      value: storeNumbers?.length && mean(storeNumbers).toFixed(6),
    },
    {
      name: "Median",
      value: storeNumbers?.length && median(storeNumbers).toFixed(6),
    },
    {
      name: "Standard",
      value: storeNumbers?.length && std(storeNumbers).toFixed(6),
    },
    {
      name: "Mode",
      value: storeNumbers?.length && mode(storeNumbers)[0].toFixed(6),
    },
  ];

  console.log(result);

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

  useEffect(() => {
    dispatch(getNumbers(1234));
  }, [dispatch]);

  return (
    <>
      <Grid container direction="column">
        {storeNumbers?.length &&
          result.map((el) => (
            <>
              <Grid direction="row" container>
                <Box sx={{ border: 1, width: 100, p: 1 }}>{el.name}</Box>
                <Box sx={{ border: 1, width: 100, p: 1 }}>{el.value}</Box>
              </Grid>
            </>
          ))}
      </Grid>

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
