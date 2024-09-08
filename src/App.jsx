import { useState } from "react";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(newValue, inputIdentifier) {
    setUserInput(perv => {
      return {
        ...perv,
        [inputIdentifier]: +newValue
      }
    })
  }
  const inputIsValid = userInput.duration >= 1;
  return (
    // <h1>React Investment Calculator</h1>
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App
