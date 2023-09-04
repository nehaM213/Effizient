// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [userData,setUserData]=useState({
    email:"",
    fullName:"",
    age:"",
    hEdu:"",
    instituteHEdu:"",
    programHEdu:"",
    experience:"",
    instituteCanada:"",
    programCanada:"",
    countryOrigin:"",
    futureGoals:"",
    listeningScore:"",
    readingScore:"",
    speakingScore:"",
    writtingScore:"",
    tutionFeePaid:"",
    feeAmt:"",
    gic:"",
    gicAmt:""
  });
  return (
    <div className="App">
      <h1>Customized SOP Generator</h1>
      <form>
        <label>
          Email <span className="imp">*</span>
          <input type="email"></input>
        </label>

        <label>
          Full Name <span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          Age <span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          Highest Level of Education <span className="imp">*</span>
          <select type="email">
            <option value="" disabled>
              Choose
            </option>
            <option value="grade-12">Grade 12</option>
            <option value="diploma">Diploma</option>
            <option value="bechelors">Bachelors Degree</option>
            <option value="masters">Masters Degree</option>
            <option value="phd">PhD</option>
          </select>
        </label>

        <label>
          Institute where you completed your highest level of education
          <span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          Do you have any relevant work experience?
          <span className="imp">*</span>
          <p>
            Write None if no work experience.Provide the following details if
            yes:
          </p>
          <ol>
            <li>Job Title</li>
            <li>Company Name</li>
            <li>Job duties</li>
          </ol>
          Sample Answer: I worked as a Sales Manager at Effizient Immigration
          Inc from Jan 2022 till Feb 2023. In this role, I managed sales
          operations, reaching out to leads, lead the outreach program, ensured
          meeting monthly targets.
          <input type="text"></input>
        </label>

        <label>
          What institute did you get admitted to in Canada?
          <span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          What is your program of study in Canada?<span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          Which country are you applying from?<span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          What are your future goals?<span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          English Scores - Listening<span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          English Scores - Reading<span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          English Scores - Speaking<span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          English Scores - Writing<span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          Did you pay your first year tuition?<span className="imp">*</span>
          <label className="rLabel">
            <input
              type="radio"
              name="tuition"
              value="Yes"
              className="radio"
            ></input>
            Yes
          </label>
          <label className="rLabel">
            <input
              type="radio"
              name="tuition"
              value="No"
              className="radio"
            ></input>
            No
          </label>
        </label>

        <label>
          How much tuition fee did you pay?<span className="imp">*</span>
          <input type="text"></input>
        </label>

        <label>
          Did you do a GIC?<span className="imp">*</span>
          <label className="rLabel">
            <input
              type="radio"
              name="gicFee"
              value="Yes"
              className="radio"
            ></input>
            Yes
          </label>
          <label className="rLabel">
            <input
              type="radio"
              name="gicFee"
              value="No"
              className="radio"
            ></input>
            No
          </label>
        </label>

        <label>
          How much did you pay towards GIC?<span className="imp">*</span>
          <input type="text"></input>
        </label>
      </form>
    </div>
  );
}

export default App;
