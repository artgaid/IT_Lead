import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInStore, getNumbers } from "../../actions/numbersActions";

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
    <div>
      <button onClick={updateHandle}>Update</button>
      <form onSubmit={addHandle}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter the number"
        ></input>
        <button type="submit">Enter</button>
      </form>
      <h3>File name: {fileName}</h3>
    </div>
  );
};

export default DataControl;
