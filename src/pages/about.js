import { useState } from "react";

export default function Home() {
  return (
    <div
      className="container-fluid bgWrap p-5"
      style={{
        backgroundColor: "white",
        color: "#002D62",
        fontFamily: "Georgia, serif",
        fontWeight: "bolder",
        fontSize: "20px",
      }}
    >
      <h1>Aggie Canvas</h1>
      <LoadImage />
      <AboutText />
      <Rules />
    </div>
  );
}

function LoadImage() {
  return (
    <div style={{ position: "absolute", right: "0%", paddingRight: "50px" }}>
      <img
        src={"/images/aggieBull.png"}
        alt="USU Bull Logo"
        width="400px"
        height="400px"
      />
    </div>
  );
}

function AboutText() {
  return (
    <p className="w-50">
      Aggie Canvas is a campus wide event that will allow USU student to create
      art together. Students will be able to color one pixel at a time on a
      canvas together. This project will allow students to work together or
      alone to create images of there choice.
    </p>
  );
}

function Rules() {
  return (
    <div>
      <h2>Rules: </h2>
      <ul className="w-50">
        <li>All participants must be current students in USU.</li>
        <li>
          Participants may not use their pixels to write out any profane and/or
          offensive language.
        </li>
        <li>
          Participants may not use their pixels to create inapropriate, crud, or
          offensive images.
        </li>
      </ul>
    </div>
  );
}

function SignIn() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onCheckBoxClick = () => {
    setChecked(!checked);
    return handleSubmit();
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  return (
    <div>
      <h2>Login using your USU Eamil:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" value={email} onChange={emailChange} />
        <br />
        {/* <label>Password: 
                    <input
                      type="text"
                      name="password"
                      value={inputs.password || ""}
                      onChange={handleChange}
                    ></input>
                </label> */}
        <p>
          <input
            type="checkbox"
            name="checkBox"
            value={checked}
            onClick={onCheckBoxClick}
          />
          &nbsp;&nbsp;&nbsp;I have read and agree to abide by the rules listed
          above.
        </p>
        <input type="submit" value="Submit" disabled={isDisabled} />
      </form>
    </div>
  );
}
