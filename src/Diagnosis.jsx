import React from "react";
import "./body.css";
import { useState } from "react";

const symptoms = [
  "heart attack",
  "high blood pressure",
  "Fever",
  "Diarrhea",
  "Fatigue",
  "Muscle aches",
  "Coughing",
];

const Diagnosis = () => {
  const [search, setSearch] = useState("");
  const [age, setAge] = useState("");
  //const [possiableSymptom, setPossiableSymptom] = useState([]);
  return (
    <div className="diagnosis_box">
      <div className="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="searchbar"
          value={search}
          placeholder="Enter a symptom"
        />
      </div>
      <div className="dropdown">
        {symptoms
          .filter((symptoms) => {
            const searchSymptom = search.toLowerCase();
            const nameSymptom = symptoms.toLowerCase();
            return (
              searchSymptom &&
              nameSymptom.startsWith(searchSymptom) &&
              nameSymptom !== searchSymptom
            );
          })
          .map((symptoms) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div onClick={() => setSearch(symptoms)} key={symptoms}>
              {symptoms}
            </div>
          ))}
      </div>
      <div className="age">
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="age"
          id="age"
        />
      </div>
      <div className="gender">
        <p>Gender</p>
        <select name="gender" id="gender">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Diagnosis;
