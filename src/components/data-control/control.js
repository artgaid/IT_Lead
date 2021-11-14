import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInStore, getNumbers } from "../../actions/numbersActions";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Input, Typography } from "@mui/material";

const DataControl = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");

  const [fileName, setFileName] = useState("data-1234");

  const updateHandle = () => {
    if (fileName === "data-1234") {
      dispatch(getNumbers(4321));
      setFileName("data-4321");
    } else {
      dispatch(getNumbers(1234));
      setFileName("data-1234");
    }
  };

  const addHandle = (e) => {
    e.preventDefault();
    dispatch(addInStore(number));
    setNumber("");
  };

  return (
    <>
      <Box>
        <form onSubmit={addHandle}>
          <Input
            sx={{ p: 1 }}
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter the number"
          ></Input>
          <Button sx={{ ml: 1, p: 1 }} variant="outlined" type="submit">
            Enter
          </Button>
          <Box display="flex">
            <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="h3">
              File name: {fileName}
            </Typography>
            <Button onClick={updateHandle}>Update</Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default DataControl;
