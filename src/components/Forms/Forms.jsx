import { useState } from "react";

export default function Forms() {
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");

  const [fnShow, setFnShow] = useState("");
  const [snShow, setSnShow] = useState("");
  const [gShow, setGShow] = useState("");
  const [cShow, setCShow] = useState("");
  const [secShow, setSecShow] = useState("");

  const [outputText, setOutputText] = useState("");

  return (
    <div className="flex flex-col items-center justify-top gap-10 p-10 pt-3 bg-zinc-950 rounded-lg">
      <div className="text-3xl font-bold">REACT FORMS</div>
      <p className="text-gray-300 text-lg max-w-2xl text-center mb-4">
        <strong>Forms</strong> are how users interact with your app—entering information, making choices, and submitting data. In React, you use <code>useState</code> to keep track of what the user types or selects. Each input updates its own piece of state, so your app always knows the latest values.<br /><br />
        This example shows how to build a form for personal information, handle changes, and manage the data in React. Try filling out the fields and clicking Submit to see how the state updates!
      </p>
      {/*CARD PARENT*/}
      <div className="w-250 h-100 flex flex-row items-center justify-center gap-5">
        {/*FORM CARD*/}
        <div className="w-1/2 h-full border-2 border-gray-300 rounded-2xl p-5 space-y-2 flex flex-col">
          <div className="text-lg font-bold w-full flex justify-center">
            Personal Information
          </div>
          {/*COMPLETE NAME*/}
          <div className="text-md font-semibold">FullName</div>
          <div className="flex flex-row gap-2 w-full h-fit">
            <label className="text-md w-1/2 ">
              FirstName:
              <input
                type="text"
                placeholder="first name here"
                className="input w-full border-1 border-gray-500 rounded-md p-2"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </label>
            <label className="text-md w-1/2 ">
              Surname:
              <input
                type="text"
                placeholder="surname here"
                className="input w-full border-1 border-gray-500 rounded-md p-2"
                value={sName}
                onChange={(e) => setSName(e.target.value)}
              />
            </label>
          </div>

          {/*Gender*/}
          <div className="text-md font-semibold">Gender</div>
          <div className="flex flex-row gap-2 w-full h-fit">
            <label className="text-md w-1/2 space-x-2">
              <input
                type="radio"
                name="radio-1"
                className="radio"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Male</span>
            </label>
            <label className="text-md w-1/2 space-x-2">
              <input
                type="radio"
                name="radio-1"
                className="radio"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Female</span>
            </label>
          </div>

          {/*Course & Section*/}
          <div className="text-md font-semibold">Course & Section</div>
          <div className="flex flex-row gap-2 w-full h-fit">
            {/*Dropdown for Course*/}
            <select
              className="input w-1/2 border-1 border-gray-500 rounded-md p-2 bg-neutral-800 text-white"
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              <option value="BSIT">BSIT</option>
              <option value="BSIE">BSIE</option>
              <option value="BSCPe">BSCPe</option>
            </select>
            {/*Dropdown for Section*/}
            <select
              className="input w-1/2 border-1 border-gray-500 rounded-md p-2 bg-neutral-800 text-white"
              onChange={(e) => setSection(e.target.value)}
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          {/*Submit Button*/}
          <div className="flex flex-row gap-2 w-full h-full justify-end items-end">
            <button
              className="flex btn p-2 rounded-md bg-emerald-800 hover:bg-emerald-700 w-1/4 h-10 justify-center"
              onClick={() => {
                console.log(fName);
                console.log(sName);
                console.log(gender);
                console.log(course);
                console.log(section);
                setFnShow(fName);
                setSnShow(sName);
                setGShow(gender);
                setCShow(course);
                setSecShow(section);
                setOutputText(
                  `Hello, ${fName} ${sName}. You are a ${gender} student of ${course} - ${section} section.`
                );
              }}
            >
              Submit
            </button>
          </div>
        </div>

        {/*RESULT CARD*/}
        <div className="w-1/2 h-full bg-emerald-800 rounded-2xl p-5 flex flex-col justify-between items-center">
          <div className="text-lg font-bold w-full flex justify-center">
            OUTPUT
          </div>

          <div className="text-md font-semibold">{outputText}</div>

          {/*Clear Button*/}
          <div className="flex flex-row gap-2 w-full justify-end">
            <button
              className="flex btn p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 w-1/4 h-10 justify-center"
              onClick={() => {
                setFnShow("");
                setSnShow("");
                setGShow("");
                setCShow("");
                setSecShow("");

                setFName("");
                setSName("");
                setGender("");
                setCourse("");
                setSection("");
                setOutputText("");
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
