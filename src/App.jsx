// to void the use of setting the previous state again and again this is introduced

import { useReducer } from "react";
const initialState = {
  fName: "",
  age: "",
  phone: "",
};
function reducerFunc(state, action) {
  console.log(state);
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case "FNAME": {
      return { ...state, fName: payload };
    }

    case "AGE": {
      return { ...state, age: payload };
    }

    case "PHONE": {
      return { ...state, phone: payload };
    }

    default:
      return state;
  }
}
function App() {
  // const [fName, setfName] = useState("");
  // const [age, setage] = useState("");
  // const [phone, setphone] = useState("");

  const [form, dispatch] = useReducer(reducerFunc, initialState);

  function handleSubmit() {
    console.log("Data Submitted", form);
  }

  function handleFullName(e) {
    dispatch({ type: "FNAME", payload: e.target.value });
  }

  function handleAge(e) {
    dispatch({ type: "AGE", payload: e.target.value });
  }

  function handlePhone(e) {
    dispatch({ type: "PHONE", payload: e.target.value });
  }

  return (
    <div className="App">
      <h1>Use Reducer</h1>
      <input
        type="text"
        value={form.fName}
        onChange={handleFullName}
        placeholder="Enter full name"
      />
      <input
        type="text"
        value={form.age}
        onChange={handleAge}
        placeholder="Enter Age"
      />
      <input
        type="text"
        value={form.phone}
        onChange={handlePhone}
        placeholder="Enter Phone"
      />

      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
}

export default App;
