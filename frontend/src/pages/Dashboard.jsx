import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import RegisterStudent from "./RegisterStudent";
import ViewStudents from "./ViewStudents";

function Dashboard() {

  const [page, setPage] = useState("home");
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    loadStudentCount();
  }, []);

  async function loadStudentCount() {

    const response = await fetch(
      "http://localhost:5000/api/students"
    );

    const data = await response.json();

    setTotalStudents(data.length);
  }

  if(page === "register"){
    return <RegisterStudent goBack={() => setPage("home")} />;
  }

  if(page === "view"){
    return <ViewStudents goBack={() => setPage("home")} />;
  }

  return (
    <>
    <Navbar setPage={setPage} />
    <div className="dashboard">

      <h1 className="title">
        Student Management System
      </h1>

      <div className="button-container">

        <div className="card-button">

          <h3>Total Students</h3>

          <p
            style={{
              fontSize:"40px",
              fontWeight:"bold"
            }}
          >
            {totalStudents}
          </p>

        </div>

        <div
          className="card-button"
          onClick={() => setPage("register")}
        >
          <h3>Register Student</h3>

          <p>
            Add new student records into the system database.
          </p>
        </div>

        <div
          className="card-button"
          onClick={() => setPage("view")}
        >
          <h3>View Students</h3>

          <p>
            Search, manage and monitor registered students.
          </p>
        </div>

      </div>

    </div>
    <div className="footer">
      Built with React, Node.js and MongoDB
    </div>
    </>
  );
}

export default Dashboard;