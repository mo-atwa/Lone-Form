import { useState } from "react";
import Successfull from "./Successfull";
import Wrong from "./Wrong";

export default function LoneForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "500",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const buttonIsDisabled =
    !formInputs.age || !formInputs.phoneNumber || !formInputs.name;

  const [text, setText] = useState("");
  function returnDiv() {
    if (isWrong) {
      setIsWrong(false);
    } else {
      setIsSubmitted(false);
    }
  }

  return (
    <div onClick={returnDiv}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const age = parseInt(formInputs.age, 10);
          if (age < 18 || age > 60) {
            setIsWrong(true);
            setText("Age is NOT ALLOWED");
          } else if (formInputs.phoneNumber.length !== 11) {
            setIsWrong(true);
            setText("Phone number format is INCORRECT");
          } else {
            setIsSubmitted(true);
          }
        }}
      >
        <div className="form">
          <h1 className="header">Requesting a Loan</h1>
          <hr />
          <label>name: </label>
          <input
            type="text"
            value={formInputs.name}
            onChange={(event) =>
              setFormInputs({ ...formInputs, name: event.target.value })
            }
          />
          <br />
          <label>Phone Number: </label>
          <input
            type="text"
            value={formInputs.phoneNumber}
            onChange={(event) =>
              setFormInputs({
                ...formInputs,
                phoneNumber: event.target.value.replace(/[^0-9]/g, ""),
              })
            }
          />
          <br />
          <label>Age: </label>
          <input
            type="text"
            value={formInputs.age}
            onChange={(event) =>
              setFormInputs({
                ...formInputs,
                age: event.target.value.replace(/[^0-9]/g, ""),
              })
            }
          />
          <br />
          <label>Are you an employee? </label>
          <br />
          <input
            className="check"
            type="checkbox"
            checked={formInputs.isEmployee}
            onChange={(event) => {
              setFormInputs({
                ...formInputs,
                isEmployee: event.target.checked,
              });
            }}
          />
          <br />
          <label>The salary in dollars: </label>
          <input
            type="text"
            value={formInputs.salary}
            onChange={(event) =>
              setFormInputs({
                ...formInputs,
                salary: event.target.value.replace(/[^0-9]/g, ""),
              })
            }
          />
          <br />
          <input
            className={buttonIsDisabled ? "button disabled" : "button"}
            type="submit"
            value="Submit"
            disabled={buttonIsDisabled}
          />
        </div>
      </form>
      {isSubmitted && <Successfull />}
      {isWrong && <Wrong theWrong={text} />}
    </div>
  );
}
