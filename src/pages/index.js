import { useState } from "react";

export default function Home() {
  return (<div>
            <h1>Aggie Canvas</h1>
            <AboutText />
            <Rules />
            <SignIn />
          </div>  
          );
}

function AboutText() {
  return (<p>Aggie Canvas is a campus wide event that will allow USU student to create art together. Once students have logged on this will be able to color one pixel a minute
    on an originally blank canvas. This project will allow students to work together or alone to create images of there choice. 
  </p>);
}

function Rules() {
  return(
    <div>
      <h2>Rules: </h2>
      <ul>
          <li>All participants must be current students in USU.</li>
          <li>Participants may not use their pixels to write out any profane and/or offensive language.</li>
          <li>Participants may not use their pixels to create inapropriate, crud, or offensive images.</li>
      </ul>
      <p>If participants fail to abide by these rules they will be banned for 12 hours. If Participant is banned 3 times they will be banned permanently.</p>
    </div>);
}

function SignIn() {
  const [inputs, setInputs] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onCheckBoxClick = () => {
    setChecked(!checked);
    return handleSubmit()
  }

  const emailChange = (event) => {
    setEmail(event.target.value);
  }

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  }

  const handleSubmit = () => {
    return (checked ? setIsDisabled(true) : setIsDisabled(false));
  }

  return(
      <div>
          <form onSubmit={handleSubmit}>
              <label>Email: 
                <input 
                  type="email"
                  name="email"
                  value={email}
                  onChange={emailChange}
                  />
                </label><br />
                {/* <label>Password: 
                    <input
                      type="text"
                      name="password"
                      value={inputs.password || ""}
                      onChange={handleChange}
                    ></input>
                </label> */}
                <p>  
                <input type="checkbox"
                        name="checkBox"
                        value={inputs.checkBox || false}
                        onClick={onCheckBoxClick}
                />
                  I have read and agree to abide by the rules listed above.
                </p>
                <input type="submit" value="Submit" disabled={isDisabled}/>
          </form>
      </div>
  );
}
