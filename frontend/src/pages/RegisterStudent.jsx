import { useState } from "react";

function RegisterStudent({goBack}) {

const [student, setStudent] = useState({
name: "",
email: "",
department: "",
year: "",
password: ""
});

const handleChange = (e) => {
setStudent({
...student,
[e.target.name]: e.target.value
});
};

async function registerStudent() {

if(
  !student.name ||
  !student.email ||
  !student.department ||
  !student.year ||
  !student.password
){
  alert("Please fill all fields");
  return;
}

const response = await fetch(
  "http://localhost:5000/api/register",
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(student)
  }
);

if(response.ok){
  alert("Registered Successfully");

  setStudent({
    name:"",
    email:"",
    department:"",
    year:"",
    password:""
  });
}
else{
  alert("Registration Failed");
}

}

return (
<div className="form-container">

  <div className="form-card">

    <button
  onClick={goBack}
  style={{
    width:"100px",
    marginBottom:"20px"
  }}
>
  ← Back
</button>
    <h2>Register Student</h2>

    <input
      type="text"
      name="name"
      placeholder="Name"
      value={student.name}
      onChange={handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={student.email}
      onChange={handleChange}
    />

    <select
      name="department"
      value={student.department}
      onChange={handleChange}
    >
      <option value="">Select Department</option>
      <option value="CSE">CSE</option>
      <option value="ECE">ECE</option>
      <option value="EEE">EEE</option>
      <option value="Mechanical">Mechanical</option>
      <option value="Civil">Civil</option>
      <option value="IT">IT</option>
    </select>

    <select
      name="year"
      value={student.year}
      onChange={handleChange}
    >
      <option value="">Select Year</option>
      <option value="1">1st Year</option>
      <option value="2">2nd Year</option>
      <option value="3">3rd Year</option>
      <option value="4">4th Year</option>
    </select>

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={student.password}
      onChange={handleChange}
    />

    <button onClick={registerStudent}>
      Register
    </button>

  </div>

</div>

);
}

export default RegisterStudent;