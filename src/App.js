import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  // Hospital
  const [NAME, setName] = useState("");
  const [ADDRESS, setAddress] = useState("");
  const [CITY, setCity] = useState("");

  // Patient
  const [PID, setPid] = useState("");
  const [FIRST_NAME, setFname] = useState("");
  const [LAST_NAME, setLname] = useState("");
  const [SEX, setSex] = useState("");
  const [HOSPITAL_NAME, setHospital] = useState("");

  // Employee
  const [EID, setEid] = useState("");
  const [SALARY, setSalary] = useState("");
  const [BIRTHDATE, setBirthdate] = useState("");
  const [HOSP_NAME, setHosp] = useState("");


  const[hospitalList, setHospitalList] = useState([]);
  const[patientList, setPatientList] = useState([]);
  const[employeeList, setEmployeeList] = useState([]);
 

  const addHospital = () => {
    Axios.post("https://csc174-hospital.herokuapp.com/create", {
      NAME: NAME, 
      ADDRESS: ADDRESS, 
      CITY: CITY,
    }).then(() => {
      console.log("Success");
    });
  };

  const addPatient = () => {
    Axios.post("https://csc174-hospital.herokuapp.com/createPatient", {
      PID: PID, 
      FIRST_NAME: FIRST_NAME, 
      LAST_NAME: LAST_NAME,
      SEX: SEX,
      HOSPITAL_NAME: HOSPITAL_NAME,
    }).then(() => {
      console.log("Success");
    });
  };

  const addEmployee = () => {
    Axios.post("https://csc174-hospital.herokuapp.com/createEmployee", {
      EID: EID, 
      SALARY: SALARY, 
      BIRTHDATE: BIRTHDATE,
      HOSP_NAME: HOSP_NAME,
    }).then(() => {
      console.log("Success");
    });
  };

const getHospitals = () => {
  Axios.get("https://csc174-hospital.herokuapp.com/Hospitals").then((response) => {
    setHospitalList(response.data);
  });
};
const getPatients= () => {
  Axios.get("https://csc174-hospital.herokuapp.com/Patients").then((response) => {
    setPatientList(response.data);
  });
};
const getEmployees= () => {
  Axios.get("https://csc174-hospital.herokuapp.com/Employees").then((response) => {
    setEmployeeList(response.data);
  });
};

  return (
  <div className="App">
    <div className="information">
    <label>NAME:</label>
    <input 
    type="text"
    onChange={(event) => {
      setName(event.target.value);
    }}
     />
    <label>ADDRESS:</label>
    <input 
    type="text"
    onChange={(event) => {
      setAddress(event.target.value);
    }}
     />
    <label>CITY:</label>
    <input 
    type="text"
    onChange={(event) => {
      setCity(event.target.value);
    }}
     />
    <button onClick={addHospital}>Add Hospital</button>
    </div>

    <div className="patientInfo">
    <label>PID:</label>
    <input 
    type="text"
    onChange={(event) => {
      setPid(event.target.value);
    }}
     />
    <label>FIRST_NAME:</label>
    <input 
    type="text"
    onChange={(event) => {
      setFname(event.target.value);
    }}
     />
    <label>LAST_NAME:</label>
    <input 
    type="text"
    onChange={(event) => {
      setLname(event.target.value);
    }}
     />
     <label>SEX:</label>
    <input 
    type="text"
    onChange={(event) => {
      setSex(event.target.value);
    }}
     />
     <label>HOSPITAL_NAME:</label>
    <input 
    type="text"
    onChange={(event) => {
      setHospital(event.target.value);
    }}
     />
    <button onClick={addPatient}>Add Patient</button>
    </div> 
  
 <div className="Hospitals">
  <button onClick={getHospitals}>Show Hospitals</button>

  {hospitalList.map((val,key) => {
    return(
      <div className="Hosp">
       <h3>Hospital Table - </h3>
       <h3>Name: {val.NAME}</h3>
       <h3>Address: {val.ADDRESS}</h3>
       <h3>City: {val.CITY}</h3>
      </div>
  );
})}
    </div>

    <div className="Patients">
  <button onClick={getPatients}>Show Patients</button>

  {patientList.map((val,key) => {
    return(
      <div className="Pat">
        <h3>Patient Table -</h3>
       <h3>PID: {val.PID}</h3>
       <h3>First Name: {val.FIRST_NAME}</h3>
       <h3>Last Name: {val.LAST_NAME}</h3>
       <h3>Sex: {val.SEX}</h3>
       <h3>Hospital Name: {val.HOSPITAL_NAME}</h3>
      </div>
  );
})}
    </div>


    <div className="employeeInfo">
    <label>EID:</label>
    <input 
    type="text"
    onChange={(event) => {
      setEid(event.target.value);
    }}
     />
    <label>SALARY:</label>
    <input 
    type="text"
    onChange={(event) => {
      setSalary(event.target.value);
    }}
     />
    <label>BIRTHDATE:</label>
    <input 
    type="text"
    onChange={(event) => {
      setBirthdate(event.target.value);
    }}
     />
     <label>HOSPITAL_NAME:</label>
    <input 
    type="text"
    onChange={(event) => {
      setHosp(event.target.value);
    }}
     />
    <button onClick={addEmployee}>Add Employee</button>
    </div> 
  
 <div className="Employees">
  <button onClick={getEmployees}>Show Employees</button>

  {employeeList.map((val,key) => {
    return(
      <div className="Emp">
       <h3>Employee Table - </h3>
       <h3>EID: {val.EID}</h3>
       <h3>Salary: {val.SALARY}</h3>
       <h3>Birthdate: {val.BIRTHDATE}</h3>
       <h3>Hospital Name: {val.HOSP_NAME}</h3>
      </div>
  );
})}
    </div>

  </div>
  );
}

export default App;
