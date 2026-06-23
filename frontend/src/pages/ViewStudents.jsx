import { useEffect, useState } from "react";

function ViewStudents({goBack}) {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {

    const response = await fetch(
      "http://localhost:5000/api/students"
    );

    const data = await response.json();

    setStudents(data);
  }

  const filteredStudents =
    students.filter(student =>
      student.name
      .toLowerCase()
      .includes(search.toLowerCase())
    );
async function deleteStudent(id){

  const confirmDelete =
    window.confirm(
      "Are you sure you want to delete this student?"
    );

  if(!confirmDelete){
    return;
  }

  await fetch(
    `http://localhost:5000/api/students/${id}`,
    {
      method:"DELETE"
    }
  );

  alert("Student Deleted Successfully");

  loadStudents();
}
  return (

    <div className="form-container">

      <div
        className="form-card"
        style={{maxWidth:"900px"}}
      >

        <button
          onClick={goBack}
          style={{
            width:"100px",
            marginBottom:"20px"
          }}
        >
          ← Back
        </button>

        <h2>Student List</h2>

        <input
          type="text"
          placeholder="Search Student"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Year</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredStudents.map(student => (

              <tr key={student._id}>

                <td>{student.name}</td>

                <td>{student.email}</td>

                <td>{student.department}</td>

                <td>{student.year}</td>
                <td>
                    <button onClick={() => deleteStudent(student._id)}
                        >
                            Delete
                            </button>
                        </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default ViewStudents;