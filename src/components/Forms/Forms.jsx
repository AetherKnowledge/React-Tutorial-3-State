import { useState } from "react";

export default function Forms() {
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");

  return (
    <div className="flex flex-col w-full h-full items-center justify-top gap-10 p-15">
      <div className="text-3xl font-bold">REACT FORMS</div>

      {/*CARD PARENT*/}
      <div className="w-full h-3/4 flex flex-row items-center justify-center gap-5">
        {/*FORM CARD*/}
        <div className="w-1/2 h-full border-2 border-gray-300 rounded-2xl p-5 space-y-2 flex flex-col">
          <div className="text-lg font-bold w-full flex justify-center">
            Personal Information
          </div>
          {/*COMPLETE NAME*/}
          <div className="text-md font-semibold">FullName</div>
          <div className="flex flex-row gap-2 w-full h-fit">
            <label className="text-md w-1/2 ">
              First Name:
              <input
                type="text"
                placeholder="first name here"
                className="input w-full border-1 border-gray-500 rounded-md p-2"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </label>
            <label className="text-md w-1/2 ">
              SurName:
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
              }}
            >
              Submit
            </button>
          </div>
        </div>

        {/*RESULT CARD*/}
        <div className="w-1/2 h-full bg-emerald-800 rounded-2xl p-5"></div>
      </div>
    </div>
  );
}
